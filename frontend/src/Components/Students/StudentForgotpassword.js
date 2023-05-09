import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { forgotPassword } from "../../Services/StudentService";
import ForgotPasswordEmail from "../ForgotPasswordEmail";
import Navigationbar from "./Navigationbar";

function StudentForgotpassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pwd = generateString(8);
    console.log(pwd);

    console.log(email);
    const response = await forgotPassword(email, pwd);
    console.log(response.data);
    ForgotPasswordEmail(response.data.studentName, response.data.email, pwd);
    toast.success("new password Sent to email!!!!");
    navigate("/student");
  };
  return (
    <>
      <Navigationbar></Navigationbar>
      <div style={{ height: "80vh" }}>
        <div style={{ textAlign: "center", margin: "100px" }}>
          <h3>Enter Email:</h3>
          <input
            id="email"
            name="email"
            type="text"
            style={{ width: "80vh" }}
            onChange={handleEmail}
          ></input>
          <br></br>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              marginTop: "20px",
              padding: "15px 32px",
              textAlign: "center",
              fontSize: "16px",
            }}
            onClick={handleSubmit}
          >
            Send Link
          </button>
        </div>
      </div>
    </>
  );
}

export default StudentForgotpassword;
