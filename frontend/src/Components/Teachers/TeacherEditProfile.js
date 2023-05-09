import { useEffect, useState } from "react";
import "./TeacherReg.css";
import axios from "axios";
import { saveTeacher, updateTeacher } from "../../Services/TeacherServices";
import Header from "./Header.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { TeacherSideNav } from "./TeacherSideNav";
export function TeacherEditProfile() {
  const response = JSON.parse(sessionStorage.getItem("object"));
  const [formData, setformdata] = useState({
    teacherID: response.teacherID,
    teacherName: response.teacherName,
    teacherAddress: response.teacherAddress,
    phone: response.phone,
    email: response.email,
    gender: response.gender,
    dob: response.dob,
    studylink: response.studylink,
    experience: response.experience,
    password: response.password,
  });
  const navigate = useNavigate();
  const [conpassword, setConPassword] = useState("");
  const [teacherNameerror, setteacherNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conpasswordError, setConpasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });
  //handleConpassword
  const handleConpassword = (e) => {
    setConPassword(e.target.value);
  };
  const AddInput = (e) => {
    setformdata({ ...formData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10,}$/;

    if (formData.teacherName.trim().length < 5) {
      setteacherNameError("Name is too Short");
      isValid = false;
    } else if (!nameRegex.test(formData.teacherName.trim())) {
      setteacherNameError("Name can only contain letters");
      isValid = false;
    } else {
      setteacherNameError("");
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
      toast.error("error in updating");
    } else {
      const response = await updateTeacher(formData);
      if (response.status == 200) {
        toast.success("Teacher updation successfully");
        toast.success("Please login again...");
        navigate("/teacher/logout");
      } else {
        toast.error("Teacher not updated");
      }
      console.log(response.data);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <TeacherSideNav></TeacherSideNav>
        </div>
        <div className="col-lg-10">
          <form className="form1" onSubmit={handleSubmit}>
            <h1 className="title">Teacher Profile Update Form</h1>
            <div className="input-group">
              <hr />
              <br />
              <div style={{ width: "100%", marginTop: -27 }}>
                <label className="e" htmlFor="Name">
                  Full Name:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="teacherName"
                  id="teacherName"
                  onChange={AddInput}
                  value={formData.teacherName}
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
                  {teacherNameerror && (
                    <span className="error">{teacherNameerror}</span>
                  )}
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="teacherAddress">
                  Address:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="teacherAddress"
                  id="teacherAddress"
                  onChange={AddInput}
                  value={formData.teacherAddress}
                  placeholder="Enter teacherAddress"
                  required
                />
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="phone">
                  Mobile No.:
                </label>
                <br />
                <input
                  className="string outline"
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={AddInput}
                  value={formData.phone}
                  placeholder="Enter phone No."
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
                  onChange={AddInput}
                  value={formData.email}
                  placeholder="Enter Email"
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
                <label className="e" htmlFor="studylink">
                  Study Link :
                </label>
                <input
                  className="string outline"
                  type="text"
                  name="studylink"
                  id="studylink"
                  onChange={AddInput}
                  value={formData.studylink}
                  placeholder="Enter Study Link"
                  required
                />
              </div>

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="gender">
                  Gender:
                </label>
                <br />
                <br />
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  onChange={AddInput}
                  value="male"
                />
                <label className="a" htmlFor="gender">
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  onChange={AddInput}
                  value="female"
                />
                <label className="a" htmlFor="gender">
                  Female
                </label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  onChange={AddInput}
                  value="other"
                />
                <label className="a" htmlFor="gender">
                  Other
                </label>
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

              <div style={{ width: "100%" }}>
                <label className="e" htmlFor="experience">
                  Experience:
                </label>
                <br />
                {/* <input className="string outline" type="select" placeholder="Enter Institute" required /><br /> */}
                <select
                  name="experience"
                  id="cars"
                  onChange={AddInput}
                  value={formData.experience}
                >
                  <option value="" defaultValue>
                    Select Experience
                  </option>
                  <option value="1">1 yrs</option>
                  <option value="2">2 yrs</option>
                  <option value="3">3 yrs</option>
                  <option value="4">4 yrs</option>
                  <option value="5">more than 5 yrs</option>
                </select>
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
                  value={conpassword}
                  onChange={handleConpassword}
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

              {/* <label className="b">By clicking Sign Up, you agree to our&nbsp;</label>
          <label className="c">Terms</label>
          <label className="b">,&nbsp;</label>
          <label className="c">Data Policy&nbsp;</label>
          <label className="b">and&nbsp;</label>
          <label className="c">Cookies Policy</label>
          <label className="b">.</label><br /> */}

              <br />
            </div>
            <input
              className="button outline"
              type="submit"
              defaultValue="Create Account"
            />
          </form>
        </div>
      </div>
    </>
  );
}
