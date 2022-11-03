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
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/payment/all`).then((response) => {
      setPayment(response.data);
    });
  }, []);

  console.log(payment);

  return (
    <div>
      <Header />
      <TableContainer component={Paper} style={{ marginBottom: "350px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                UserID{" "}
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Time
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Type
              </TableCell>
            </TableRow>
          </TableHead>
          <TableContainer />
          <TableBody>
            {payment.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="center">{row.UserID}</TableCell>
                <TableCell align="center">{row.Time}</TableCell>
                <TableCell align="center">{row.Date}</TableCell>
                <TableCell align="center">{row.Type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}
