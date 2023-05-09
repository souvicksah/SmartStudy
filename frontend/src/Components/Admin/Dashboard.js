import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  AllStudent,
  AllTeacher,
  getAllOrders,
  getAllOrdersCount,
  getAllOrdersDate,
} from "../../Services/AdminService";
import Header from "./Header";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { textAlign } from "@mui/system";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function Dashboard() {
  const navigate = useNavigate();
  const [orders, setorders] = useState({});
  //   const labelslist=orders.map((item)=>{
  //         return item;
  //   })
  const [orderdate, setorderdate] = useState([]);
  const [ordercount, setOrderCount] = useState([]);
  const [allstudent,setallstudent]=useState([]);
  const [allteacher,setallteachers]=useState([]);

  // const setOrderDateandCount=async()=>{
  const data = {
    labels: orderdate,
    datasets: [
      {
        label: "Oders",
        data: ordercount,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  //}
  const options = {};
  const getallstudentfromserver = async () => {
    const response = await AllStudent();
    console.log(response.data);
    setallstudent(response.data);
  };
  const getallteacherfromserver = async () => {
    const response = await AllTeacher();
    console.log(response.data);
    setallteachers(response.data);
  };
  const getAllOrdersDatefromServer = async () => {
    const response = await getAllOrdersDate();
    console.log(response.data);
    setorderdate(response.data);
  };
  const getAllOrdersCountfromServer = async () => {
    const response = await getAllOrdersCount();
    console.log(response.data);
    setOrderCount(response.data);
  };
  const getAllOrdersfromServer = async () => {
    const response = await getAllOrders();
    console.log(response.data);
    setorders(response.data);
  };
  const data2 = {
    labels: ["Total Students", "Total Teachers"],
    datasets: [
      {
        data: [allstudent.length,allteacher.length],
        backgroundColor: ["aqua", "purple"],
      },
    ],
  };
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "teacher") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    //getAllOrdersfromServer();
    getAllOrdersDatefromServer();
    getAllOrdersCountfromServer();
    getallstudentfromserver();
    getallteacherfromserver();
    //setOrderDateandCount();
  }, []);
  return (
    <>
      <Header></Header>
      <div>
        <Container className="mt-4 mb-4 text-center">
          <Alert variant="primary" className="alertBlock">
            <h2 style={{ color: "#007bff" }}>Admin DashBoard</h2>
          </Alert>
        </Container>
        <div className="row ">
          <div className="col-lg-5">
            <h3>Orders per day</h3>
            <Bar data={data} options={options}></Bar>
          </div>
          <div className="col-lg-2"></div>
           <div className="col-lg-5" style={{height:"330px",position:"relative",top:"-20px"}}> 
              <h3 style={{position:"relative",left:"-110px"}}>Teacher and Student Count</h3>
              <Pie data={data2} options={options}></Pie>
             </div>  
        </div>
        {/* <div style={{ height: "50vh", margin: "80px" }}>
            <h3>Orders per day</h3>
          <Bar data={data} options={options}></Bar>
        </div> */}
      </div>
    </>
  );
}

export default Dashboard;
