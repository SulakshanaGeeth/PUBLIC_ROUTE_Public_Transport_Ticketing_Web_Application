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
import "./Product.css";
import axios from "axios";
import Bus from "./Bus";
const URL = "http://localhost:8070/buses";




// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));
















const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Buses = () => {
  const [buses, setBuses] = useState([]);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    fetchHandler().then((data) => setBuses(data.buses));
  }, []);
  console.log(buses);















  // function filterData(products, SearchQry) {
  //   const result = products.filter((product) =>
  //       product.productName.toLowerCase().includes(SearchQry.toLowerCase())
  //   );
  //   setProducts(result);
  // }

  // function Searchfunc(e) {
  //   const SearchQry = e.currentTarget.value;
  //
  //   axios
  //       .get(`http://localhost:8070/products`)
  //       .then((res) => {
  //         filterData(res.data.products, SearchQry);
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  // }

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
        <Button variant="contained" href="/admin/addBus/" style={{marginLeft:"400px"}}>Add Bus</Button>
        <Button variant="contained" href="/admin/reprtProduct/" style={{marginLeft:"25px"}}>Generate Report</Button>
      {/*<Search*/}
      {/*    style={{*/}
      {/*      textAlign: "center",*/}
      {/*      display: "inline-block",*/}
      {/*      outlineStyle: "dashed",*/}
      {/*      marginLeft: "70%",*/}
      {/*      marginTop: "15px",*/}
      {/*      marginBottom: "15px",*/}
      {/*    }}*/}
      {/*>*/}
      {/*  <SearchIconWrapper style={{}}>*/}
      {/*    <SearchIcon />*/}
      {/*  </SearchIconWrapper>*/}
      {/*  <StyledInputBase*/}
      {/*      placeholder="Search…"*/}
      {/*      inputProps={{ "aria-label": "search" }}*/}
      {/*      onChange={Searchfunc}*/}
      {/*  />*/}
      {/*</Search>*/}

      <ul>
        {buses &&
          buses.map((bus, i) => (
            <li className="product" key={i}>
              <Bus bus={bus} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Buses;
