import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom";
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
  const handleLogout=async (event)=>{
    sessionStorage.removeItem("id") && 
    sessionStorage.removeItem("role") &&
    sessionStorage.removeItem("object")
    sessionStorage.clear();
    const response=await doLogout();
    console.log(response.data);
    toast.success("Teacher logout successfully");
    navigate("/teacher");
  }

  return (
   
      <>
      <Navbar bg="primary" variant="primary">
        <Container>
          <Navbar.Brand href="/teacher">Smart Study</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/teacher">Home</Nav.Link>
            { sessionStorage.getItem("id")!=null && 
            <>   
                  <NavLink
                    
                    className="  mx-3"
                    onClick={handleClick}
                    style={{position:'relative',top:'8px'}}
                  >
                    Course
                  </NavLink>
      
                  <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
      
                  
                  <MenuItem onClick={handleClose} ><NavLink to="/teacher/courseAdd" className="text-decoration-none text-dark mx-3" >
                 Add Course
                </NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to="/teacher/getCourses" className="text-decoration-none text-dark mx-3" >
                 Course List
                </NavLink></MenuItem>
                
      
                </Menu>
                <Nav.Link href="/teacher/batch">Batch</Nav.Link>
                <Nav.Link href="/teacher/assignmentreview">Assignment Review</Nav.Link>
                  </>
                }
                { sessionStorage.getItem("id")==null &&
                <>
                <Nav.Link href="/">login as</Nav.Link>
            <Nav.Link href="/teacher/login">Log In</Nav.Link>
            <Nav.Link href="/teacher/signup">Sign Up</Nav.Link>
            </>
                }
                { sessionStorage.getItem("id")!=null && 
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              }
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
