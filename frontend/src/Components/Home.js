import "../Css/Home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home() {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img className="d-block w-100 c" src="https://cdn.pixabay.com/photo/2017/01/21/09/47/learn-1996845_1280.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 c" src="https://cdn.pixabay.com/photo/2021/04/29/16/48/webinar-6216973_1280.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 c" src="https://cdn.pixabay.com/photo/2023/02/09/18/42/podcast-7779510_1280.png" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>


</div>
<br />
<div>
    <h4>Comprehensive learning programs
    & classes for all students
    
    Become lifelong learners with India best teachers,
    engaging video lessons and personalised learning journeys
    </h4>
</div>
<br />
<br />
<h2>Popular Teachers</h2>
<br />
<div class="cont">

      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://prod-c2i.s3.amazonaws.com/articles/15512560885c764a1840009.jpg" />
      <Card.Body>
        <Card.Title>Amit Sharma</Card.Title>
        <Card.Text>
        Data Structure And Algorithm
        Professor <br /> Department of Computer Science
        <br />
         17+ yrs teaching experience
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MbKliHmMtzdQB0SYrm7-s8cYD1XS4y28DQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>Jyoti Mishra</Card.Title>
        <Card.Text>
        Operating System
        Professor <br /> Department of Computer Science <br />
        8+ yrs teaching experience
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3F03NwHeAlYGv9IqNVO8AII5KXNQWrvw-JSlwM9ZwALLdwxCDZ-L1EPj55_s3W0LztYk&usqp=CAU" />
      <Card.Body>
        <Card.Title>John Robert</Card.Title>
        <Card.Text>
          C/C++
          Professor <br /> Department of Computer Science <br />
          12+ yrs teaching experience
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

  </div>
  <br />
<div class="cont">


      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKEPmWTK1pMyj4bnifzo4LqXp44RcR7kaKA&usqp=CAU" />
      <Card.Body>
        <Card.Title>Priya Mehra</Card.Title>
        <Card.Text>
        Databases
        Professor <br /> Department of Computer Science <br />
        10+ yrs teaching experience
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6I1KAKN5TBRw0VJo-CmyUIR7YjKi-_nPU_F8Cpcg25l2HRDjilYA2pw-0qB8lVMdf6KE&usqp=CAU" />
      <Card.Body>
        <Card.Title>Aadhar Rathor</Card.Title>
        <Card.Text>
        Software Engineering
        Professor <br /> Department of Computer Science <br />
        15+ yrs teaching experience
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  <br />
  <br />
<br />
<h2>Success Stories</h2>
<br />
<div class="cont">


      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Sumit Patil</Card.Title>
        <Card.Text>
        It’s a good choice for her because she enjoys learning about large systems that influence an individual’s everyday life
        </Card.Text>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Ruhan Khandaker </Card.Title>
        <Card.Text>
        Ruhan was never able to attend college—obligations to his family prevented that. He had no technical background, and no formal degree.
        </Card.Text>
     
      </Card.Body>
    </Card>
      <Card style={{ width: '25rem', height:'22rem'}}>
      <Card.Img variant="top" style={{ width:'15rem',height: '10rem' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbmaMVQf5-WYOFXJmLTgQXhl1aXnbnR63zA&usqp=CAU" />
      <Card.Body>
        <Card.Title>Piyush Kant Maav</Card.Title>
        <Card.Text>
        Piyush always knew he wanted to be a coder, but it seemed an unlikely goal. His father worked in a local garment shop as a salesman, making just enough to feed the family.
        </Card.Text>
     
      </Card.Body>
      </Card>
  </div>
</>
  );
}

export default Home;