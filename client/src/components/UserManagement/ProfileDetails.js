import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { BACKEND_BASE_URL } from "../constant";

function ProfileDetails() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${BACKEND_BASE_URL}/api/auth/get/${id}`);
      const data = await res.json();
      setUsername(data.username);
      setphoneNumber(data.phoneNumber);
      setEmail(data.email);
    };
    fetchUser(); // this function will called only once
  }, []); //empty dependency array means run only once when the component first renders

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" style={{ color: "black" }}>
        Personal Information
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="Name"
          value={username}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          autoComplete="phoneNumber"
          value={phoneNumber}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </Box>
  );
}

export default ProfileDetails;
