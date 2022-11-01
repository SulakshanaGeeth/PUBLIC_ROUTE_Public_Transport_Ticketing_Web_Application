import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_BASE_URL } from "../constant";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [open, setOpen] = React.useState(false);

  const id = localStorage.getItem("id");
  const history = useNavigate();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHandler = () => {
    axios
      .put(`${BACKEND_BASE_URL}/api/auth/update/${id}`, {
        username,
        phoneNumber,
        email,
      })
      .then(() => {
        toast.success("Update Successfuly");
        history("/profile/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      style={{ zIndex: "-1" }}
    >
      <Typography component="h1" variant="h5" style={{ color: "black" }}>
        Edit Personal Information
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
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setphoneNumber(e.target.value)}
        />

        <div>
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClickOpen}
          >
            Update Details
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirm Update Profile Details?"}
            </DialogTitle>

            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button
                onClick={() => {
                  updateHandler();
                  handleClose();
                }}
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </Box>
  );
}

export default EditProfile;
