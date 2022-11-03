import React from "react";

import Paper from "@mui/material/Paper";
import IMG from "./Footer.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Footer</h1> */}

        <Paper
          square
          sx={{
            backgroundColor: "#ffa366",
            height: "120px",
          }}
        >
          <div>
            <a href="/home">
              <img
                src={IMG}
                alt="Logo"
                style={{
                  width: "450px",
                  height: "200px",
                  marginLeft: "600px",
                  marginTop: "-30px",
                }}
              />
            </a>
          </div>
        </Paper>
      </div>
    );
  }
}
