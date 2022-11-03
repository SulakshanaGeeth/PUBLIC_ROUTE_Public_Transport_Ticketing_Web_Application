import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home";

//User Management Imports
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import RouteDetails from "./components/UserManagement/RouteDetails";

// import EditProfile from "./components/UserManagement/EditProfile";
import UserProfile from "./components/UserManagement/UserProfile";
import AdminDashboard from "./components/AdminDashboard";

//import payment
import Payment from "./components/Account/Payment";
import AddPayment from "./components/Account/Addpayment";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        {/*  */}
        {/*  */}
        {/* User Routes */}
        {/*  */}
        {/*  */}
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile/changePassword/"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        {/* <Route path="/about" element={<About />} exact /> */}

        <Route
          path="/admin/adminHome"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/customerHome"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/customerDetails"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        {/*  */}
        {/*  */}
        {/* Bus Management Routes */}
        {/*  */}
        {/*  */}
        {/*  */}

        <Route
          path="/admin/addBus/"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
          exact
        />

        <Route
          path="/admin/buses"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* <Route path="/about" element={<About />} exact /> */}

        <Route
          path="/admin/bus/:id"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/RouteDetails"
          element={
            <PrivateRoute>
              <RouteDetails />
            </PrivateRoute>
          }
        />

        {/*  */}
        {/*  */}
        {/* Payment Management Routes */}
        {/*  */}
        {/*  */}
        {/*  */}

        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />

        <Route
          path="/AddPayment"
          element={
            <PrivateRoute>
              <AddPayment />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
