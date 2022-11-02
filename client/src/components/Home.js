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

      <Footer />
    </div>
  );
};

export default Home;
