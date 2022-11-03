import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import { BACKEND_BASE_URL } from "../constant";

export default function RouteDetails() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/route/all`).then((response) => {
      setRoutes(response.data);
    });
  }, []);

  console.log(routes);

  return (
    <div>
      <Header />
      <TableContainer component={Paper} style={{ marginBottom: "350px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Route Number
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Start Point
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                End point
              </TableCell>
            </TableRow>
          </TableHead>
          <TableContainer />
          <TableBody>
            {routes.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">{row.RouteNumber}</TableCell>
                <TableCell align="center">{row.StartPoint}</TableCell>
                <TableCell align="center">{row.Endpoint}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}
