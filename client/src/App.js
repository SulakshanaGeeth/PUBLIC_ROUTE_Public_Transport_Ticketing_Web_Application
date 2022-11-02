import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home";

//User Management Imports
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
// import EditProfile from "./components/UserManagement/EditProfile";
import UserProfile from "./components/UserManagement/UserProfile";
import AdminDashboard from "./components/AdminDashboard";

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
      </Routes>
    </div>
  );
}

export default App;
