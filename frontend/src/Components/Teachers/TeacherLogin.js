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
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { checkLogin } from "../../Services/TeacherServices.js";
export default function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
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
      sessionStorage.setItem("id", JSON.stringify(response.data.teacherID));
      sessionStorage.setItem("role", "teacher");
      sessionStorage.setItem("object", JSON.stringify(response.data));
      toast.success("Teacher login successfully");
      navigate("/teacher");
    } else {
      console.log(response);

      toast.error("Check email and password registered");
    }
  };
  return (
    <>
      <Header></Header>
      <div className="courses">
        <Container className="mt-4 mb-4 text-center">
          <Alert variant="primary" className="alertBlock">
            <h2 style={{ color: "#007bff" }}>Teacher Login</h2>
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
                  name="password"
                  type="password"
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
                  <Link
                    className="SidebarList row"
                    to="/teacher/forgotpassword"
                  >
                    <div id="title">Forgot Password?</div>
                  </Link>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Container>
      </div>
    </>
  );
}
