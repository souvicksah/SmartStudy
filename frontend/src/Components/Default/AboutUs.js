import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { DefaultHeader } from './Header/DefaultHeader';

const AboutUs = () => {
  
  const studentReviews = [
    {
      name: 'John Doe',
      course: 'Introduction to Programming',
      review:
        'This course was amazing! The instructor was knowledgeable and provided clear explanations. The assignments and quizzes were challenging but helped me really understand the material.',
    },
    {
      name: 'Jane Smith',
      course: 'Data Structures and Algorithms',
      review:
        'I loved this course! The content was organized well and the instructor was engaging. The practice problems were especially helpful in reinforcing the concepts.',
    },
    {
      name: 'Bob Johnson',
      course: 'Machine Learning',
      review:
        'This was the best online course I have ever taken. The instructor was very knowledgeable and provided great resources to supplement the lectures. I learned so much and feel confident in applying these skills in my work.',
    },
  ];

  return (
    <>
    <DefaultHeader></DefaultHeader>
    <Container>
      <Row>
        <Col md={6}>
        <p>
          
          </p>
         
        </Col>
        </Row>
  
      <Row>
        <Col md={6}>
          <Image src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" fluid />
        </Col>
        <Col md={6}>
          <h1>About Us</h1>
          <p>
          Since 1991, we continue to believe in the power of technology to transform the education process and the power of education to build innovative future generations.
          </p>
          <h1>OUR VISION</h1>
          <p>
          We continuously think future forward and strive to provide solutions that empower youth and nations to be productive and prosperous in the Fourth Industrial era.
          </p>
          <h1>OUR MISSION</h1>
          <p>
          We will bring industry-led, real-world experience to improve the employability of all learners.

We will create engaging learner communities through intuitive platform and content.

We will use the power of technology to deliver learning outcomes for all learners.

 
We will promote creativity, speed and agility to deliver value to all stakeholders.
          </p>
          <h1>Lifelong Learning</h1>
          <p>
          We believe in lifelong learning and hence provide learning solutions across the spectrum from K-12 Education, Vocational Education, Higher Education and Corporate Learning
          </p>
          <h1>Customer Success</h1>
          <p>
          Our primary focus has always been to ensure successful learning outcomes and improved performance for our customers
          </p>
         
          
          <Button variant="primary">Learn More</Button>
        </Col>
        
        
      </Row>
      <Row>
        <Col md={6}>

        </Col>
        </Row>
      <Row className="mt-5">
        <Col md={12}>
          <h2>Student Reviews</h2>
          <p>Here's what our students have to say about our courses:</p>
        </Col>
      </Row>
      <Row>
        {studentReviews.map((review) => (
          <Col md={4} className="mb-4" key={review.name}>
            <Card>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.course}</Card.Subtitle>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
        
      </Row>
    </Container>
    </>
  );
};

export default AboutUs;
