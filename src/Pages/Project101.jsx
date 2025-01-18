import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Project101.css"; // Import custom CSS for additional styling
import pip from "../Images/pip.jpg";
function Project101() {
  return (
    <div className="gaming-background">
      <Container className="content-container" style={{ marginBottom: "20px" }}>
        <h2 className="gaming-heading"> PiP 1o1 </h2>
        <h4 className="gaming-subheading">Project Development Program</h4>
        <p className="gaming-text">
          Are you passionate about using technology for social good? Do you want
          to learn about IoT and machine learning, and apply your skills to make
          a difference in the world? If so, you should join PiP 1o1, a
          project development program based on project-based learning.
        </p>
        <Row className="content-row">
          <Col>
            <img className="project-image" src={pip} alt="" />
          </Col>
          <Col>
            <h3 className="gaming-subheading">Description:</h3>
            <p className="gaming-text">
              In PiP 1o1, you will have the opportunity to choose from a
              range of exciting project themes, including AI for accessibility,
              IoT for sustainability, environment conservation, and more. You
              will work in teams to develop your own project, using the latest
              technologies and techniques in IoT and machine learning.
              Throughout the program, you will be supported by experienced
              mentors and instructors who will guide you through the project
              development process, from idea to reality. You will also have
              access to a range of resources and tools, including IoT devices
              and machine learning platforms, to help you bring your project to
              life. In addition to the project development phase, our PiP
              1o1 also includes research work and patent support. Our dedicated
              team with research experience will help you to undertake research
              papers, and we will guide you through the process of obtaining a
              patent for your invention, so that you can secure exclusive rights
              to your invention.
            </p>
          </Col>
        </Row>
        <div className="additional-info">
          <h2 className="gaming-subheading">Themes</h2>
          <ul className="theme-list">
            <li>AI for Accessibility</li>
            <li>IoT for Sustainability</li>
            <li>Environmental Conservation</li>
            <li>Social Cause</li>
            <li>Corporate Social Responsibility</li>
            <li>Devices for Mobility Disabilities</li>
          </ul>

          <div className="gaming-textOne row">
            {" "}
            <Col>
              <h3 className="gaming-subheading " style={{ textAlign: "left" }} >
                Open along the year{" "}
              </h3>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <a href="https://forms.office.com/pages/responsepage.aspx?id=o835AF4H5USqC6ujrdZTnzqAsQRWelxHktGudCoGdcVURUpPTEEyTFEwR1kxVk81MDIzSkZDR0ZCRi4u&route=shorturl" target="main">
                <button
                  className="btn btn-outline-warning"
                  style={{ height: "60px", margin: "auto", width: "400px" }}
                >
                  Register your idea now
                </button>
              </a>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project101;
