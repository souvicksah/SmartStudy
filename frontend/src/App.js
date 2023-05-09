import StudentHome from "./Components/Students/StudentHome.js";
import TeacherHome from "./Components/Teachers/TeacherHome.js";
import Courses from "./Components/Students/Courses.js";
import Assignments from "./Components/Students/Assignments.js";
import Cookies from "js-cookie";
import Login from "./Components/Students/Login.js";
import Register from "./Components/Register.js";
import Cart from "./Components/Students/Cart.js";
import Navigationbar from "./Components/Students/Navigationbar.js";
import Rewards from "./Components/Students/Rewards.js";
import Footer from "./Components/Footer.js";
import Logout from "./Components/Logout.js";
import Course from "./Components/Teachers/Course.js";
import CourseDetails from "./Components/Teachers/CourseDetails.js";
import RoleBasedLogin from "./Components/Default/RoleBasedLogin.js";
import AllInternship from "./Components/Internship/AllInternship.js";
import TeacherAssignments from "./Components/Teachers/TeacherAssignments.js";
import { CreateInternshipForm } from "../src/Components/Admin/CreateInternshipForm.js";
import Batch from "./Components/Teachers/Batch.js";
import StudentRegistration from "./Components/Students/StudentRegistration.js";
import { TeacherReg } from "./Components/Teachers/TeacherReg.js";
import Paynow from "./Components/Students/Paynow.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TeacherLogin from "./Components/Teachers/TeacherLogin.js";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./Components/Default/AboutUs.js";
import ContactUs from "./Components/Default/ContactUs.js";
import AssignmentReview from "./Components/Teachers/AssignmentReview.js";
import AdminLogin from "./Components/Admin/AdminLogin.js";
import AdminHome from "./Components/Admin/AdminHome.js";
import { AllInternshipAdmin } from "./Components/Admin/AllInternship.js";
import MyCourses from "./Components/Students/MyCourses.js";
import StudentProfile from "./Components/Students/StudentProfile.js";
import StudentEditProfille from "./Components/Students/StudentEditProfile.js";
import TeacherProfile from "./Components/Teachers/TeacherProfile.js";
import { TeacherEditProfile } from "./Components/Teachers/TeacherEditProfile.js";
import AdminStudent from "./Components/Admin/AdminStudent.js";
import AdminTeacher from "./Components/Admin/AdminTeacher.js";
import StudentForgotpassword from "./Components/Students/StudentForgotpassword.js";
import TeacherForgotPassword from "./Components/Teachers/TeacherForgotPassword.js";
import Dashboard from "./Components/Admin/Dashboard.js";
import StudentDashBoard from "./Components/Students/StudentDashBoard.js";

function App() {
  // const navigate=useNavigate();
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<RoleBasedLogin></RoleBasedLogin>}></Route>
        <Route path="/student" element={<StudentHome></StudentHome>}></Route>
        <Route path="/teacher" element={<TeacherHome></TeacherHome>}></Route>
        <Route path="/admin" element={<AdminHome></AdminHome>}></Route>

        {/* Student */}

        <Route
          path="/student/listofcourses"
          element={<Courses></Courses>}
        ></Route>
        <Route
          path="/student/assignments"
          element={<Assignments></Assignments>}
        ></Route>
        <Route
          path="/student/profile"
          element={<StudentProfile></StudentProfile>}
        ></Route>
        <Route path="/student/rewards" element={<Rewards></Rewards>}></Route>
        <Route
          path="/student/allinternship"
          element={<AllInternship></AllInternship>}
        ></Route>
        <Route
          path="/student/forgotpassword"
          element={<StudentForgotpassword></StudentForgotpassword>}
        ></Route>

        <Route
          path="/student/editprofile"
          element={<StudentEditProfille></StudentEditProfille>}
        ></Route>
        <Route path="/student/paynow" element={<Paynow></Paynow>}></Route>
        <Route
          path="/student/mycourses"
          element={<MyCourses></MyCourses>}
        ></Route>
        <Route
          path="/student/signup"
          element={<StudentRegistration></StudentRegistration>}
        ></Route>
        <Route path="/student/login" element={<Login></Login>}></Route>
        <Route path="/student/logout" element={<Logout></Logout>}></Route>
        <Route
          path="/student/dashboard"
          element={<StudentDashBoard></StudentDashBoard>}
        ></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        {/* teacher */}

        <Route path="/teacher/courseAdd" element={<Course></Course>}></Route>
        <Route
          path="/teacher/getCourses"
          element={<CourseDetails></CourseDetails>}
        ></Route>
        <Route path="/teacher/logout" element={<Logout></Logout>}></Route>
        <Route
          path="/teacher/assignments"
          element={<TeacherAssignments></TeacherAssignments>}
        ></Route>
        <Route path="/teacher/batch" element={<Batch></Batch>}></Route>
        <Route
          path="/teacher/assignmentreview"
          element={<AssignmentReview></AssignmentReview>}
        ></Route>
        <Route
          path="/teacher/signup"
          element={<TeacherReg></TeacherReg>}
        ></Route>
        <Route
          path="/teacher/login"
          element={<TeacherLogin></TeacherLogin>}
        ></Route>
        <Route
          path="/teacher/myprofile"
          element={<TeacherProfile></TeacherProfile>}
        ></Route>
        <Route
          path="/teacher/editprofile"
          element={<TeacherEditProfile></TeacherEditProfile>}
        ></Route>
        <Route
          path="/teacher/forgotpassword"
          element={<TeacherForgotPassword></TeacherForgotPassword>}
        ></Route>

        {/* Deafult */}
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>

        {/* Admin */}

        <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
        <Route
          path="/admin/addinternship"
          element={<CreateInternshipForm></CreateInternshipForm>}
        ></Route>
        <Route
          path="/admin/allinternship"
          element={<AllInternshipAdmin></AllInternshipAdmin>}
        ></Route>
        <Route
          path="/admin/allstudent"
          element={<AdminStudent></AdminStudent>}
        ></Route>
        <Route
          path="/admin/allteacher"
          element={<AdminTeacher></AdminTeacher>}
        ></Route>
        <Route
          path="/admin/dashboard"
          element={<Dashboard></Dashboard>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
