import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { deleteInternshipFromServerAdmin } from "../../Services/AdminService";
import {
  deleteInternshipFromServer,
  getAllInternshipFromServer,
} from "../../Services/IAPIService";
import Header from "./Header.js";
export function AllInternshipAdmin() {
  const navigate = useNavigate();
  const [allInternship, setAllInternship] = useState([]);
  //to store id of event on which button is clicked
  const [selectedInternshipId, setSelectedInternshipId] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "teacher") {
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
    setAllInternship(response.data);
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
  const handleDeleteinternship=async(event)=>{
    deleteInternshipFromServerAdmin(event.target.value);
    navigate("/admin");
  }

  useEffect(() => {
    getAllInternship();
  }, []);

  return (
    <>
      <Header></Header>
      <div style={{ height: "80vh" }}>
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
                <th>Delete</th>
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
                    <Button
                      variant="primary"
                      value={internship.internshipID}
                       onClick={handleDeleteinternship}
                    >
                      Delete Assignment
                    </Button>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
      <Modal show={isModalOpened} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Delete internship with Internship-ID :{" "}
          {selectedInternshipId}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteInternship}>
            Yes
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
