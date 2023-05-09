import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  deleteInternshipFromServer,
  getAllInternshipFromServer,
} from "../../Services/IAPIService";
import Navigationbar from "../Students/Navigationbar";
import { StudentSideNav } from "../Students/StudentSideNav";
export default function AllInternship() {
  const [allInternship, setAllInternship] = useState([]);
  const navigate=useNavigate();
  //to store id of event on which button is clicked
  const [selectedInternshipId, setSelectedInternshipId] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });

  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };

  async function getAllInternship() {
    //axios will return promise that has reponse ..need to store it
    const response = await getAllInternshipFromServer();
    if (sessionStorage.getItem("id")) {
      setAllInternship(response.data);
    }
    console.log(response.data);
  }

  //   function to delete data of internship

  const deleteInternship = async () => {
    const response = await deleteInternshipFromServer(selectedInternshipId);
    console.log(response.data);
    //returned message from server
    closeModal();
    getAllInternship();
  };

  useEffect(() => {
    getAllInternship();
  }, []);

  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <Container className="mt-4 mb-4 text-center">
            <Alert variant="primary" className="alertBlock">
              <h2 style={{ color: "#007bff" }}>Internship</h2>
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
                  <th>Internship ID</th>
                  <th>Internship name</th>
                  <th>Internship profile</th>

                  <th>Description</th>
                  <th>Applylink</th>
                  <th>Company name</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              {/* internship will become a JSON object here */}
              <tbody>
                {allInternship.map((internship) => {
                  return (
                    <tr>
                      <td>{internship.internshipID}</td>
                      <td>{internship.internshipName}</td>
                      <td>{internship.internshipProfile}</td>

                      <td>{internship.description}</td>
                      <td>{internship.applyLink}</td>
                      <td>{internship.companyName}</td>
                      <td>{internship.lastDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    </>
  );
}
