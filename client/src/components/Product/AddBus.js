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
    busNo: "",
    routeNo: "",
    from: "",
    to: "",
    driverId: "",
    driverName: "",
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
      .post("http://localhost:8070/buses/", {
        busNo: String(inputs.busNo),
        routeNo: String(inputs.routeNo),
        from: String(inputs.from),
        to: String(inputs.to),
        driverId: String(inputs.driverId),
        driverName: String(inputs.driverName),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/admin/buses"));
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
          <FormLabel>Bus No</FormLabel>
          <TextField
            placeholder={"Eg: BAV-5429"}
            value={inputs.busNo}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="busNo"
          />
          <FormLabel>Route No</FormLabel>
          <TextField
            placeholder={"Eg: A508"}
            value={inputs.routeNo}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="routeNo"
          />
          <FormLabel>From</FormLabel>
          <TextField
            placeholder={"Eg: Polgahawela"}
            value={inputs.from}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="from"
          />
          <FormLabel>To</FormLabel>
          <TextField
            placeholder={"Eg: Colombo 03"}
            value={inputs.to}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="to"
          />
          <FormLabel>Driver Id</FormLabel>
          <TextField
            placeholder={"Eg: 97195678V "}
            value={inputs.driverId}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="driverId"
          />
          <FormLabel>Driver Name</FormLabel>
          <TextField
              placeholder={"Eg: A.C.S Nimal Perera "}
              value={inputs.driverName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="driverName"
          />
          {/*<FormControlLabel*/}
          {/*  control={*/}
          {/*    <Checkbox*/}
          {/*      checked={checked}*/}
          {/*      onChange={() => setChecked(!checked)}*/}
          {/*    />*/}
          {/*  }*/}
          {/*  label="Available"*/}
          {/*/>*/}
          <Button variant={"contained"} type={"submit"}>
            Add Bus
          </Button>
        </Box>
      </form>
    </Fragment>
  );
};

export default AddBus;
