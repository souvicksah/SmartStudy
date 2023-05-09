import React from "react";

import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../Students/Css/Courses.css";
import { getAllCoursesFromServer } from "../../Services/StudentService.js";
import { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import Paynow from "./Paynow";
import { useNavigate } from "react-router";
import { StudentSideNav } from "./StudentSideNav";
import { toast } from "react-toastify";

export default function Courses() {
  const [coursesList, setCoursesList] = useState([]);
  const navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  const onbuying = (event) => {
    console.log(event.target.value);
    navigate(`/student/paynow`, { state: { id: event.target.value } });
  };

  async function getAllCourses() {
    console.log(id);
    const response = await getAllCoursesFromServer(id);
    console.log(response.data);
    setCoursesList(response.data);
  }
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getAllCourses();
  }, []);
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <div>
            <div className="courses ">
              <Container className="mt-4 mb-4 text-center">
                <Alert variant="primary" className="alertBlock">
                  <h2 style={{ color: "#007bff" }}>Available Courses</h2>
                </Alert>
              </Container>
              <div className="container row row-cols-2">
                {coursesList.map((coursesdata) => {
                  return (
                    <div className="item" id="item1">
                      <img
                        variant="top"
                        style={{ width: "15rem", height: "10rem" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSoZhcph0CJtnOSzZQ7romH1FDocHEK8bUg&usqp=CAU"
                      />
                      <h3 className="card-title">{coursesdata.courseName}</h3>
                      <p className="card-text">
                        Description :<br />
                        {coursesdata.description} <br />
                        Cost : {coursesdata.cost} Rs
                        <br />
                        Duration : {coursesdata.duration} Months <br />
                      </p>
                      <Button
                        name="buynow"
                        value={coursesdata.courseId}
                        variant="primary"
                        onClick={onbuying}
                      >
                        Buy Now
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
