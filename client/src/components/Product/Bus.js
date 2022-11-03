import React from "react";
import { Button } from "@mui/material";
import "./Product.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Bus = (props) => {
  const history = useNavigate();
  const { _id, busNo, routeNo, from, to, driverId, driverName, available } =
    props.bus;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8070/buses/${_id}`)
      .then((res) => res.data)
      .then(() => history("/admin/adminHome"))
      .then(() => history("/admin/adminHome"));
  };

  return (
    <div className="card">
      {/*<img src={} alt={busNo} />*/}
      <h5>Bus No : {busNo}</h5>
      <p>Route No : {routeNo}</p>
      <h6>From : {from}</h6>
      <h6>To : {to}</h6>
      <h6>Driver ID : {driverId}</h6>
      <h6>Driver Name : {driverName}</h6>
      <h6>{available}</h6>
      <Button LinkComponent={Link} to={`/admin/bus/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Bus;
