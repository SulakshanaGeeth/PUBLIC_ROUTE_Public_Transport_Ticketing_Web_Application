import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
import "./Bus.css";
import axios from "axios";
import Bus from "./Bus";
const URL = "http://localhost:8070/bus/all";

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

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Buses = () => {
  const [Buses, setBues] = useState([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    fetchHandler().then((data) => setBues(data.bus));
  }, []);

  function filterData(buses, SearchQry) {
    const result = buses.filter((bus) =>
      bus.VehicleNo.toLowerCase().includes(SearchQry.toLowerCase())
    );
    setBues(result);
  }

  function Searchfunc(e) {
    const SearchQry = e.currentTarget.value;

    axios
      .get(`http://localhost:8070/bus/all/`)
      .then((res) => {
        filterData(res.data.bus, SearchQry);
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

  return (
    <div>
      <Button
        variant="contained"
        href="/admin/addBus"
        style={{ marginLeft: "400px" }}
      >
        Add Bus
      </Button>

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

      <ul>
        {Buses &&
          Buses.map((Bus, i) => (
            <li className="Bus" key={i}>
              <Bus bus={Bus} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Buses;
