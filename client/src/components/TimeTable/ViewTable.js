import React from "react";
import axios from "axios";

import {AlertUpdateTable, AlertDeleteTable, AlertAddedTable} from "./Alert/Alert";

import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default class ViewTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Table:{},
            Monday:[],
            Tuesday:[],
            Wedenesday:[],
            Thursday:[],
            Friday:[],
            Saturday:[],
            Sunday:[],
            RouteID:"",
            edit:false,
            cid:"",
            day:"",
            time:"",
            BusID: "",
            add:false,
            round:""
        }
    }

    componentDidMount() {
        
    }

    OnChangings(e) {
        this.setState({[e.target.id]: e.target.value})
    }

    OnSearch() {
        console.log(this.state.RouteID);

        axios.get('http://localhost:8070/timetable/' + this.state.RouteID)
        .then((res) => {this.setState({
            Table:res.data,
            Monday:res.data.Day.Monday,
            Tuesday:res.data.Day.Tuesday,
            Wedenesday: res.data.Day.Wednesday,
            Thursday: res.data.Day.Thursday,
            Friday: res.data.Day.Friday,
            Saturday: res.data.Day.Saturday,
            Sunday: res.data.Day.Sunday
        }); console.log(res.data);
            console.log(res.data.Day.Monday);
        })
        .catch((err) => console.log(err.message));
    }

    OnChangeEdit(e) {
        // console.log(e.target);
        this.setState({[e.target.name]: e.target.value})
    }

    async OnEdit() {
        console.log(this.state.Table._id);
        // console.log(this.state.cid);
        this.EditClose();

        const Cell = {
            Cid:this.state.cid,
            day:this.state.day,
            Time:this.state.time,
            BusID:this.state.BusID
        }
        console.log(Cell);

        await axios.put('http://localhost:8070/timetable/cell/' + this.state.Table._id, Cell)
        .then((res) => {
            console.log(res.data);
            if(res.status == 200) {
                AlertUpdateTable("success", "Updated", res.data)
            }else {
                AlertUpdateTable("error", "Error", res.data)
            }
        })
        .catch((err) => console.log(err.message))

        this.OnSearch();
    }

    EditOpen(id, day, time, bus) {
        this.setState({edit:true, cid:id, day:day, time:time, BusID:bus})
    }

    EditClose() {
        this.setState({edit:false})
    }

    async OnDelete(day, round) {
        console.log(this.state.Table.RouteID);
        console.log(day);
        console.log(round);

        await axios.delete('http://localhost:8070/timetable/' + this.state.Table.RouteID +"/"+ day +"/"+ round)
        .then((res) => {
            console.log(res.data);
            if(res.status == 200) {
                AlertDeleteTable("success", "Deleted", res.data)
            }else {
                AlertDeleteTable("error", "Error", res.data)
            }
        })
        .catch((err) => console.log(err.message))

        this.OnSearch();
    }

    OnTimeAddOpen(){
        this.setState({add:true})
    }
    OnTimeAddClose(){
        this.setState({add:false})
    }

    async onAddTime() {
        this.OnTimeAddClose();
        const Cell = {
            Day:this.state.day,
            Data:{
                Time:this.state.time,
                BusID:this.state.BusID,
                Round:this.state.round
            }            
        }
        console.log(Cell);

        await axios.put('http://localhost:8070/timetable/edit/' + this.state.Table.RouteID, Cell)
        .then((res) => {
            console.log(res.data);
            if(res.status == 200) {
                AlertAddedTable("success", "Added", res.data)
            }else {
                AlertAddedTable("error", "Error", res.data)
            }
        })
        .catch((err) => console.log(err.message))

        this.OnSearch();
    }

    render() {
        return (
            <div>
                <Button variant="outlined" sx={{ backgroundColor:"lightgreen", color:"black"}} onClick={ () => {window.location = "/admin/createTable"}}> Create Table </Button> <br/>

                <TextField
                    placeholder={"Eg:Root Number"}
                    onChange={(e) => this.OnChangings(e)}
                    margin="normal"
                    variant="outlined"
                    id="RouteID"
                />
                <Button
                    size="medium"
                    variant="outlined"
                    sx={{
                        marginLeft:"20px",
                        marginTop:"20px",
                        height:"50px",
                        color: "black",
                        backgroundColor:"blue"
                    }}
                    onClick={() => this.OnSearch()} > Search </Button>

                    <h1> {this.state.Table.RouteID + "  " + this.state.Table.Trip} </h1>

                    <Button
                    size="medium"
                    variant="outlined"
                    sx={{
                        marginLeft:"20px",
                        marginTop:"20px",
                        height:"50px",
                        color: "black",
                        backgroundColor:"blue"
                    }}
                    onClick={() => this.OnTimeAddOpen()} > Add Time </Button>
                <Table width="100">
                    <TableHead>
                        <TableRow>
                            <TableCell>Monday</TableCell>
                            <TableCell>Tuesday</TableCell>
                            <TableCell>Wedenesday</TableCell>
                            <TableCell>Thursday</TableCell>
                            <TableCell>Friday</TableCell>
                            <TableCell>Saturday</TableCell>
                            <TableCell>Sunday</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableCell>
                            {this.state.Monday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                   
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Monday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton> <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Monday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                   
                                </tr>
                            ))}
                            
                        </TableCell>
                        <TableCell>
                        {this.state.Tuesday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Tuesday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Tuesday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                        <TableCell>
                        {this.state.Wedenesday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Wedenesday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Wedenesday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                        <TableCell>
                        {this.state.Thursday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Thursday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Thursday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                        <TableCell>
                        {this.state.Friday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Friday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Friday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                        <TableCell>
                        {this.state.Saturday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Saturday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Saturday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                        <TableCell>
                        {this.state.Sunday.map((m) => (
                                <tr>
                                    <td>
                                        {m.Time} <br/>
                                        {m.BusID} <br/>
                                        {m.Round}
                                    </td>
                                    <IconButton 
                                        onClick={() => this.EditOpen(m._id, "Sunday", m.Time, m.BusID)}
                                        color="primary"  
                                        component="label">
                                        <EditIcon />
                                    </IconButton>
                                    <br/>
                                    <IconButton 
                                        onClick={() => this.OnDelete("Sunday", m.Round)}
                                        color="error"  
                                        component="label">
                                        <DeleteForeverIcon />
                                    </IconButton>
                                </tr>
                            ))}
                        </TableCell>
                    </TableBody>
                </Table>

                <Dialog 
                    open={this.state.edit} 
                    fullWidth="true"
                    maxWidth="sm"
                    height="auto"
                    padding="10px"
                    onClose={() => this.EditClose()}>
                    <DialogTitle>Edit Times Details</DialogTitle>
                    <DialogContent>
                    
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="day"
                                value={this.state.day}
                                label="Age"
                                onChange={(e) => this.OnChangeEdit(e)}
                            >
                            <MenuItem value={"Monday"}>Monday</MenuItem>
                            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                            <MenuItem value={"Thursday"}>Thursday</MenuItem>
                            <MenuItem value={"Friday"}>Friday</MenuItem>
                            <MenuItem value={"Saturday"}>Saturday</MenuItem>
                            <MenuItem value={"Sunday"}>Sunday</MenuItem>
                            </Select>

                            <TextField
                                autoFocus
                                margin="dense"
                                name="time"
                                label=""
                                value={this.state.time}
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChangeEdit(e)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                name="BusID"
                                label="Vehicle No"
                                value={this.state.BusID}
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChangeEdit(e)}
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.EditClose()}>Cancel</Button>
                        <Button onClick={() => this.OnEdit()}>Save</Button>
                    </DialogActions>
                </Dialog>

                <Dialog 
                    open={this.state.add} 
                    fullWidth="true"
                    maxWidth="sm"
                    height="auto"
                    padding="10px"
                    onClose={() => this.OnTimeAddClose()}>
                    <DialogTitle>Edit Times Details</DialogTitle>
                    <DialogContent>
                    
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="day"
                                value={this.state.day}
                                label="Age"
                                onChange={(e) => this.OnChangeEdit(e)}
                            >
                            <MenuItem value={"Monday"}>Monday</MenuItem>
                            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                            <MenuItem value={"Thursday"}>Thursday</MenuItem>
                            <MenuItem value={"Friday"}>Friday</MenuItem>
                            <MenuItem value={"Saturday"}>Saturday</MenuItem>
                            <MenuItem value={"Sunday"}>Sunday</MenuItem>
                            </Select>

                            <TextField
                                autoFocus
                                margin="dense"
                                name="time"
                                label=""
                                type="time"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChangeEdit(e)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                name="BusID"
                                label="Vehicle No"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChangeEdit(e)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                name="round"
                                label="Round"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChangeEdit(e)}
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.OnTimeAddClose()}>Cancel</Button>
                        <Button onClick={() => this.onAddTime()}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}