import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <Typography
          variant="h1"
          style={{
            marginLeft: "350px",
            fontFamily: "serif",
            marginTop: "125px",
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          style={{
            marginLeft: "550px",
            fontFamily: "serif",
            marginBottom: "125px",
          }}
        >
          PUBLIC ROUTE
        </Typography>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default Home;
