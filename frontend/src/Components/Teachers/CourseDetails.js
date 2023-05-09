import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {
  getAllCourseByTeacherID,
  deleteCourseById,
} from "../../Services/TeacherServices.js";
import Header from "./Header.js";
import "./coursedetails.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { TeacherSideNav } from "./TeacherSideNav.js";

export default function CourseDetails() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  useEffect(() => {
    async function fetchData() {
      const response = await getAllCourseByTeacherID(id);
      setData(response.data);
      console.log(response.data);
    }
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    fetchData();
  }, []);
  const handleCourseDelete = async (e) => {
    console.log(e.target.value);
    const response = await deleteCourseById(e.target.value);
    navigate("/teacher");
    console.log(response.data);

    toast.success(`Course ${response.data.courseName} has been deleted.`);
  };

  return (
    <>
      <Header></Header>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <TeacherSideNav></TeacherSideNav>
        </div>
        <div className="col-lg-10">
          <div className="courses ">
            <h1 id="h">All Courses </h1>
            <div
              className="container row row-cols-2"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {data.map((course) => {
                return (
                  // <>
                  //   <div className="container">
                  //     <div className="card1 card--light1">
                  //       <img
                  //         className="card__image1"
                  //         src="data:image/jpeg;base64,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"
                  //         alt=""
                  //       />
                  //       <h2 className="card__title1">{course.courseName}</h2>
                  //       <p className="card__body1"> {course.description}</p>
                  //       <p className="card__body1">Start Time : {course.startTime}</p>
                  //       <p className="card__body1">End Time : {course.endTime}</p>
                  //       <p className="card__body1">Duration :{course.duration}</p>
                  //       <Button
                  //       variant="primary"
                  //       value={course.courseId}
                  //       onClick={handleCourseDelete}

                  //     >
                  //       Delete Course
                  //     </Button>
                  //     </div>
                  //   </div>
                  // </>
                  <>
                    <div class="container1" key={course.courseid}>
                      <div class="card1">
                        <div class="left-column1 background2-left-column">
                          <h5 style={{ fontSize: 14 }}>Duration</h5>
                          <p style={{ fontSize: 14, marginTop: -26 }}>
                            {course.duration} months
                          </p>
                          <i class="fa-solid fa-user-graduate"></i>
                        </div>

                        <div class="right-column1">
                          <div>
                            <h2>{course.courseName}</h2>
                            <h6>
                              {course.startTime} - {course.endTime}
                            </h6>
                          </div>
                          <h3>Description</h3>
                          <p>{course.description}</p>

                          <h5 style={{ fontSize: 14 }}>
                            Cost : ₹ {course.cost}
                          </h5>
                          <Button
                            variant="primary"
                            value={course.courseId}
                            onClick={handleCourseDelete}
                          >
                            Delete Course
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
