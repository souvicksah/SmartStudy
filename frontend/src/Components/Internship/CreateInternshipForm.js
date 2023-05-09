import { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { saveInternship } from "../services/IAPIService";

export class CreateForm extends Component {
  constructor() {
    super();
    this.state = {
      

      formData: {},
      modalOpeningStatus: false,
      defaultValues: { intid: "" },
    };
  }

  openDialog = () => {
    this.setState({ modalOpeningStatus: true });
  };
  closeDialog = () => {
    this.setState({ modalOpeningStatus: false });
  };

  handleChange = (internship) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [internship.target.name]: internship.target.value,
      },
    });
  };

  handleSubmit = async (internship) => {
    internship.preventDefault(); //prevent reloading of page on submit
    const response = await saveInternship(this.state.formData); //promise returned with response
    console.log(response.data);
    if (response.status == 200) {
      this.setState({
        formData: {
          intid: "",
          name: "",
          iprofile: "",
          location: "",
          iDesc: "",
          apply: "",
          
          comp: "",
          img: "",
          iDate: "",
        },
      });
      this.openDialog();
    }
  };

  render() {
    return (
      <>
        <strong>
          <Container className="mt-4 text-center">
            <Alert variant="success" className="alertBlock">
              <h2> Create New Internship</h2>
            </Alert>
          </Container>
          <Container className="mt-4">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Internship Id</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.formData.intid}
                      placeholder="Enter Internship id"
                      name="intid"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Internship name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Internship name"
                      name="name"
                      value={this.state.formData.name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Internship profile</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Internship Profile"
                      name="iprofile"
                      value={this.state.formData.iprofile}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Internship Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Location"
                      name="location"
                      value={this.state.formData.location}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Internship Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Description"
                      name="iDesc"
                      value={this.state.formData.iDesc}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Applylink</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Applylink Details"
                      name="apply"
                      value={this.state.formData.apply}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>internship Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company name"
                      name="comp"
                      value={this.state.formData.comp}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
             
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Input Image URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Event URL"
                      name="img"
                      value={this.state.formData.img}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter Date in dd-mm-yyyy"
                      name="iDate"
                      value={this.state.formData.eveDate}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" variant="success" className="mb-4">
                Register internship
              </Button>
            </Form>
          </Container>
          <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>internship Created Successfully!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.closeDialog}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </strong>
      </>
    );
  }
}
