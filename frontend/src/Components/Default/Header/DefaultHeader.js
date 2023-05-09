import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
export function DefaultHeader() {
  return (
    <>
      <Navbar bg="primary" variant="primary"> 
        <Container>
          <Navbar.Brand href="/">Smart Study</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
         
            
            {/* <Nav.Link href="/student/login">Log In</Nav.Link>
            <Nav.Link href="/student/signup">Sign Up</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link> */}
            
          </Nav>
        </Container>
      </Navbar>
      
  
    </>
  );
}

