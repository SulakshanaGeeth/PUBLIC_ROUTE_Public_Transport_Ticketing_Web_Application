import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Header from "./../HeaderFooter/Header";
import Footer from "./../HeaderFooter/Footer";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_BASE_URL } from "../constant";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Register() {
  const [UserID, setUserID] = useState("");
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [Type, setType] = useState("");

  const [error, setError] = useState("");

  const history = useNavigate();

  const registerHandler = async (e) => {
    //register handler method
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        `${BACKEND_BASE_URL}/payment/create`,
        { UserID, Time, Date, Type },
        config
      );
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#dfc8a2",
          minHeight: "97vh",
          // marginTop: "24px",
          // margin: "-8px",
        }}
      >
        <Grid container spacing={0.3} style={{ padding: "45px" }}>
          <Grid item xs={12}>
            <Item>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{ color: "black" }}
                  >
                    Add Payment
                  </Typography>
                  <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="UserID"
                      label="UserID"
                      name="UserID"
                      autoComplete="UserID"
                      value={UserID}
                      onChange={(e) => setUserID(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Time"
                      label="Time"
                      name="Time"
                      autoComplete="Time"
                      value={Time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Date"
                      label="Date"
                      name="Date"
                      autoComplete="Date"
                      value={Date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <InputLabel id="type">Type</InputLabel>
                    <Select
                      labelId="type"
                      id="type"
                      value={Type}
                      label="type"
                      onChange={(e) => setType(e.target.value)}
                      style={{ width: "250px" }}
                    >
                      <MenuItem value="TopUp">Top Up</MenuItem>
                      <MenuItem value="Pay">Pay</MenuItem>
                    </Select>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={registerHandler}
                    >
                      Submit
                    </Button>
                    <Grid container style={{ justifyContent: "center" }}></Grid>
                  </Box>
                </Box>
              </Container>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
