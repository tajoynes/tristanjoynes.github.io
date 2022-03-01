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
  Figure,
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
        <Row className="banner-content-wrapper">
          <Col className="home-content-info">
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
              <div className=" btn-wrapper d-flex justify-content-around">
                <div className=" text-center">
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
      </section>

      <section id="about">
        <Row className="about-content-wrapper">
          <Col></Col>
        </Row>
      </section>

      <section id="projects">
        <div className="project-content-wrapper d-block pt-5 ps-5 pe-5">
          <div className="project-heading justify-content-center text-center mb-2">
            <h4>Projects</h4>
          </div>
          <Row className="gap-3 mb-2">
            <Col xs className="prjctcard main">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
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
          <Row className="mb-2">
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
        </div>
      </section>

      <section id="resume">
        <Row className="resume-content-wrapper p-5">
          <Col xs>
            <Container
              className="justify-content-center"
              style={{
                border: "1px solid #000",
                height: "100%",
                position: "relative",
              }}
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
                <Figure>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={imgone}
                    style={{ position: "absolute", top: "50px", right: "10px" }}
                  />
                </Figure>
                <div className="resum-btn-wrapper d-flex justify-content-center gap-5">
                  <Button className="resume-btn">
                    View resume{" "}
                    <AiOutlineEye
                      size={20}
                      style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                    />
                  </Button>
                  <Button className="resume-btn">
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
