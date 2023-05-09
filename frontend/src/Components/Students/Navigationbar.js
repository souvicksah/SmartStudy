import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../../Services/StudentService";
function Navigationbar() {
  const navigate = useNavigate();
  const handleLogout = async (event) => {
    sessionStorage.removeItem("id") && 
    sessionStorage.removeItem("role") &&
    sessionStorage.removeItem("object")
    sessionStorage.clear();
    const response=await doLogout();
    console.log(response.data);
    toast.success("Student logout successfully");
    navigate("/student");
  };

  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Brand href="/student">Smart Study</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/student">Home</Nav.Link>
            {sessionStorage.getItem("id") != null && (
              <>
                <Nav.Link href="/student/listofcourses">Courses</Nav.Link>
                <Nav.Link href="/student/mycourses">My Courses</Nav.Link>
                <Nav.Link href="/student/assignments">Assignments</Nav.Link>
                <Nav.Link href="/student/rewards">Rewards</Nav.Link>
                <Nav.Link href="/student/allinternship">Internship</Nav.Link>
              </>
            )}

            {sessionStorage.getItem("id") == null && (
              <>
                <Nav.Link href="/">login as</Nav.Link>
                <Nav.Link href="/student/login">Log In</Nav.Link>
                <Nav.Link href="/student/signup">Sign Up</Nav.Link>
              </>
            )}

{ sessionStorage.getItem("id")!=null && 
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
