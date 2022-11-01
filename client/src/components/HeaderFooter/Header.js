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
          backgroundColor: "#4caf50",
          height: "110px",
          paddingBottom: "40px",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "8%", position: "absolute" }}
        />
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

        <Typography
          sx={{
            marginLeft: "130px",
            marginTop: "-20px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "inherit",
          }}
        >
          {" "}
          WONDER MART{" "}
        </Typography>

        <Tabs
          aria-label="nav tabs example"
          sx={{ marginTop: "-15px", marginLeft: "350px" }}
        >
          <Tab
            label="Home"
            href="/home"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="Products"
            href="/products"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="Service"
            href="/spam"
            sx={{ color: "white", marginLeft: "25px" }}
          />
          <Tab
            label="About"
            href="/spam"
            sx={{ color: "white", marginLeft: "25px" }}
          />

          <IconButton square sx={{ marginLeft: "100px" }} href="/Cart">
            <ShoppingCartIcon
              sx={{ height: "30px", width: "30px", color: "black" }}
            />
            <Typography
              sx={{ marginLeft: "10px", fontSize: "20px", color: "white" }}
            >
              Cart
            </Typography>
          </IconButton>

          <IconButton square sx={{ marginLeft: "100px" }} href="/Orders">
            <ListAltIcon
              sx={{ height: "30px", width: "30px", color: "black" }}
            />
            <Typography
              sx={{ marginLeft: "10px", fontSize: "20px", color: "white" }}
            >
              Orders
            </Typography>
          </IconButton>
        </Tabs>
      </Paper>
    </div>
  );
}
