import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doLogout } from "../Services/StudentService";
export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    const response = await doLogout();
    console.log(response.data);

    navigate("/");
  };
  useEffect(() => {
    sessionStorage.clear();
    // const response = handleLogout();
  });

  return <div>{}</div>;
}
