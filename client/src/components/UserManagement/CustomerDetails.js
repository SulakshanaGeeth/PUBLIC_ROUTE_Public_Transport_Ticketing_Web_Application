import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { BACKEND_BASE_URL } from "../constant";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ReplyIcon from "@mui/icons-material/Reply";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function CustomerDetails() {
  const [users, setUsers] = useState([]);

  const [open, setOpen] = React.useState(false);

  const history = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${BACKEND_BASE_URL}/api/auth/users`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUser(); // this function will called only once
  }, []); //empty dependency array means run only once when the component first renders

  function filterData(users, SearchQry) {
    const result = users.filter((users) =>
      users.username.toLowerCase().includes(SearchQry)
    );
    setUsers(result);
  }

  function Searchfunc(e) {
    const SearchQry = e.currentTarget.value;

    axios
      .get(`${BACKEND_BASE_URL}/api/auth/users`)
      .then((res) => {
        filterData(res.data, SearchQry);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = (id) => {
    axios
      .delete(`${BACKEND_BASE_URL}/api/auth/delete/${id}`)
      .then(() => {
        toast.success("Delete Successfuly");
        history("/admin/customerHome");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      <IconButton aria-label="delete" href="/admin/customerHome">
        <ReplyIcon style={{ fontSize: "200%" }} />
      </IconButton>
      <Typography variant="h3" align="center" style={{ fontFamily: "serif" }}>
        Customer Details
      </Typography>

      <Search
        style={{
          textAlign: "center",
          display: "inline-block",
          outlineStyle: "dashed",
          marginLeft: "70%",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <SearchIconWrapper style={{}}>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={Searchfunc}
        />
      </Search>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Customer ID
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Mobile Number
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "bold",
                  marginLeft: "240px",
                }}
              >
                Email
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Remove Customer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableContainer />
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row._id}
                </TableCell>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" onClick={handleClickOpen}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {`Confirm Delete Customer ${row.username} ?`}
                    </DialogTitle>

                    <DialogActions>
                      <Button
                        onClick={() => {
                          toast.info("You clicked NO", {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                          handleClose();
                        }}
                      >
                        No
                      </Button>
                      <Button
                        onClick={() => {
                          deleteHandler(row._id);
                          handleClose();
                        }}
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
