import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { DefaultHeader } from "./Header/DefaultHeader";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8q20b5h",
        "template_eb0xetr",
        e.target,
        "a4wSHdC1c-53rC02-"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            mobileno: "",
            subject: "",
            message: "",
          });
          setAlertVariant("success");
          setAlertMessage("Message sent!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setAlertVariant("danger");
          setAlertMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div>
      <DefaultHeader></DefaultHeader>
      <Container className="py-5">
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Contact Us"
              className="img-fluid"
              style={{height:"60vh"}}
            />
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile no</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
            {isSent && (
              <Alert
                variant={alertVariant}
                className="mt-4"
                onClose={() => setIsSent(false)}
                dismissible
              >
                <Alert.Heading>{alertMessage}</Alert.Heading>
                <p>Thank you for contacting us!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <div class="card">
          <div class="card-header">FOR ANY BUSINESS ENQUIRY</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p></p>
              <footer class="blockquote-footer">
                {" "}
                <cite title="Source Title">contact@smartstudy.com</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        <div class="card">
          <div class="card-header">HEADQUARTERS</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Mumbai Center,Main Building ,Maharhastra - 700110</p>
              <footer class="blockquote-footer">
                {" "}
                <cite title="Source Title">91 9880031619</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="card">
          <div class="card-header">STUDENT CONTACT CENTER</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p> +91 924 133 3666</p>
              <footer class="blockquote-footer">
                support@smartstudy.com <cite title="Source Title"></cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.43912849094!2d73.0542462!3d19.0258994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1678213470321!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
