import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import {
  getAllAssignmentFromServer,
  addRewards,
} from "../../Services/TeacherServices";

import { async } from "q";
import { TeacherSideNav } from "./TeacherSideNav";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function AssignmentReview() {
  const [assignment, setAssignment] = useState([]);
  const [rewards, setRewards] = useState();
  let id = sessionStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    //put your session id attribute here for assignment for different teachers i.e teacher id he logged in with
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getAllAssignment(id);
  }, []);
  async function getAllAssignment(id) {
    const response = await getAllAssignmentFromServer(id);
    console.log(response.data);
    setAssignment(response.data);
  }
  const handleChangeRewards = (event) => {
    setRewards(event.target.value);
  };
  const handleSubmit = async (event) => {
    console.log(event.target.value);

    const response = await addRewards(event.target.value, rewards);
    console.log(response.data);
    navigate("/teacher");
  };
  return (
    <div style={{ height: "100vh" }}>
      <Header></Header>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <TeacherSideNav></TeacherSideNav>
        </div>
        <div className="col-lg-10">
          <Container className="mt-4 mb-4 text-center">
            <Alert variant="primary" className="alertBlock">
              <h2 style={{ color: "#007bff" }}>Assignment Review List</h2>
            </Alert>
          </Container>
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
                  <th>Assignment Name</th>
                  <th>Assignment Status</th>
                  <th>Assignment Link</th>

                  <th>Rewards</th>
                  <th>Student Name</th>
                  <th>Course Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* internship will become a JSON object here */}
              <tbody>
                {assignment.map((as) => {
                  return (
                    <tr>
                      <td>{as.assignmentName}</td>
                      <td>{as.assignmentStatus.toString()}</td>
                      <td>
                        <a href={as.assignmentLink}>assignment link</a>
                      </td>

                      <td>
                        <input
                          type="text"
                          name="rewards"
                          id="rewards"
                          value={rewards}
                          onChange={handleChangeRewards}
                        />
                      </td>
                      <td>{as.student.studentName}</td>
                      <td>{as.courses.courseName}</td>
                      <td>
                        {" "}
                        <Button
                          variant="primary"
                          value={as.assignmentID}
                          onClick={handleSubmit}
                        >
                          Save
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </div>
  );
}
