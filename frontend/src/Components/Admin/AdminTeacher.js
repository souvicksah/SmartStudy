import React, { useEffect, useState } from "react";
import { AllTeacher } from "../../Services/AdminService";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function AdminTeacher() {
  const [teacher, setTeacher] = useState([]);
  const getallteacherfromserver = async () => {
    const response = await AllTeacher();
    console.log(response.data);
    setTeacher(response.data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "teacher") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getallteacherfromserver();
  }, []);
  return (
    <>
      <Header></Header>
      {/* <div>AdminTeacher</div> */}
      <div style={{ height: "80vh" }}>
        <Container className="mt-4 mb-4 text-center">
          <Alert variant="primary" className="alertBlock">
            <h2 style={{ color: "#007bff" }}>All Teacher List</h2>
          </Alert>
        </Container>
        <h3>Total Teacher Count :{teacher.length}</h3>
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
                <th>Teacher ID</th>
                <th>Teacher name</th>
                <th>Teacher email</th>
                <th>Teacher phone</th>
                <th>Teacher Address</th>
                <th>experience</th>
              </tr>
            </thead>
            {/* internship will become a JSON object here */}
            <tbody>
              {teacher.map((item) => {
                return (
                  <tr>
                    <td>{item.teacherID}</td>
                    <td>{item.teacherName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.teacherAddress}</td>
                    <td>{item.experience + " years"}</td>
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

export default AdminTeacher;
