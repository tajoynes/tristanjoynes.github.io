import React from "react";
import "./Main.css";
import {
  Tab,
  Row,
  Col,
  Nav,
  Card,
  Button,
  Container,
  Form,
  Img,
} from "react-bootstrap";
import CardText from "react-bootstrap/Card";
import imgone from "./images/demoimgone.jpg";
import imgtwo from "./images/demoimgtwo.jpg";
import imgthree from "./images/demoimgthree.jpg";
import imgfour from "./images/demoimgfour.jpg";
import imgfive from "./images/demoimgfive.jpg";

function Main() {
  return (
    <div className="">
      <section id="home">
        <Row className="home-content-wrapper">
          <Col className="home-content-info">
            <div className="text-center">
              <h2 className="home-content-header">Tristan Joynes</h2>
              <br></br>
              <p className="home-content-sub">Software Developer</p>
              <br></br>
              <div className=" btn-wrapper d-flex justify-content-around">
                <div className="contact-view-btn text-center">
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#6C91C2" }}
                    href="#contact"
                  >
                    Contact Me
                  </Button>
                </div>
                <div className="project-view-btn text-center">
                  <Button
                    className="btn"
                    style={{ backgroundColor: "#6C91C2" }}
                    href="#projects"
                  >
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section id="about">
        <Row className="about-content-wrapper">
          <Col></Col>
        </Row>
      </section>

      <section id="projects">
        <Container className="project-content-wrapper p-3" fluid>
          <Row className="mb-2 gap-2">
            <Col sm className="prjctcard main">
              <img
                src={imgone}
                style={{ height: "inherit", width: "inherit" }}
              />
            </Col>
            <Col sm className="prjctcard main">
              <img
                src={imgtwo}
                style={{ height: "inherit", width: "inherit" }}
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col className="prjctcard side d-none d-sm-block">
              <img
                src={imgthree}
                style={{ height: "inherit", width: "inherit" }}
              />
            </Col>
            <Col className="prjctcard side d-none d-sm-block">
              <img
                src={imgfour}
                style={{ height: "inherit", width: "inherit" }}
              />
            </Col>
            <Col className="prjctcard side d-none d-sm-block">
              <img
                src={imgfive}
                style={{ height: "inherit", width: "inherit" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="resume">
        <Row className="resume-content-wrapper">
          <Col xs style={{ backgroundColor: "#FFF" }}>
            <Container
              className="justify-content-center"
              style={{ border: "1px solid #000", height: "100%" }}
            >
              <div className="p-5">
                <h2 className="display-3">My Resume</h2>
                <hr />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <div className="resum-btn-wrapper d-flex gap-5">
                  <Button className="resume-btn">View resume</Button>
                  <Button className="resume-btn">Download resume</Button>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>

      <section id="contact">
        <Row className="contact-content-wrapper">
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </section>
    </div>
  );
}

export default Main;
