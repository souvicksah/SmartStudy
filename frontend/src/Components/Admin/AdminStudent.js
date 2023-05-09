import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { AllStudent } from "../../Services/AdminService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AdminStudent() {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  const getallstudentfromserver = async () => {
    const response = await AllStudent();
    console.log(response.data);
    setStudent(response.data);
  };

  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "teacher") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getallstudentfromserver();
  }, []);
  return (
    <>
      <Header></Header>
      <div style={{ height: "80vh" }}>
        <Container className="mt-4 mb-4 text-center">
          <Alert variant="primary" className="alertBlock">
            <h2 style={{ color: "#007bff" }}>All Student List</h2>
          </Alert>
        </Container>
        <h3>Total Student Count :{student.length}</h3>
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
                <th>Student ID</th>
                <th>Student name</th>
                <th>Student email</th>
                <th>Student phone</th>
                <th>Student Address</th>
                <th>Institute</th>
              </tr>
            </thead>
            {/* internship will become a JSON object here */}
            <tbody>
              {student.map((item) => {
                return (
                  <tr>
                    <td>{item.studentID}</td>
                    <td>{item.studentName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.studentAddress}</td>
                    <td>{item.institute}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default AdminStudent;
