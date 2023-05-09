import React, { useEffect } from "react";
import { useState } from "react";
import Navigationbar from "./Navigationbar.js";
import "./Css/StudentEditProfile.css";
import { saveStudent, updateStudent } from "../../Services/StudentService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { StudentSideNav } from "./StudentSideNav.js";
export default function StudentEditProfile() {
  const response = JSON.parse(sessionStorage.getItem("object"));
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });
  const [formData, setformdata] = useState({
    studentID: response.studentID,
    studentName: response.studentName,
    dob: response.dob,
    gender: response.gender,
    studentAddress: response.studentAddress,
    institute: response.institute,
    phone: response.phone,
    email: response.email,
    password: response.password,
  });
  console.log();
  const [conpassword, setConPassword] = useState("");
  const [studentNameerror, setStudentNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conpasswordError, setConpasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const AddInput = (e) => {
    setformdata({ ...formData, [e.target.name]: e.target.value });
  };
  const handleConPassword = (e) => {
    setConPassword(e.target.value);
  };
  const validate = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;

    const phoneRegex = /^\d{10,}$/;

    if (formData.studentName.trim().length < 5) {
      setStudentNameError("Name is too Short");
      isValid = false;
    } else if (!nameRegex.test(formData.studentName.trim())) {
      setStudentNameError("Name can only contain letters");
      isValid = false;
    } else {
      setStudentNameError("");
    }

    if (!phoneRegex.test(formData.phone.trim())) {
      setPhoneError(
        "Mobile number must contain only digits and be at least 10 digits long"
      );
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (formData.password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (conpassword !== formData.password) {
      setConpasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConpasswordError("");
    }

    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!validate()) {
      toast.error("error in updation");
    } else {
      const response = await updateStudent(formData);
      if (response.status == 200) {
        toast.success("student profile updated successfully");
        toast.success("Student logout successfully");
        navigate("/student");
      } else {
        toast.error("student profile can not be updated");
      }
      console.log(response.data);
    }
    //  navigate("/student");
  };
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <form className="form2" onSubmit={handleSubmit}>
            <h1 className="title">Student Edit Profile</h1>
            <div className="input-group">
              <hr />
              <br />

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="Name">
                  Full Name :
                </label>
                <input
                  className="string outline"
                  type="text"
                  name="studentName"
                  id="studentName"
                  onChange={AddInput}
                  value={formData.studentName}
                  placeholder="Enter Full Name"
                  required
                />
                <p
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Arial, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {studentNameerror && (
                    <span className="error">{studentNameerror}</span>
                  )}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="dob">
                  DOB:
                </label>
                <br />
                <input
                  className="string outline"
                  type="date"
                  id="dob"
                  name="dob"
                  onChange={AddInput}
                  value={formData.dob}
                  required
                />
              </div>

              <label className="e" htmlFor="gender">
                Gender:
              </label>

              <div style={{ width: "100%" }}>
                <input
                  type="radio"
                  name="gender"
                  onChange={AddInput}
                  value="male"
                />
                <label className="a" htmlFor="gender">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={AddInput}
                  value="female"
                />
                <label className="a" htmlFor="gender">
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  onChange={AddInput}
                  value="other"
                />
                <label className="a" htmlFor="gender">
                  Other
                </label>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="studentAddress">
                  Address:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="studentAddress"
                  id="studentAddress"
                  placeholder="Enter studentAddress"
                  onChange={AddInput}
                  value={formData.studentAddress}
                  required
                />
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="institute">
                  Institute Name:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="institute"
                  id="institute"
                  placeholder="Enter Institute"
                  onChange={AddInput}
                  value={formData.institute}
                  required
                />
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="phone">
                  phone No.:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone No."
                  onChange={AddInput}
                  value={formData.phone}
                  required
                />
                <p
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Arial, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {phoneError && <span className="error">{phoneError}</span>}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="email">
                  Email:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={AddInput}
                  value={formData.email}
                  readOnly
                  required
                />
                <p
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Arial, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {emailError && <span className="error">{emailError}</span>}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="password">
                  Password:
                </label>
                <br />
                <input
                  className="string outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={AddInput}
                  value={formData.password}
                  required
                />
                <p
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Arial, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {passwordError && (
                    <span className="error">{passwordError}</span>
                  )}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="conPassword">
                  Confirm Password:
                </label>
                <br />
                <input
                  className="string outline"
                  type="password"
                  name="conpassword"
                  id="conpassword"
                  placeholder="Confirm Password"
                  onChange={handleConPassword}
                  required
                />
                <p
                  style={{
                    fontSize: 14,
                    color: "red",
                    fontFamily: "Arial, sans-serif",
                    marginTop: 5,
                  }}
                >
                  {conpasswordError && (
                    <span className="error">{conpasswordError}</span>
                  )}
                </p>
              </div>

              <br />

              <br />
            </div>
            <input
              className="button outline"
              type="submit"
              defaultValue="Update Profile"
            />
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
