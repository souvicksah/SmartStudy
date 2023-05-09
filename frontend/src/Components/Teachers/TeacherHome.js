import "../../Css/Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "./Header.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Teachers/TeacherHome.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
function TeacherHome() {
  const navigate = useNavigate();
  useEffect(() => {
    let role = sessionStorage.getItem("role");
    // if(!role && role=="student"){
    if (role === "student" || role === "admin") {
      sessionStorage.clear();
      toast.error("Security alert!!! Logging you out");
      return navigate("/");
    }
  });
  return (
    <>
      <Header></Header>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" style={{ width: "100%" }}>
          <div className="carousel-item active">
            <img
              className="d-block w-100 c"
              src="https://cdn.pixabay.com/photo/2017/01/21/09/47/learn-1996845_1280.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 c"
              src="https://cdn.pixabay.com/photo/2021/04/29/16/48/webinar-6216973_1280.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 c"
              src="https://cdn.pixabay.com/photo/2023/02/09/18/42/podcast-7779510_1280.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
      <div>
        <h4>
          &nbsp; Comprehensive learning programs & classes for all students
          Become lifelong learners with India best teachers,
          <br />
          engaging video lessons and personalised learning journeys.
        </h4>
      </div>

      <br />
      <br />

      <div className="container-xl">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2>Popular Teachers</h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img
                      src="https://prod-c2i.s3.amazonaws.com/articles/15512560885c764a1840009.jpg"
                      alt="amit"
                    />
                  </div>
                  <p className="testimonial">
                    "Hello, I am a Amit with extensive experience in the IT
                    industry. I have spent over a decade working in various
                    roles such as software developer, project manager and IT
                    consultant. Through my career, I have gained valuable
                    insights that I enjoy sharing with my students."
                  </p>
                  <p className="overview">
                    <b>Amit Sharma</b>, Developer
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MbKliHmMtzdQB0SYrm7-s8cYD1XS4y28DQ&usqp=CAU"
                      alt="jyoti"
                    />
                  </div>
                  <p className="testimonial">
                    "Hello, I am a teacher with a background as a database
                    administrator in the IT industry. I have worked for several
                    large organizations and have experience in designing,
                    implementing and maintaining complex database systems. I
                    enjoy sharing my knowledge and expertise with my students to
                    prepare them for a career in this dynamic field."
                  </p>
                  <p className="overview">
                    <b>Jyoti Mishra</b>, Database Administrator
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F03NwHeAlYGv9IqNVO8AII5KXNQWrvw-JSlwM9ZwALLdwxCDZ-L1EPj55_s3W0LztYk&usqp=CAU"
                      alt="john"
                    />
                  </div>
                  <p className="testimonial">
                    "Hello, I am a data scientist turned teacher. With my
                    experience in the IT industry, I have worked on various
                    projects related to data mining, statistical modeling and
                    machine learning. As a teacher, I bring my industry
                    experience to the classroom to help my students learn the
                    latest techniques and tools used in the field of data
                    science.
                  </p>
                  <p className="overview">
                    <b>John Robert</b>, Data Scientist
                  </p>
                </div>

                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKEPmWTK1pMyj4bnifzo4LqXp44RcR7kaKA&usqp=CAU"
                      alt="priya"
                    />
                  </div>
                  <p className="testimonial">
                    "Hello, I am a teacher with a strong background in operating
                    system development in the IT industry. My experience
                    includes working on various operating system components such
                    as memory management, process scheduling, and file systems.
                    As a teacher, I bring this industry experience to the
                    classroom, helping my students learn the ins and outs of
                    operating system development."
                  </p>
                  <p className="overview">
                    <b>Priya Mehra</b>, Data Scientist
                  </p>
                </div>
              </div>
              {/* Carousel controls */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h2>Success Stories</h2>
      <br />

      <div className="">
        <div
          id="client-testimonial-carousel"
          className="carousel slide"
          data-ride="carousel"
          style={{ height: "200px" }}
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active text-center p-2">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left" /> It’s a good choice for her
                  because she enjoys learning about large systems that influence
                  an individual’s everyday life
                </p>
                <footer className="blockquote-footer">Sumit Patil </footer>
                {/* Client review stars */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <i className="far fa-star" />
                </p>
              </blockquote>
            </div>

            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left" />
                  Ruhan was never able to attend college—obligations to his
                  family prevented that. He had no technical background, and no
                  formal degree.
                </p>
                <footer className="blockquote-footer">Ruhan Khandaker</footer>
                {/* Client review stars */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">
                  <i className="fa fa-quote-left" />
                  Piyush always knew he wanted to be a coder, but it seemed an
                  unlikely goal. His father worked in a local garment shop as a
                  salesman, making just enough to feed the family.
                </p>
                <footer className="blockquote-footer">Piyush Kant Maav</footer>
                {/* Client review stars */}
                {/* "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. */}
                <p className="client-review-stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </p>
              </blockquote>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#client-testimonial-carousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#client-testimonial-carousel" data-slide-to={1} />
            <li data-target="#client-testimonial-carousel" data-slide-to={2} />
          </ol>
        </div>
      </div>
    </>
  );
}

export default TeacherHome;
