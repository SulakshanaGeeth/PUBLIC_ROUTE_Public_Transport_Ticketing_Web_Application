import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import FaceIcon from "@material-ui/icons/Face";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { BACKEND_BASE_URL } from "../constant";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CustomerHome() {
  const [countCus, setCountCus] = useState("");
  const [countOrder, setCountOrder] = useState("");

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch(`${BACKEND_BASE_URL}/api/auth/getCount`);
      const data = await res.json();
      setCountCus(data.count);
    };
    getCount(); // this function will called only once
  }, []); //empty dependency array means run only once when the component first renders

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch(`${BACKEND_BASE_URL}/api/auth/getOrderCount`);
      const data = await res.json();
      setCountOrder(data.count);
    };
    getCount(); // this function will called only once
  }, []); //empty dependency array means run only once when the component first renders

  return (
    <div>
      <Typography component="h1" variant="h4" align="center">
        Customer Management
      </Typography>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "5%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item style={{ backgroundColor: "#ccfff5" }}>
              <Typography variant="h5" gutterBottom>
                Customer Count
              </Typography>

              <div style={{ fontSize: "500%" }}>
                <Chip
                  color="info"
                  icon={
                    <FaceIcon
                      style={{ fontSize: "120%", marginRight: "20px" }}
                    />
                  }
                  label={countCus}
                  style={{ width: "50%", height: "20%", fontSize: "80%" }}
                />
              </div>

              <Button
                variant="contained"
                href="/admin/customerDetails"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                }}
              >
                Details
              </Button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item style={{ backgroundColor: "#ccfff5" }}>
              <Typography variant="h5" gutterBottom>
                Total Orders
              </Typography>

              <div style={{ fontSize: "500%" }}>
                <Chip
                  color="info"
                  icon={
                    <AutoStoriesIcon
                      style={{ fontSize: "120%", marginRight: "20px" }}
                    />
                  }
                  label={countOrder}
                  style={{ width: "50%", height: "20%", fontSize: "80%" }}
                />
              </div>

              <Button
                variant="contained"
                href="/admin/orderDetails"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                }}
              >
                Details
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
