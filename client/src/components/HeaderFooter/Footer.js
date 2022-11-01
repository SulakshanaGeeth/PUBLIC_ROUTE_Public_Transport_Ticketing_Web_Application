import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Footer</h1> */}

        <Paper
          square
          sx={{
            backgroundColor: "#4caf50",
            height: "160px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginTop: "20px",
              marginLeft: "10px",
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "inherit",
              position: "absolute",
            }}
          >
            {" "}
            WONDER MART{" "}
          </Typography>

          <Tabs
            aria-label="nav tabs example"
            sx={{ marginLeft: "400px", marginTop: "100px" }}
          >
            <Tab
              label="Home"
              href="/home"
              sx={{ color: "white", marginLeft: "25px", marginTop: "60px" }}
            />
            <Tab
              label="Products"
              href="/AllProducts"
              sx={{ color: "white", marginLeft: "25px", marginTop: "60px" }}
            />
            <Tab
              label="Service"
              href="/spam"
              sx={{ color: "white", marginLeft: "25px", marginTop: "60px" }}
            />
            <Tab
              label="About"
              href="/about"
              sx={{ color: "white", marginLeft: "25px", marginTop: "60px" }}
            />
            <Tab
              label="Contact Us"
              href="/spam"
              sx={{ color: "white", marginLeft: "25px", marginTop: "60px" }}
            />
          </Tabs>

          <FacebookRoundedIcon
            sx={{
              height: "50px",
              width: "50px",
              color: "black",
              marginLeft: "10px",
              marginTop: "-20px",
            }}
          />
        </Paper>
      </div>
    );
  }
}
