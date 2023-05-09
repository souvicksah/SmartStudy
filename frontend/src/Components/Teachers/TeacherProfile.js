import React, { useState, useEffect } from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import { useNavigate } from "react-router";
import Header from "./Header.js";
import { TeacherSideNav } from "./TeacherSideNav.js";
import { toast } from "react-toastify";

function TeacherProfile() {
  const [teacher, setTeacher] = useState({});
  const navigate = useNavigate();
  const response = JSON.parse(sessionStorage.getItem("object"));
  console.log(response);
  // useEffect(() => {
  //   const response = JSON.parse(sessionStorage.getItem("object"));
  //   setStudent({response})

  //   console.log();
  // },[]);
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });
  const handleSubmit = () => {
    navigate("/teacher/editprofile");
  };
  return (
    <>
      <Header></Header>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <TeacherSideNav></TeacherSideNav>
        </div>
        <div className="col-lg-10">
          <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
            <MDBContainer className="py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol lg="6" className="mb-4 mb-lg-0">
                  <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                    <MDBRow className="g-0">
                      <MDBCol
                        md="4"
                        className="gradient-custom text-center text-white"
                        style={{
                          borderTopLeftRadius: ".5rem",
                          borderBottomLeftRadius: ".5rem",
                        }}
                      >
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="Avatar"
                          className="my-5"
                          style={{ width: "80px" }}
                          fluid
                        />
                        <MDBTypography tag="h5"></MDBTypography>
                        <MDBCardText>Web Designer</MDBCardText>
                        <MDBIcon far icon="edit mb-5" />
                      </MDBCol>
                      <MDBCol md="8">
                        <MDBCardBody className="p-4">
                          <MDBTypography tag="h6">Teacher Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {response.teacherName}
                          </MDBCardText>
                          <hr className="mt-0 mb-4" />
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Email</MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.email}
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Phone</MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.phone}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>

                          <MDBTypography tag="h6">Information</MDBTypography>
                          <hr className="mt-0 mb-4" />
                          <MDBRow className="pt-1">
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">
                                Date Of Birth
                              </MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.dob}
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Gender</MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.gender}
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Experience</MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.experience} years
                              </MDBCardText>
                            </MDBCol>
                            <MDBCol size="6" className="mb-3">
                              <MDBTypography tag="h6">Address</MDBTypography>
                              <MDBCardText className="text-muted">
                                {response.teacherAddress}
                              </MDBCardText>
                            </MDBCol>
                          </MDBRow>

                          <Button
                            variant="primary"
                            value={response}
                            onClick={handleSubmit}
                          >
                            Update Profile
                          </Button>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
