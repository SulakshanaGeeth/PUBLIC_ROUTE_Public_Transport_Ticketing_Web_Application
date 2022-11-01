import { Spin } from "antd";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//private route logic
function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (localStorage.getItem("authToken") === "null") {
    return (
      <>
        {loading ? (
          <center>
            <div style={{ marginTop: "200px" }}>
              <h2 style={{ color: "red" }}>Unauthorized Access Detected.</h2>
              <h2>Rolling back to the Login...</h2>
              <Spin size="large" />
            </div>
          </center>
        ) : (
          <Navigate to="/" />
        )}
      </>
    ); //if user not login or not authorized to the restricted routes, it may be navigated to the login
  }

  return children;
}

export default PrivateRoute;
