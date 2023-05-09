import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  saveAssignment,
  getAllAssignments,
  getAllCoursesById,
  deleteAssignment,
} from "../../Services/StudentService";
import "./Css/Assignment.css";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { StudentSideNav } from "./StudentSideNav";
export default function Assignments() {
  const [formData, setformdata] = useState({
    assignmentID: "",
    assignmentName: "",
    assignmentStatus: "false",
    studentId: sessionStorage.getItem("id"),
    assignmentLink: "",
    courseId: "",
  });
  const navigate = useNavigate();
  const [allassignment, setAllAssignment] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const [modalOpeningStatus, setmodalOpeningStatus] = useState(false);
  const openDialog = () => {
    setmodalOpeningStatus({ modalOpeningStatus: true });
  };
  const closeDialog = () => {
    setmodalOpeningStatus({ modalOpeningStatus: false });
  };
  const handleChange = (event) => {
    setformdata({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    async function fetchData() {
      //console.log();
      //put your session id attribute here for assignment for different students i.e for different student id
      console.log(id);
      console.log(typeof role + role);
      const response = await getAllAssignments(id);
      setAllAssignment(response.data);
      console.log(response.data);
      const responsecourse = await getAllCoursesById(id);
      setAllCourses(responsecourse.data);
      console.log(responsecourse.data);
    }
    //for session management
    let id = sessionStorage.getItem("id");
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await saveAssignment(formData);
    console.log(response.data);
    navigate("/student");

  };
  const handleChenageAssignment = async (event) => {
    console.log(event.target.value);
    const response = await deleteAssignment(event.target.value);
    console.log(response.data);
    toast.success(
      `Assignment ${response.data.assignmentName} has been deleted.`
    );
    navigate("/student/assignments");
  };
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <Form onSubmit={handleSubmit}>
            <div className="formnew">
              <h1>Assignment Submission Form</h1>
              <div className="input">
                <div className="inputBoxNew">
                  <label htmlFor="assignmentName">Assignment Name</label>
                  <input
                    type="text"
                    id="assignmentName"
                    name="assignmentName"
                    value={formData.assignmentName}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBoxNew">
                  <input
                    type="hidden"
                    id="assignmentStatus"
                    name="assignmentStatus"
                  />
                </div>
                <div className="inputBoxNew">
                  <input
                    type="hidden"
                    id="studentId"
                    name="studentId"
                    value={sessionStorage.getItem("id")}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBoxNew">
                  <label htmlFor="assignmentLink">Assignment Link</label>
                  <input
                    type="text"
                    id="assignmentLink"
                    name="assignmentLink"
                    value={formData.assignmentLink}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="courseId"> Course Name</label>
                <select
                  name="courseId"
                  id="courseId"
                  value={formData.courseId}
                  onChange={handleChange}
                >
                  <option></option>
                  {allCourses.map((item) => (
                    <>
                      <option name="courseId" value={item.courseId}>
                        {item.courseName}
                      </option>
                    </>
                  ))}
                  ;
                </select>
                {/* <div className="inputBoxNew">
              <label htmlFor="courseId">Course Id</label>
              <input
                type="text"
                id="courseId"
                name="courseId"
                value={formData.courseId}
                onChange={handleChange}
              />
            </div>  */}

                <div className="inputBoxNew" style={{ bgcolor: "#007bff" }}>
                  <input type="submit" name="submit" />
                </div>
              </div>
            </div>
          </Form>
          <div className="courses">
            <Container className="mt-4 mb-4 text-center">
              <Alert variant="primary" className="alertBlock">
                <h2 style={{ color: "#007bff" }}>All Assignments</h2>
              </Alert>
            </Container>
            <Container
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {allassignment.map((assignment) => {
                return (
                  <div className="assitem" id="item1">
                    <img
                      variant="top"
                      style={{ width: "15rem", height: "10rem" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxx6DPS4-ysurlsyagtIK4ntobohm7PG6xQ&usqp=CAU"
                    />
                    <h3 className="card-title">{assignment.assignmentName}</h3>
                    <p className="card-text">
                      Assignment Link : {assignment.assignmentLink} <br />
                      Course Name : {assignment.courses.courseName} <br />
                      assignmentStatus:
                      {assignment.assignmentStatus ? "checked" : "unchecked"}
                    </p>
                    <Button
                      variant="primary"
                      value={assignment.assignmentID}
                      onClick={handleChenageAssignment}
                    >
                      Delete Assignment
                    </Button>
                  </div>
                );
              })}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
