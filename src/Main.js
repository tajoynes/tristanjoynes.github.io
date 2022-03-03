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
  Navbar,
  NavbarBrand,
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
  AiFillMail,
  AiFillEnvironment,
} from "react-icons/ai";
import { IconContext } from "react-icons";

function Main() {
  return (
    <div>
      {/* --------------------------> Banner/Nav <-------------------------- */}
      <section id="banner">
        <div className="banner-content-wrapper">
          <Row className="banner-row justify-content-center">
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
      {/* --------------------------> About <-------------------------- */}
      <section id="about">
        <Row className="about-content-wrapper">
          <Col></Col>
        </Row>
      </section>
      {/* --------------------------> Project <-------------------------- */}
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
                  backgroundColor: "#17B890",
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
                  backgroundColor: "#17B890",
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
      {/* --------------------------> Resume <-------------------------- */}
      <section id="resume">
        <Row className="resume-content-wrapper ps-2 pe-2">
          <Col xs className="">
            <Container
              className=""
              style={{
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
                <div className="pe-5 ps-5">
                  <Row className="d-flex gap-5">
                    <Col sm className="resume-content d-none d-md-block">
                      <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                        <IconContext.Provider
                          value={{ className: "resume-icons" }}
                        >
                          <button className="resume-btn text-nowrap py-2 px-5 d-none d-md-block">
                            View resume{" "}
                            <AiOutlineEye
                              size={20}
                              style={{
                                marginBottom: "2.5px",
                                marginLeft: "8px",
                              }}
                            />
                          </button>
                        </IconContext.Provider>
                      </div>
                    </Col>
                    <Col sm className="resume-content">
                      <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                        <IconContext.Provider
                          value={{ className: "resume-icons" }}
                        >
                          <button className="resume-btn text-nowrap py-2 px-5">
                            Download resume{" "}
                            <AiOutlineDownload
                              size={20}
                              style={{
                                marginBottom: "2.5px",
                                marginLeft: "8px",
                              }}
                            />
                          </button>
                        </IconContext.Provider>
                      </div>
                    </Col>
                  </Row>
                </div>
                <hr
                  style={{
                    backgroundColor: "#17B890",
                    height: "2px",
                    opacity: "1",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                />
              </div>
            </Container>
          </Col>
        </Row>
      </section>
      {/* --------------------------> Contact <-------------------------- */}
      <section id="contact">
        <Container className="contact-content-wrapper pt-5" fluid>
          <Row className="">
            <Col>
              <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                <p className="contact-header text-nowrap py-2 px-5">
                  Get In Touch
                </p>
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
          <Row className="contact-form-wrapper">
            <Col className="contact-form-col d-none d-md-block">
              <IconContext.Provider value={{ size: "1.4rem" }}>
                <Row className="contact-form-row">
                  <Col className="contact-card d-flex justify-content-center py-4">
                    <AiFillPhone
                      style={{
                        color: "#FFF",
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <p className="contact-card-header">
                      <span>Contact Me:</span>
                      <br></br>
                      <span className="contact-sub">+1 (901) 496-7584</span>
                    </p>
                  </Col>
                </Row>
                <Row className="contact-form-row">
                  <Col className="contact-card d-flex justify-content-center py-4">
                    <AiFillMail
                      style={{
                        color: "#FFF",
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <p className="contact-card-header">
                      <span>Email Address</span>
                      <br></br>
                      <span className="contact-sub">tajoynes@gmail.com</span>
                    </p>
                  </Col>
                </Row>
                <Row className="contact-form-row">
                  <Col className="contact-card d-flex justify-content-center py-4">
                    <AiFillEnvironment
                      style={{
                        color: "#FFF",
                        marginTop: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <p className="contact-card-header">
                      <span>Location</span>
                      <br></br>
                      <span className="contact-sub">Houston, TX</span>
                    </p>
                  </Col>
                </Row>
              </IconContext.Provider>
            </Col>
            <Col className="py-3 px-4">
              <Form>
                <Row className="mt-3 mb-3">
                  <Form.Group as={Col} controlId="formBasicText">
                    <Form.Label className="contactlabel">Name</Form.Label>
                    <Form.Control
                      type="text"
                      style={{
                        color: "#FFF",
                        backgroundColor: "#1f1e38",
                        border: "0.25px solid #1f1e38",
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label className="contactlabel">Email</Form.Label>
                    <Form.Control
                      type="email"
                      style={{
                        color: "#FFF",
                        backgroundColor: "#1f1e38",
                        border: "0.25px solid #1f1e38",
                      }}
                    />
                  </Form.Group>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="contactlabel">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    style={{
                      color: "#FFF",
                      backgroundColor: "#1f1e38",
                      border: "0.25px solid #1f1e38",
                    }}
                  />
                </Form.Group>
                <div className="d-flex justify-content-evenly">
                  <button
                    className="form-send-btn text-nowrap py-2 px-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                  <button
                    className="form-clr-btn text-nowrap py-2 px-3"
                    type="submit"
                  >
                    Clear
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="copyright-text text-center">
                Copyright © 2020 All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Main;
