import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function ArrangeInternship({ internship }) {
  const navigate2link = useNavigate();

  const handleTransfer = () => {
    localStorage.setItem("intid", internship.intid);
    localStorage.setItem("name", internship.name);
    localStorage.setItem("profile", internship.profile);
    localStorage.setItem("comp", internship.comp);
    navigate2link("/book");
  };

  return (
    <Card className="cardStyle">
      <Card.Img variant="top" src={internship.img} />
      <Card.Body>
        <Card.Title style={{ color: "red" }}>
          {internship.intid} | {internship.profile}
        </Card.Title>
        <hr></hr>
        <Card.Text>
          Name : {internship.name} | Location : {internship.location}
        </Card.Text>
        <hr></hr>
        <Card.Text>
         last Date : {internship.iDate} | Company : {internship.comp}
        </Card.Text>
        <hr></hr>
        <Card.Text>{internship.iDesc}</Card.Text>
        <hr></hr>
        <Card.Text>
          <Button variant="success" onClick={handleTransfer}>
            Register Now
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


