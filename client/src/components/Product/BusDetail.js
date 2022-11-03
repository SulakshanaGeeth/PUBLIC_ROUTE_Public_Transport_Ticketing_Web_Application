import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const BusDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;

  const [checked, setChecked] = useState(false);

  const [routeNo, setrouteNo] = useState("");
  const [busNo, setbusNo] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [driverId, setdriverId] = useState("");
  const [driverName, setdriverName] = useState("");
  const [available, setavailable] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8070/buses/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setrouteNo(data.bus.routeNo);
          setbusNo(data.bus.busNo);
          setfrom(data.bus.from);
          setto(data.bus.to);
          setdriverId(data.bus.driverId);
          setdriverName(data.bus.driverName);
          setavailable(data.bus.available);
        });
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:8070/buses/${id}`, {
        busNo: String(busNo),
        routeNo: String(routeNo),
        from: Number(from),
        to: Number(to),
        driverId: String(driverId),
        driverName: String(driverName),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/admin/buses"));
  };

  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div>
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
            value={busNo}
            onChange={(e) => setbusNo(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="productName"
          />

          <FormLabel>Route No</FormLabel>
          <TextField
            value={routeNo}
            onChange={(e) => setrouteNo(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="productCategory"
          />

          <FormLabel>From</FormLabel>
          <TextField
            value={from}
            onChange={(e) => setfrom(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="quentity"
          />

          <FormLabel>To</FormLabel>
          <TextField
            value={to}
            onChange={(e) => setto(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />

          <FormLabel>driver Id</FormLabel>
          <TextField
            value={driverId}
            onChange={(e) => setdriverId(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />

          <FormLabel>driver Name</FormLabel>
          <TextField
            value={driverName}
            onChange={(e) => setdriverName(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
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
            Update Product
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BusDetail;
