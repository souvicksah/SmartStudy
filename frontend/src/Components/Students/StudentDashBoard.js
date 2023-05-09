import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import { StudentSideNav } from "./StudentSideNav";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import {
    getAllAssignments,
  getAllCoursesById,
  getAllCoursesFromServer,
} from "../../Services/StudentService";
ChartJS.register(ArcElement, Tooltip, Legend);
function StudentDashBoard() {
  const navigate = useNavigate();
  const [allcourses, setallcourses] = useState([]);
  const [myallcourses, setmyallcourses] = useState([]);
  const [assignments,setAssignments]=useState([]);
  const checkassignmnets=assignments.filter((item)=>{
       return item.assignmentStatus;
  })
  console.log(checkassignmnets.length+"ch");
  const uncheckedassignmnets=assignments.filter((item)=>{
    return !item.assignmentStatus;
})
console.log(uncheckedassignmnets.length+"un");
  let id = sessionStorage.getItem("id");
  const data = {
    labels: ["Available Courses", "My Courses"],
    datasets: [
      {
        data: [allcourses.length, myallcourses.length],
        backgroundColor: ["aqua", "bloodrange"],
      },
    ],
  };
  const data2 = {
    labels: ["Checked Assignments Counts", "UnChecked Assignments Count"],
    datasets: [
      {
        data: [checkassignmnets.length,uncheckedassignmnets.length],
        backgroundColor: ["aqua", "purple"],
      },
    ],
  };
  async function getAllCourses() {
    console.log(id);
    const response = await getAllCoursesFromServer(id);
    console.log(response.data);
    setallcourses(response.data);
  }
  async function getAllCoursesbystudentId(id) {
    const response = await getAllCoursesById(id);
    setmyallcourses(response.data);
    console.log(response.data);
  }
  const options = {};
  async function fetchData() {
    const response = await getAllAssignments(id);
    console.log(response.data);
    setAssignments(response.data);
  }
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    getAllCourses();
    getAllCoursesbystudentId(id);
    fetchData();
  },[]);

  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-5"> 
              <h3>Available Courses</h3>
              <Pie data={data} options={options}></Pie>
             </div> 
             <div className="col-lg-5"> 
              <h3>Assignments Status</h3>
              <Pie data={data2} options={options}></Pie>
             </div> 
         </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashBoard;
