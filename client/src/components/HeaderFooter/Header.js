import React from "react";
// import { useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Logout } from "./../UserManagement/utils/LogoutHandler";
import Logo from "./Logo.png";

export default function Header() {
  const username = localStorage.getItem("username");

  return (
    <div className="header" style={{ width: "100%" }}>
      {/* <h1>Header</h1> */}

      <Paper
        square
        sx={{
          backgroundColor: "#ffa366",
          height: "110px",
          paddingBottom: "40px",
        }}
      >
        <a href="/home">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "30%",
              position: "absolute",
              marginLeft: "-100px",
              marginTop: "-60px",
            }}
          />
        </a>
        <IconButton square sx={{ marginLeft: "45%" }} href="/profile/">
          <AccountCircleIcon
            sx={{ height: "40px", width: "40px", color: "black" }}
          />
          <Typography
            sx={{ marginLeft: "10px", fontSize: "20px", color: "black" }}
          >
            Welcome {username}
          </Typography>
        </IconButton>

        <IconButton square sx={{ marginLeft: "350px" }} onClick={Logout}>
          <LogoutIcon sx={{ height: "30px", width: "30px", color: "black" }} />
          <Typography
            sx={{ marginLeft: "10px", fontSize: "20px", color: "black" }}
          >
            Log Out
          </Typography>
        </IconButton>

        <Tabs
          aria-label="nav tabs example"
          sx={{ marginTop: "-15px", marginLeft: "380px" }}
        >
          <Tab
            label="Home"
            href="/home"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="Schedules"
            href="/Schedules"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="Bus Details"
            href="/Bus Details"
            sx={{ color: "white", marginLeft: "25px" }}
          />

          <Tab
            label="Routes"
            href="/RouteDetails"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="Payment"
            href="/payment"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="AddPayment"
            href="/AddPayment"
            sx={{ color: "white", marginLeft: "25px" }}
          />
        </Tabs>
      </Paper>
    </div>
  );
}
