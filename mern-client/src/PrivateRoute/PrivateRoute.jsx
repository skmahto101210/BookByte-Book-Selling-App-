import React, { useContext } from "react";
import { AuthContext } from "../store/AuthProvider.store";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const loctaion = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner
          aria-label="Center-aligned spinner example"
          className=" w-20 h-20"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: loctaion }} replace></Navigate>;
}
