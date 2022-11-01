import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdminDashboard from "./AdminDashboard";

const AdminHome = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h1"
          style={{
            marginLeft: "250px",
            fontFamily: "serif",
            marginTop: "200px",
          }}
        >
          Admin Dashboard
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default AdminHome;
