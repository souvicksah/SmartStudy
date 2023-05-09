import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getcourseDetailsFromServer,
  doOrder,
} from "../../Services/StudentService";
import { Button } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import $, { error } from "jquery";

export default function Paynow() {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();
  const [course, setCourse] = useState({});
  const getcourseDetails = async () => {
    const response = await getcourseDetailsFromServer(id);
    console.log(response.data);
    setCourse(response.data);
  };
  useEffect(() => {
    getcourseDetails();
  }, []);

  const handleSubmit = async (event) => {
    const response = await doOrder(course, sessionStorage.getItem("id"));
    // console.log(response.data);
    // if (response.status == 200 && response.data != null) {
    //   toast.success(
    //     `order id ${response.data.orderId} has been generated and you will be receing a great learning journey with us`
    //   );
    // } else {
    //   toast.error("not possible");
    // }
    // navigate("/student/listofcourses");

    console.log("payment started");
    let amount = course.cost;
    console.log(amount);

    if (amount == "" || amount == null) {
      toast.error("Amount is Required");
    } else {
      $.ajax({
        url: "http://localhost:8080/student/paynow/cre",
        data: JSON.stringify({ amount: amount }),
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: function (response) {
          console.log(response);
          if (response.status == "created") {
            //open payment form
            let options = {
              key: "rzp_test_0op6Uisax8F6uF",
              amount: response.amount,
              currency: "INR",
              name: "Smart Study",
              description: "Payment",
              image:
                "data:image/png;base64,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",
              order_id: response.id,

              handler: function (response) {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                console.log("Payment sucessfull");
                toast.success("Payment Successful");
                navigate("/student/listofcourses");
              },

              prefill: {
                name: "",
                email: "shubham@gmail.com",
                contact: "9168368071",
              },

              notes: {
                address: "Razorpay Corporate Office",
              },

              theme: {
                color: "#3399cc",
              },
            };

            const rzp = new window.Razorpay(options);

            rzp.on("payment.failed", function (response) {
              console.log(response.error.code);
              console.log(response.error.description);
              console.log(response.error.source);
              console.log(response.error.step);
              console.log(response.error.reason);
              console.log(response.error.metadata.order_id);
              console.log(response.error.metadata.payment_id);
              toast.error("Payment Failed");
            });

            rzp.open();
          }
        },
        error: function (error) {
          console.log("error");
          toast.error("Something went wrong");
        },
      });
    }
  };
  return (
    <div>
      <Navigationbar></Navigationbar>
      <div style={{ textAlign: "center", height: "80vh", padding: "60px" }}>
        <input type="hidden" value={course.courseId}></input>
        <label>Course Name</label>
        <br></br>
        <input
          type="text"
          readOnly="true"
          value={course.courseName}
          style={{ width: "70vh", padding: "20px", margin: "10px" }}
        ></input>
        <br></br>
        <label>Course Description</label>
        <br></br>
        <input
          type="text"
          readOnly="true"
          value={course.description}
          style={{ width: "70vh", padding: "20px", margin: "10px" }}
        ></input>
        <br></br>
        <label>Course Duration</label>
        <br></br>
        <input
          type="text"
          readOnly="true"
          value={course.duration + "  Months"}
          style={{ width: "70vh", padding: "20px", margin: "10px" }}
        ></input>
        <br></br>
        <label>Course Cost</label>
        <br></br>
        <input
          type="text"
          readOnly="true"
          value={course.cost + "/-"}
          style={{ width: "70vh", padding: "20px", margin: "10px" }}
        ></input>
        <br></br>

        <Button name="buynow" variant="primary" onClick={handleSubmit}>
          paynow
        </Button>
      </div>
      {/* <button variant="primary">Click me</button> */}
    </div>
  );
}
