import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { getAllCoursesById } from "../../Services/StudentService";
import { StudentSideNav } from "./StudentSideNav";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function MyCourses() {
  const [allCourses, setAllCourses] = useState([]);
  const navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  async function getAllCoursesbystudentId(id) {
    const response = await getAllCoursesById(id);
    setAllCourses(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getAllCoursesbystudentId(id);
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
            <div style={{ height: "100vh" }}>
              <div className="courses ">
                <Container className="mt-4 mb-4 text-center">
                  <Alert variant="primary" className="alertBlock">
                    <h2 style={{ color: "#007bff" }}>My Courses</h2>
                  </Alert>
                </Container>
              </div>
              <Container>
                <Table
                  stripped
                  bordered
                  hover
                  variant="primary"
                  style={{ border: "2px solid #007bff" }}
                >
                  <thead style={{ border: "2px solid #007bff" }}>
                    <tr>
                      <th>Course Name</th>
                      <th>Course Description</th>
                      <th>Course Start Time</th>
                      <th>Course End time</th>
                      <th>Duration in Months</th>
                      <th>Teacher Name</th>
                      <th>Course price</th>
                    </tr>
                  </thead>
                  {/* Course will be in iterated in map  */}
                  <tbody>
                    {allCourses.map((course) => {
                      return (
                        <tr>
                          <td>{course.courseName}</td>
                          <td>{course.description}</td>
                          <td>{course.startTime}</td>
                          <td>{course.endTime}</td>
                          <td>{course.duration} Months</td>
                          <td>{course.teacher.teacherName}</td>
                          <td>Rs.{course.cost}/-</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCourses;
