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
  AiFillForward,
  AiFillPhone,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { IconContext } from "react-icons";

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
                <div className="btn-wrapper justify-content-around d-none d-md-flex">
                  <IconContext.Provider value={{ className: "banner-icons" }}>
                    <div className="text-center">
                      <a href="#contact">
                        <button className="contact-view-btn py-2 px-5">
                          Contact Me
                          <AiOutlineMail
                            size={24}
                            style={{ marginBottom: "3px", marginLeft: "8px" }}
                          />
                        </button>
                      </a>
                    </div>
                    <div className=" text-center">
                      <a href="#projects">
                        <button className="project-view-btn py-2 px-5">
                          View Projects
                          <AiOutlineArrowDown
                            size={24}
                            style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                          />
                        </button>
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="readmore-btn-wrapper d-md-none">
                  <IconContext.Provider value={{ className: "banner-icons" }}>
                    <div className="text-center">
                      <a href="#about">
                        <button className="contact-view-btn py-2 px-5">
                          Read More
                          <AiFillForward
                            size={25}
                            style={{
                              marginBottom: "2.5px",
                              marginLeft: "20px",
                            }}
                          />
                        </button>
                      </a>
                    </div>
                  </IconContext.Provider>
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
                borderRadius: "5px",
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
                  <img src={imgone} height="auto" width="auto" />
                </Card>
                <hr
                  style={{
                    backgroundColor: "#17B890",
                    height: "2px",
                    opacity: "1",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                />
                <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                  <IconContext.Provider value={{ className: "resume-icons" }}>
                    <button className="resume-btn text-nowrap p-2">
                      View resume{" "}
                      <AiOutlineEye
                        size={20}
                        style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                      />
                    </button>
                    <button className="resume-btn text-nowrap">
                      Download resume{" "}
                      <AiOutlineDownload
                        size={20}
                        style={{ marginBottom: "2.5px", marginLeft: "8px" }}
                      />
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </section>

      <section id="contact">
        <Container className="contact-content-wrapper pt-5" fluid>
          <Row className="">
            <Col>
              <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                <button className="resume-btn text-nowrap p-2">
                  Get In Touch
                </button>
              </div>
              <hr
                style={{
                  backgroundColor: "#17B890",
                  height: "2px",
                  opacity: "1",
                  marginLeft: "30%",
                  marginRight: "30%",
                }}
              />
              <p className="px-5 text-center">
                Lorem ipsum dolor sit amet, consect adipisic elit, sed do
                eiusmod tempor incididunt ut labore et d magna aliqua enim sed
                do sit.
              </p>
            </Col>
          </Row>
          <Row className="pb-5">
            <Col className="contact-form-wrapper pt-5 d-none d-md-block">
              <Card>
                <AiFillPhone />
                Contact Me:<br></br> +1 (901) 496-7584
              </Card>
              <Card>
                <AiOutlineMail />
                Email Address<br></br>tajoynes@gmail.com
              </Card>
              <Card>
                <AiOutlineEnvironment />
                Location<br></br>Houston, TX
              </Card>
            </Col>
            <Col>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Email" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Phone" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Subject" />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control placeholder="Message" as="textarea" rows={3} />
                </Form.Group>
                <Row className="mb-3"></Row>
                <button className="resume-btn text-nowrap p-2" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>
          </Row>
          <p className="text-center">Copyright © 2020 All Rights Reserved.</p>
        </Container>
      </section>
    </div>
  );
}

export default Main;
