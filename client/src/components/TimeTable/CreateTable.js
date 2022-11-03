import React from "react";
import axios from "axios";

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class CreateTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            RouteID:"",
            Trip:"",
        }
    }

    OnChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    async OnAdd() {
        const Table = {
            RouteID:this.state.RouteID,
            Trip:this.state.Trip,
            Day: {
                Monday : [],
                Tuesday : [],
                Wednesday : [],
                Thursday : [],
                Friday : [],
                Saturday : [],
                Sunday : []
            }
        }
        console.log(Table);

        await axios.post('http://localhost:8070/timetable/create', Table)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message))
    }

    render() {
        return (
            <div>
                <h1>Create Table</h1>

                <FormControl fullWidth>
                                               
                            <TextField
                                autoFocus
                                margin="dense"
                                name="RouteID"
                                label="Route Number"
                                type="number"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChange(e)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                name="Trip"
                                label="Trip"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(e) => this.OnChange(e)}
                            />
                        </FormControl>

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
                            onClick={() => this.OnAdd()} > Add TimeTable </Button>
            </div>
        )
    }
}