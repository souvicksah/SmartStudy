import React from "react";
import Card from "react-bootstrap/Card";
import "./Css/Rewards.css";
import { useEffect, useState } from "react";
import coin from "../../img/coin.png";
import { getAllRewards, afterRedeem } from "../../Services/StudentService";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { ToastContainer, toast } from "react-toastify";
import { StudentSideNav } from "./StudentSideNav";
import { useNavigate } from "react-router";

export default function Rewards() {
  const [coins, setCoins] = useState(0);
  const navigate=useNavigate();
  let id = sessionStorage.getItem("id");

  useEffect(() => {
    async function fetchData() {
      //put your session attribute here for different studnet to get different coins i.e student id
      const response = await getAllRewards(id);
      setCoins(response.data.rewardspoint);
      console.log(response.data);
    }
    let role = sessionStorage.getItem("role");
    if (role === null || role === "teacher" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
    fetchData();
  });
  const redeem = (event) => {
    console.log(typeof event.target.value);
    if (event.target.value > coins) {
      //alert("More Coin Required");
      toast.error("More coins required");
    } else {
      async function fetchData(value) {
        //put your session attribute here for different studnet to get different coins second argument i.e studnetid
        const response = await afterRedeem(value, id);
        setCoins(response.data.rewardspoint);
        console.log(response.data);
        toast.success(
          `${value} points has been redeemed and the parcel will be sent to you.Happy Learning!!!`
        );
        // alert(`${value} has been deducted`);
      }

      fetchData(event.target.value);
    }
  };
  return (
    <>
      <Navigationbar></Navigationbar>
      <div className="row ">
        <div className="col-lg-2 sidebar">
          <StudentSideNav></StudentSideNav>
        </div>
        <div className="col-lg-10">
          <div style={{ position: "absolute", left: "80%" }}>
            <img src={coin} alt="" />
            {coins}
          </div>

          <br />
          <Container className="mt-4 mb-4 text-center">
            <Alert variant="primary" className="alertBlock">
              <h2 style={{ color: "#007bff" }}>Rewards</h2>
            </Alert>
          </Container>
          <div class="cont">
            <Card style={{ width: "25rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                style={{ width: "15rem", height: "10rem" }}
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>Smart Watch</Card.Title>
                <Card.Text>
                  <h5>10000 Coins</h5>
                </Card.Text>
                <Button variant="primary" value="10000" onClick={redeem}>
                  Redeem Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                style={{ width: "15rem", height: "10rem" }}
                src="https://m.media-amazon.com/images/I/41oLKl-rukL._UX679_.jpg"
              />
              <Card.Body>
                <Card.Title>T-shirt</Card.Title>
                <Card.Text>
                  <h5>5000 Coins</h5>
                </Card.Text>
                <Button variant="primary" value="5000" onClick={redeem}>
                  Redeem Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", height: "22rem" }}>
              <Card.Img
                variant="top"
                style={{ width: "15rem", height: "10rem" }}
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>Diary</Card.Title>
                <Card.Text>
                  <h5>2000 Coins</h5>
                </Card.Text>
                <Button variant="primary" value="2000" onClick={redeem}>
                  Redeem Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
