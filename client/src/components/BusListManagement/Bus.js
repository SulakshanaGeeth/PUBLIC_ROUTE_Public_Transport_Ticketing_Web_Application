import React from "react";
import { Button } from "@mui/material";
import "./Bus.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Bus = (props) => {
  const history = useNavigate();
  const { _id, VehicleNo, DriverID, ConductorID, Availability } = props.bus;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8070/bus/${_id}`)
      .then((res) => res.data)
      .then(() => history("/admin/adminHome"))
      .then(() => history("/admin/adminHome"));
  };

  return (
    <div className="card">
      <h3>{VehicleNo}</h3>
      <p>Driver ID : {DriverID}</p>
      <h4>Conductor ID : {ConductorID}</h4>
      <h4>Availability : {Availability}</h4>

      <Button LinkComponent={Link} to={`/admin/bus/edit/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Bus;
