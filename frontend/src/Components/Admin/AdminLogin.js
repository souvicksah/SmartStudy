import Cookies from "js-cookie";
import React, { useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Header from "./Header.js";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../Services/AdminService.js";
import { ToastContainer, toast } from "react-toastify";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const role = "admin";
  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { email, password };
    console.log(user);
    const response = await checkLogin(user);
    console.log(response);
    if (
      response.status == 200 &&
      response.data.email == email &&
      response.data.password == password
    ) {
      console.log(response.data);
      sessionStorage.setItem("id", JSON.stringify(response.data.studentID));
      sessionStorage.setItem("role", "admin");
      sessionStorage.setItem("object", JSON.stringify(response.data));
      //exprires in 7 days
      //Cookies.set("id", response.data.id, { expires: 7 });
      //localStorage.setItem("id", response.data.id);
      toast.success("Admin login successfully");

      navigate("/admin");
    } else {
      console.log(response);
      toast.error("Check email and password register");
      navigate("/admin");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="courses">
        <Container className="mt-4 mb-4 text-center">
          <Alert variant="primary" className="alertBlock">
            <h2 style={{ color: "#007bff" }}>Admin Login</h2>
          </Alert>

          <MDBContainer fluid className="p-3 my-5 h-custom">
            <MDBRow>
              <MDBCol col="10" md="6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid"
                  alt="Sample image"
                />
              </MDBCol>

              <MDBCol col="4" md="6">
                <MDBInput
                  wrapperClass="mb-4"
                  name="email"
                  type="text"
                  label="Email address"
                  id="formControlLg"
                  size="lg"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  type="password"
                  name="password"
                  label="Password"
                  id="formControlLg"
                  size="lg"
                  value={password}
                  onChange={handleChangePassword}
                />

                <div className="text-center text-md-start mt-4 pt-2">
                  <MDBBtn
                    type="submit"
                    className="mb-0 px-5"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Login
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Container>
      </div>
    </>
  );
}
