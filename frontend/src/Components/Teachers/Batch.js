import React, { useEffect, useState } from "react";
import {
  getAllOrders,
  getAllCourseByTeacherID,
  getAllStudentsFromServer,
} from "../../Services/TeacherServices.js";

import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import Header from "./Header.js";
import { TeacherSideNav } from "./TeacherSideNav.js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Batch() {
  const [AllCourses, setAllCourses] = useState([]);
  const [particularcourse, setparticularCourse] = useState("");
  const [allStudent, setAllStudent] = useState([]);
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();
  async function getAllCourseByTeacherIDFromServer(id) {
    const response = await getAllCourseByTeacherID(id);
    console.log(response.data);
    setAllCourses(response.data);
  }
  async function getAllStudents(courseid) {
    const response = await getAllStudentsFromServer(courseid);
    console.log(response.data);
    setAllStudent(response.data);
  }
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getAllCourseByTeacherIDFromServer(id);
  }, []);
  useEffect(() => {
    if (particularcourse != "") {
      getAllStudents(particularcourse);
    }
    getAllCourseByTeacherIDFromServer(id);
  }, [particularcourse]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setparticularCourse(event.target.value);
  };

  return (
    <>
      <div style={{ height: "100vh" }}>
        <Header></Header>
        <div className="row ">
          <div className="col-lg-2 sidebar">
            <TeacherSideNav></TeacherSideNav>
          </div>
          <div className="col-lg-10">
            <div>
              <select
                name="particularcourse"
                id="particularcourse"
                value={particularcourse}
                onChange={handleChange}
              >
                <option>Select Option!!!!</option>
                {AllCourses.map((item) => (
                  <>
                    <option name="courseId" value={item.courseId}>
                      {item.courseName}
                    </option>
                  </>
                ))}
                ;
              </select>
            </div>
            <Container>
              <h2>Course Wise Student List</h2>
              <Table
                stripped
                bordered
                hover
                variant="primary"
                style={{ border: "2px solid #007bff" }}
              >
                <thead style={{ border: "2px solid #007bff" }}>
                  <tr>
                    <th>Student Name</th>
                    <th>Student Address</th>
                    <th>Student Institute</th>

                    <th>Student Email</th>
                    <th>Student Phone</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                {/* internship will become a JSON object here */}
                <tbody>
                  {allStudent.map((student) => {
                    return (
                      <>
                        <tr>
                          <td>{student.studentName}</td>
                          <td>{student.studentAddress}</td>
                          <td>{student.institute}</td>

                          <td>{student.email}</td>
                          <td>{student.phone}</td>
                          <td>{student.gender}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
