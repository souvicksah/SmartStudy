// import axios from "axios";

import { useEffect, useState } from "react";
import { courseadd } from "../../Services/TeacherServices.js";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";
import { TeacherSideNav } from "./TeacherSideNav.js";
import { toast } from "react-toastify";
export default function Course() {
  let navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  const [course, setCourse] = useState({
    courseid: "",
    courseName: "",
    description: "",
    startTime: "",
    endTime: "",
    duration: "",
    cost: "",
    teacher_id: "",
  });
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === null || role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });
  const AddInput = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setCourse({ ...course, [course.teacher_id]: sessionStorage.getItem("id") });
    console.log(course);
    const response = await courseadd(course, id);
    console.log(response.data);

    navigate("/teacher");

    //  const response = (await axios.post("http://localhost:8080/course/courseadd", course)).data
    // console.log(response);
  };

  return (
    <>
      <Header></Header>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <TeacherSideNav></TeacherSideNav>
        </div>
        <div className="col-lg-10">
          <section className="vh-60">
            <div className="container h-60">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-9">
                  <h1 className="text-dark mb-4 mt-3">Add Course</h1>
                  <div className="card" style={{ borderRadius: "15px" }}>
                    {
                      <div className="card-body">
                        {/* Hidden Fields */}

                        <div className="col-md-9 pe-5">
                          <input
                            type="hidden"
                            className="form-control form-control-lg"
                            id="courseid"
                            name="courseid"
                            value={course.courseid}
                            onChange={AddInput}
                          />
                        </div>

                        {/* Course Name Field*/}

                        <div className="row align-items-center pt-4 pb-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Course Name</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              name="courseName"
                              id="courseName"
                              value={course.courseName}
                              onChange={AddInput}
                            />
                          </div>
                        </div>

                        <hr className="mx-n3" />

                        {/* Course Description Field*/}

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Course Details</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="text"
                              className="form-control"
                              rows={3}
                              placeholder="Add course details"
                              name="description"
                              id="description"
                              value={course.description}
                              onChange={AddInput}
                            />
                          </div>
                        </div>

                        {/* Start Time Field */}

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Start Time</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="datetime-local"
                              className="form-control"
                              placeholder="Add course details"
                              name="startTime"
                              id="startTime"
                              value={course.startTime}
                              onChange={AddInput}
                            />
                          </div>
                        </div>

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">End Time</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="datetime-local"
                              className="form-control"
                              placeholder="Add course details"
                              name="endTime"
                              id="endTime"
                              value={course.endTime}
                              onChange={AddInput}
                            />
                          </div>
                        </div>

                        <hr className="mx-n3" />

                        {/* Course Duration Field*/}

                        <div className="row align-items-center pt-4 pb-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Duration</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="(in months)"
                              name="duration"
                              id="duration"
                              value={course.duration}
                              onChange={AddInput}
                            />
                          </div>
                        </div>

                        <hr className="mx-n3" />

                        {/* Course Cost Field*/}

                        <div className="row align-items-center pt-4 pb-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Cost</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="(in Rupees)"
                              name="cost"
                              id="cost"
                              value={course.cost}
                              onChange={AddInput}
                            />
                          </div>

                          {/* Hidden Field */}

                          <div className="col-md-9 pe-5">
                            <input
                              type="hidden"
                              className="form-control form-control-lg"
                              id="teacher_id"
                              name="teacher_id"
                              value={sessionStorage.getItem("id")}
                              onLoad={AddInput}
                            />
                          </div>
                        </div>
                        {/* Button Field*/}
                        <hr className="mx-n3" />
                        <div className="px-5 py-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg "
                            onClick={handleSubmit}
                          >
                            Add Course
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
