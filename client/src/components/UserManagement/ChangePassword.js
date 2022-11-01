import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_BASE_URL } from "../constant";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
  const handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);

  const [showPassword3, setShowPassword3] = useState(false);
  const handleClickShowPassword3 = () => setShowPassword3(!showPassword3);
  const handleMouseDownPassword3 = () => setShowPassword3(!showPassword3);

  const id = localStorage.getItem("id");
  const history = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateHandler = () => {
    axios
      .put(`${BACKEND_BASE_URL}/api/auth/changePass/${id}`, {
        password,
        newpassword: newPassword,
      })
      .then(() => {
        setTimeout(() => {
          // set a 1seconds timeout for authentication
          toast.success("Update Successfuly");
          localStorage.removeItem("username");
          localStorage.removeItem("id");
          localStorage.setItem("authToken", null);
          localStorage.removeItem("email");
          localStorage.removeItem("type");
          history("/");
        }, 1000);
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
    >
      <Typography component="h1" variant="h5" style={{ color: "black" }}>
        Change Current Password
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Current password"
          name="password"
          autoComplete="password"
          type={showPassword1 ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            // This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                >
                  {showPassword1 ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="newPassword"
          label="New Password"
          name="newPassword"
          autoComplete="newPassword"
          value={newPassword}
          type={showPassword2 ? "text" : "password"}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            // This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                >
                  {showPassword2 ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirm password"
          label="Confirm Password"
          name="confirm password"
          autoComplete="confirm password"
          value={confirmPassword}
          type={showPassword3 ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            // This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword3}
                  onMouseDown={handleMouseDownPassword3}
                >
                  {showPassword3 ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
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
              {"Confirm Change Password?"}
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

export default ChangePassword;
