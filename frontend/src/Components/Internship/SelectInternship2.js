import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { getAllInternshipFromServer } from "../services/IAPIService";
import { ArrangeInternship } from "./SelectInternship";

export function Selectinternship2() {
  const [allInternship, setAllInternship] = useState([]);
  //to store id of internship on which button is clicked
  const [selectedInternshipId, setSelectedInternshipId] = useState("");

  async function getAllInternship() {
    //axios will return promise that has reponse ..need to store it
    const response = await getAllInternshipFromServer();
    setAllInternship(response.data);
  }

  useEffect(() => {
    getAllInternship();
  }, []);

  return (
    <>
      <Container className="mt-4 mb-4 text-center">
        <Alert variant="success" className="alertBlock">
          <h2>List Of All Internship</h2>
        </Alert>
      </Container>
      <Container>
        <Row>
          {allInternship.map((internship) => {
            return (
              <Col lg={4} className="mb-4">
                <strong>
                  <ArrangeInternship internship={internship} />
                </strong>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
