import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../../Services/TeacherServices";
export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = useState(null);
  const open1 = Boolean(anchorE2);

  const handleclick = (event1) => {
    setAnchorE2(event1.currentTarget);
  };
  const handleclose = () => {
    setAnchorE2(null);
  };

  const [anchorE3, setAnchorE3] = useState(null);
  const open2 = Boolean(anchorE3);

  const handleclick1 = (event1) => {
    setAnchorE3(event1.currentTarget);
  };
  const handleclose1 = () => {
    setAnchorE3(null);
  };

  const navigate = useNavigate();
  const handleLogout = (event) => {
    // sessionStorage.removeItem("id") &&
    //   sessionStorage.removeItem("role") &&
    //   sessionStorage.removeItem("object");
    sessionStorage.clear();
    navigate("/");
    // const response = await doLogout();
    // console.log(response.data);
    // toast.success("Admin logout successfully");
    // navigate("/admin");
  };

  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Brand href="/admin">Smart Study</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin">Home</Nav.Link>
            {sessionStorage.getItem("id") != null &&
              sessionStorage.getItem("role") === "admin" && (
                <>
                  <Nav.Link href="/admin/dashboard">DashBoard</Nav.Link>
                  <Nav.Link href="/admin/addinternship">
                    Add Internship
                  </Nav.Link>
                  <Nav.Link href="/admin/allinternship">
                    All Internship
                  </Nav.Link>
                  <Nav.Link href="/admin/allstudent">All Student List</Nav.Link>
                  <Nav.Link href="/admin/allteacher">All Teacher List</Nav.Link>
                </>
              )}
            {sessionStorage.getItem("id") == null && (
              <>
                <Nav.Link href="/admin/login">Log In</Nav.Link>
              </>
            )}
            {sessionStorage.getItem("id") != null && (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
