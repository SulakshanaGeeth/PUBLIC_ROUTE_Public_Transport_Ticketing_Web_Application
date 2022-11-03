import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate, useParams } from "react-router-dom";
import { Logout } from "./UserManagement/utils/LogoutHandler";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Logo from "./HeaderFooter/Logo.png";

import AdminHome from "./AdminHome";

//User Management Imports
import CustomerHome from "./UserManagement/CustomerHome";
import CustomerDetails from "./UserManagement/CustomerDetails";

//Bus Management Imports
import Buses from "./BusListManagement/Buses";
import AddBus from "./BusListManagement/AddBus";

//TimeTabel Management
import CreateTable from "./TimeTable/CreateTable";
import ViewTable from "./TimeTable/ViewTable";

const drawerWidth = 240;

export default function AdminDashboard() {
  const username = localStorage.getItem("username");

  const history = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        style={{ backgroundColor: "#ffa366" }}
      >
        <Toolbar>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "240px",
              position: "absolute",
              marginLeft: "-70px",
              marginTop: "-20px",
            }}
          />

          <div style={{ marginLeft: "auto", marginRight: "0" }}>
            <h5>Admin {username}</h5>
          </div>
          <div style={{ marginLeft: "15px", marginRight: "0" }}>
            <AccountCircleIcon style={{ fontSize: "350%" }} />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List style={{ marginTop: "40px" }}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  // setpageNo("1");
                  history(`/admin/customerHome`);
                }}
              >
                <ListItemIcon>
                  <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary="Customer Management" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: "black" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  // setpageNo("2");
                  history(`/admin/BusManagement`);
                }}
              >
                <ListItemIcon>
                  <AirportShuttleIcon />
                </ListItemIcon>
                <ListItemText primary="Bus List Management" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: "black" }} />

          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  // setpageNo("3");
                  history("/admin/viewTable");
                }}
              >
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary="Timetable Management " />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: "black" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  // setpageNo("3");
                  history("/admin/Orders");
                }}
              >
                <ListItemIcon>
                  <ReceiptLongIcon />
                </ListItemIcon>
                <ListItemText primary="Routes Management" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: "black" }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  Logout();
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/*  */}
      {/* Customer */}
      {/*  */}
      {window.location.pathname === `/admin/adminHome` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <AdminHome />
          </div>
        </Box>
      )}
      {window.location.pathname === `/admin/customerHome` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <CustomerHome />
          </div>
        </Box>
      )}
      {window.location.pathname === `/admin/customerDetails` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <CustomerDetails />
          </div>
        </Box>
      )}

      {/*  */}
      {/*  */}
      {/* Bus Management */}
      {/*  */}
      {/*  */}
      {window.location.pathname === `/admin/BusManagement` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <Buses />
          </div>
        </Box>
      )}
      {window.location.pathname === `/admin/addBus` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <AddBus />
          </div>
        </Box>
      )}

      {/*  */}
      {/*  */}
      {/* Time Table Management */}
      {/*  */}
      {/*  */}
      {window.location.pathname === `/admin/viewTable` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <ViewTable />
          </div>
        </Box>
      )}
      {window.location.pathname === `/admin/createTable` && (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <CreateTable />
          </div>
        </Box>
      )}
    </Box>
  );
}
