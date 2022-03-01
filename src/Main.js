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
import imgone from "./images/demoimgone.jpg";
import imgtwo from "./images/demoimgtwo.jpg";
import imgthree from "./images/demoimgthree.jpg";
import imgfour from "./images/demoimgfour.jpg";
import imgfive from "./images/demoimgfive.jpg";
import { AiOutlineMail, AiOutlineArrowDown } from 'react-icons/ai'

function Main() {
  return (
    <div className="">
      <section id="banner">
        <Row className="banner-content-wrapper">
          <Col className="home-content-info">
            <div className="text-center p-5">
              <h4 className="home-content-header">Hi, my name is Tristan</h4>
              <br></br>
              <hr style={{height: "2px", opacity:"1", marginLeft:"20px",marginRight: "20px"}} />
              <p className="home-content-sub">I am a Software Developer</p>
              <p className="home-content-sub">Fitness Enthusiast</p>
              <p className="home-content-sub">and a dog dad </p>
              <br></br>
              <div className=" btn-wrapper d-flex justify-content-around">
                <div className=" text-center">
                  <Button
                    className="contact-view-btn btn"
                    href="#contact"
                  >
                    Contact Me
                    < AiOutlineMail size={20} style={{marginBottom: "2.5px", marginLeft:"8px"}} />
                  </Button>
                </div>
                <div className=" text-center">
                  <Button
                    className="project-view-btn btn"
                    href="#projects"
                  >
                    View Projects
                    < AiOutlineArrowDown size={20} style={{marginBottom: "2.5px", marginLeft:"8px"}} />
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
        <Container className="project-content-wrapper p-5" fluid>
          <Row className="gap-3">
            <Col className="prjctcard main" style={{height: "300px", width: "auto", border: "1px solid yellow"}} >

            </Col>
            <Col className="prjctcard main" style={{height: "300px", width: "auto", border: "1px solid yellow"}}>
            </Col>
          </Row>
          <Row className="justify-content-center gap-2">
            <Col className="prjctcard side" style={{height: "400px", width: "auto", border: "1px solid yellow"}}>
             
            </Col>
            <Col className="prjctcard side" style={{height: "400px", width: "auto", border: "1px solid yellow"}}>
   
            </Col>
            <Col className="prjctcard side" style={{height: "400px", width: "auto", border: "1px solid yellow"}}>

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
