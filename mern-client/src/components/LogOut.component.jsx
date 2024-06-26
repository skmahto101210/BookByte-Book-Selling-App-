import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider.store";

export default function LogOut() {
  const [error, setError] = useState("error");
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    logout()
      .then(() => {
        // Sign-out successful.
        alert("Logout successfully!!!");
        navigate(from, { raplace: true });
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }, []);
  return;
}
