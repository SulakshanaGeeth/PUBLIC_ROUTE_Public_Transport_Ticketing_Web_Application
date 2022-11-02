import React, { useState, Fragment } from "react";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBus = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    VehicleNo: "",
    DriverID: "",
    ConductorID: "",
    Availability: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name,"value",e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:8070/bus/create", {
        VehicleNo: String(inputs.VehicleNo),
        DriverID: String(inputs.DriverID),
        ConductorID: String(inputs.ConductorID),
        Availability: Boolean(inputs.Availability),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/admin/BusManagement"));
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={5}
        >
          <FormLabel>VehicleNo</FormLabel>
          <TextField
            placeholder={"Eg:VehicleNo"}
            value={inputs.VehicleNo}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="VehicleNo"
          />
          <FormLabel>DriverID</FormLabel>
          <TextField
            placeholder={"Eg:DriverIDr"}
            value={inputs.DriverID}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="DriverID"
          />
          <FormLabel>ConductorID</FormLabel>
          <TextField
            placeholder={"ConductorID"}
            value={inputs.ConductorID}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="ConductorID"
          />
          <FormLabel>Availability</FormLabel>
          <TextField
            placeholder={"Availability"}
            value={inputs.Availability}
            onChange={handleChange}
            type={"Boolean"}
            margin="normal"
            fullWidth
            variant="outlined"
            name="Availability"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button variant={"contained"} type={"submit"}>
            Add Bus
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default AddBus;
