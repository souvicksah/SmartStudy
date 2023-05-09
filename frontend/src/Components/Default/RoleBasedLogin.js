import React from 'react'
import { DefaultHeader } from './Header/DefaultHeader';
import '../Default/RoleBasedLogin.css'
import {useNavigate} from "react-router-dom"
export default function RoleBasedLogin() {
    const navigate = useNavigate();
    function handleClick(event) {
        if (event.target.value === "student") {
          navigate("/student");
          } else if (event.target.value === "teacher") {
            navigate("/teacher");
          }
           else if (event.target.value === "admin") {
            navigate("/admin/login");
          }
       
      }
  return (
    
    <>
    <DefaultHeader></DefaultHeader>
    <div className="container1">
    <h2>Your  Are : </h2>
    <ul>
      <li>
        <input type="radio" id="f-option" name="selector" value="student" onChange={handleClick}/>
        <label htmlFor="f-option">Student</label>
        <div className="check" />
      </li>
      <li>
        <input type="radio" id="s-option" name="selector" value="teacher" onChange={handleClick} />
        <label htmlFor="s-option">Teacher</label>
        <div className="check"><div className="inside" /></div>
      </li>
      <li>
        <input type="radio" id="t-option" name="selector" value="admin" onChange={handleClick} />
        <label htmlFor="t-option">Admin</label>
        <div className="check"><div className="inside" /></div>
      </li>
    </ul>
  </div>
  </>
  )
}
