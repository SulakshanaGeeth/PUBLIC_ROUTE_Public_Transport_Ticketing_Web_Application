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
          style={{ marginLeft: "350px", fontFamily: "serif" }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          style={{ marginLeft: "550px", fontFamily: "serif" }}
        >
          Wondermart
        </Typography>
      </ThemeProvider>
      <Button
        href="/products"
        variant="contained"
        style={{
          marginLeft: "650px",
          fontFamily: "serif",
          fontSize: "30px",
          marginTop: "50px",
          backgroundColor: "green",
        }}
      >
        Shop Now
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
