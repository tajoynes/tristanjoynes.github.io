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
  Stack,
} from "react-bootstrap";
import imgone from "./images/demoimgone.jpg";
import imgtwo from "./images/demoimgtwo.jpg";
import imgthree from "./images/demoimgthree.jpg";
import imgfour from "./images/demoimgfour.jpg";
import imgfive from "./images/demoimgfive.jpg";
import {
  AiOutlineMail,
  AiOutlineArrowDown,
  AiOutlineEye,
  AiOutlineDownload,
} from "react-icons/ai";

function Main() {
  return (
    <div className="">
      <section id="banner">
        <div className="banner-content-wrapper">
          <Row className="justify-content-center">
            <Col className="home-content-info p-5">
              <div className="text-center p-5">
                <h4 className="home-content-header">Hi, my name is Tristan</h4>
                <br></br>
                <hr
                  style={{
                    height: "2px",
                    opacity: "1",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                />
                <p className="home-content-sub">I am a Software Developer</p>
                <p className="home-content-sub">Fitness Enthusiast</p>
                <p className="home-content-sub">and a dog dad </p>
                <br></br>
                <div className="btn-wrappe justify-content-around d-none d-md-flex">
                  <div className="text-center">
                    <Button className="contact-view-btn btn" href="#contact">
                      Contact Me
                      <AiOutlineMail
                        size={20}
                        style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                      />
                    </Button>
                  </div>
                  <div className=" text-center">
                    <Button className="project-view-btn btn" href="#projects">
                      View Projects
                      <AiOutlineArrowDown
                        size={20}
                        style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="about">
        <Row className="about-content-wrapper">
          <Col></Col>
        </Row>
      </section>

      <section id="projects" className="project-header-wrapper">
        <Row className="text-center p-4">
          <Col>
            <h3>Some thing's I've worked on...</h3>
          </Col>
        </Row>
      </section>

      <section>
        <div className="project-content-wrapper d-block px-5 py-3">
          <Row>
            <Col className="mb-2">
              <hr
                style={{
                  backgroundColor: "#082D0F",
                  height: "5px",
                  opacity: "1",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              />
            </Col>
          </Row>
          <Row className="gap-3 mb-2">
            <Col sm className="prjctcard main">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
            <Col sm className="prjctcard main">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-none d-sm-block mb-2">
            <Col className="prjctcard main">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="d-none d-sm-block">
            <Col className="prjctcard main">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="">
              <hr
                style={{
                  backgroundColor: "#082D0F",
                  height: "5px",
                  opacity: "1",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section id="resume">
        <Row className="resume-content-wrapper ps-2 pe-2">
          <Col xs className="">
            <Container
              className=""
              style={{
                border: "1px solid #17B890",
                height: "100%",
                position: "relative",
              }}
              fluid
            >
              <div className="mt-4 mb-4">
                <h2 className="resume-header display-6 text-center text-nowrap">
                  Experiences
                </h2>
                <hr
                  style={{
                    backgroundColor: "#17B890",
                    height: "5px",
                    opacity: "1",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                />
                <Card className="" style={{ height: "100%", width: "100%" }}>
                  <img src={imgone} height="100%" width="auto" />
                </Card>
                <div className="resume-btn-wrapper d-flex justify-content-evenly">
                  <Button className="resume-btn text-nowrap">
                    View resume{" "}
                    <AiOutlineEye
                      size={20}
                      style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                    />
                  </Button>
                  <Button className="resume-btn text-nowrap">
                    Download resume{" "}
                    <AiOutlineDownload
                      size={20}
                      style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                    />
                  </Button>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>

      <section id="contact">
        <Row className="contact-content-wrapper">
          <Col className="contact-form-wrapper p-5">
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
