import React from "react";


import {
  MDBBtn,
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
     

      <div>
        <a
          href="https://support.spotify.com/us/article/facebook-login-help/"
          className="me-4 text-reset"
        >
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a
          href="https://twitter.com/Spotify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className="me-4 text-reset"
        >
          <MDBIcon fab icon="twitter" />
        </a>
        <a
          href="https://support.spotify.com/us/article/google-login-help/"
          className="me-4 text-reset"
        >
          <MDBIcon fab icon="google" />
        </a>
        <a
          href="https://www.instagram.com/spotify/"
          className="me-4 text-reset"
        >
          <MDBIcon fab icon="instagram" />
        </a>
      </div>
    </section>

    <section className="">
      <MDBContainer className="text-center text-md-start mt-5">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="gem" className="me-3" />
              SmartStudy App
            </h6>
            <p>Enjoy the best learning experience you have ever gathered</p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="fw-bold mb-4">Services We offer</h6>
            <p>
              <a href="#!" className="text-reset text-dark">
                Course Content
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-dark">
                Courses
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-dark">
                Assignments Assessments
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset text-dark">
                Internship Opportunities
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a
                href="https://www.spotify.com/us/about-us/contact/"
                className="text-reset text-dark"
              >
                About us
              </a>
            </p>
            <p>
              <a
                href="https://www.spotify.com/us/legal/privacy-policy/"
                className="text-reset text-dark"
              >
                Privacy Policy
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/Spotify/"
                className="text-reset text-dark"
              >
                Connect us over facebook
              </a>
            </p>
            <p>
              <a
                href="https://support.spotify.com/us/"
                className="text-reset text-dark"
              >
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Mumbai,India
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              SmartStudy@36
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 91 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 91 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
        <MDBIcon fab icon='facebook-f' size="md"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
        <MDBIcon fab icon='twitter' size="md"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
        <MDBIcon fab icon='google' size="md"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
        <MDBIcon fab icon='linkedin-in' size="md"/>
      </MDBBtn>

    </div>

  </div>

  </MDBFooter>
  );
}
