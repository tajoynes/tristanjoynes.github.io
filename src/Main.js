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
  Stack,
} from "react-bootstrap";
import reactlogo from "./images/reactlogo.png";
import nodejs from "./images/nodejs.png";
import techstack from "./images/techstackone.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
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
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { IconContext } from "react-icons";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  FadeOut,
  StickyOut,
  Zoom,
} from "react-scroll-motion";
import pdf from "./files/Resume.pdf";

const FadeUp = batch(Fade(), MoveOut(0, -200));

function Main() {
  return (
    <div>
      {/* --------------------------> Banner/Nav <-------------------------- */}
      <section id="home">
        {/* Scroll Animation */}
        <ScrollContainer snap="mandatory">
          <ScrollPage page={0}>
            <Animator animation={FadeUp}>
              <div className="banner-content-wrapper">
                <Row className="banner-row justify-content-center">
                  <Col className="home-content-info p-5">
                    <div className="text-center p-5">
                      <h4 className="home-content-header">
                        <span className="firstname">Tristan</span>
                        <span className="lastname">Joynes</span>
                      </h4>
                      <br></br>
                      <hr
                        style={{
                          height: "2px",
                          opacity: "1",
                          marginLeft: "20px",
                          marginRight: "20px",
                          color: "#FFF",
                        }}
                      />
                      <p className="home-content-sub">
                        {" "}
                        Full-Stack Software Developer
                      </p>
                      <br></br>
                      <div className="btn-wrapper justify-content-around d-none d-md-flex">
                        <IconContext.Provider
                          value={{ className: "banner-icons" }}
                        >
                          <div className="text-center">
                            <a href="#contact">
                              <button className="contact-view-btn py-2 px-5">
                                Contact Me
                                <AiOutlineMail
                                  size={24}
                                  style={{
                                    marginBottom: "3px",
                                    marginLeft: "8px",
                                  }}
                                />
                              </button>
                            </a>
                          </div>
                          <div className=" text-center">
                            <a href="#projects">
                              <button className="project-view-btn py-2 px-5">
                                View My Work
                                <AiOutlineArrowDown
                                  size={24}
                                  style={{
                                    marginBottom: "2.5px",
                                    marginLeft: "8px",
                                  }}
                                />
                              </button>
                            </a>
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className="readmore-btn-wrapper d-md-none">
                        <IconContext.Provider
                          value={{ className: "banner-icons" }}
                        >
                          <div className="text-center">
                            <a href="#about">
                              <button className="contact-view-btn py-2 px-5">
                                Next
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
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </section>

      {/* --------------------------> About <-------------------------- */}
      <section id="seperator-space" className="pb-5">
        <div></div>
      </section>
      <section id="about" className="pt-4">
        {/* Scroll Animation */}
        <ScrollContainer snap="mandatory">
          <ScrollPage page={1}>
            <Animator animation={Fade()}>
              <hr
                style={{
                  backgroundColor: "#FFF",
                  height: "5px",
                  opacity: "1",
                  marginLeft: "30%",
                  marginRight: "30%",
                }}
              />
              <Row>
                <Col className="text-center">
                  <h3
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#17B890",
                      fontSize: "3.8vw",
                    }}
                  >
                    Here's A Little About Me
                  </h3>
                </Col>
              </Row>
              <Row className="about-content-wrapper">
                <Col className="ps-5 pe-5 pt-5">
                  <p className="about-text">
                    Hello! My name is Tristan a native from a little small
                    island called Bermuda. I began a my quest into learning
                    software development August 2021. <br></br>
                    <br></br>
                    Taking my first web development course on{" "}
                    <span className="highlighter">Udemy</span> , expanding into
                    CodeAcademy and other tutorials to understand the basics..{" "}
                    <br></br>
                    <br></br>
                    Fast-forward to today, I’ve had the privilege and
                    opportunity to solidify my knowledge through{" "}
                    <span className="highlighter">Nucamp's</span>
                    Full-Stack coding bootcamp course developing a web
                    application with HTML, CSS and JavaScript utilizing the
                    Bootstrap toolkit.<br></br>
                    <br></br>
                    From there I've progressed to using javascript libraries
                    such as{" "}
                    <span className="highlighter">
                      React.js, React Native and Node.js
                    </span>{" "}
                    for both course and personal projects!
                  </p>
                  <div className="readmore-btn-wrapper">
                    <IconContext.Provider value={{ className: "banner-icons" }}>
                      <div className="text-center">
                        <a href="#projects">
                          <button className="contact-view-btn py-2 px-5">
                            Next
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
                </Col>
                <Col className="d-none d-md-block ">
                  <div className="d-flex justify-content-evenly">
                    <img src={techstack} height="200" width="300" />
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <img src={reactlogo} height="100" width="100" />
                    <img src={nodejs} height="100" width="100" />
                  </div>
                </Col>
              </Row>
              <Row className="professionallinks">
                <Col>
                  <div className="d-flex justify-content-center gap-3">
                    <Card
                      className="professionallinkcards"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <Card.Body>
                        <a href="https://github.com/tajoynes" target="_blank">
                          <Card.Img src={github} />
                        </a>
                      </Card.Body>
                    </Card>
                    <Card
                      className="professionallinkcards"
                      style={{
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      <Card.Body>
                        <a
                          href="https://www.linkedin.com/in/tristan-joynes/"
                          target="_blank"
                        >
                          <Card.Img src={linkedin} />
                        </a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </section>
      {/* --------------------------> Section End <-------------------------- */}
      {/* --------------------------> Project <-------------------------- */}
      <section id="projects">
        <div className="project-content-wrapper d-block py-3">
          {/* Scroll Animation */}
          <ScrollContainer snap="mandatory">
            <ScrollPage page={2}>
              <Animator animation={Fade()}>
                <Row className="mt-5">
                  <Col className="text-center mb-2">
                    <h2 className="project-header">Projects</h2>
                  </Col>
                </Row>
                <Row className="gap-3 mb-2 px-4">
                  <Col sm className="prjctcard main">
                    <div className="prjct-wrapper">
                      <h5 className="prjct-heading">Project 1 Name</h5>
                      <p className="prjct-desc">
                        Description, This project was built using HTML,
                        JavaScript, CSS.
                      </p>
                    </div>
                  </Col>
                  <Col sm className="prjctcard main">
                    <div className="prjct-wrapper">
                      <h5 className="prjct-heading">Project 1 Name</h5>
                      <p className="prjct-desc">
                        Description, This project was built using HTML,
                        JavaScript, CSS.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="gap-3 mb-2 px-4">
                  <Col sm className="prjctcard main d-none d-sm-block">
                    <div className="prjct-wrapper">
                      <h5 className="prjct-heading">Project 1 Name</h5>
                      <p className="prjct-desc">
                        Description, This project was built using HTML,
                        JavaScript, CSS.
                      </p>
                    </div>
                  </Col>
                  <Col sm className="prjctcard main d-none d-md-block">
                    <div className="prjct-wrapper">
                      <h5 className="prjct-heading">Project 1 Name</h5>
                      <p className="prjct-desc">
                        Description, This project was built using HTML,
                        JavaScript, CSS.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-3 pb-5">
                  <Col className="">
                    <div className="readmore-btn-wrapper">
                      <IconContext.Provider
                        value={{ className: "banner-icons" }}
                      >
                        <div className="text-center">
                          <a href="#resume">
                            <button className="contact-view-btn py-2 px-5">
                              Next
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
                  </Col>
                </Row>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        </div>
      </section>
      {/* --------------------------> End Project  Section<-------------------------- */}

      {/* --------------------------> Resume  Section<-------------------------- */}
      <section id="resume">
        {/* Scroll Animation */}
        <ScrollContainer snap="mandatory">
          <ScrollPage page={3}>
            <Animator animation={Fade()}>
              <Row className="resume-content-wrapper ps-2 pe-2">
                <Col xs className="">
                  <Container
                    className=""
                    style={{
                      height: "100%",
                      position: "relative",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="mt-4 mb-4">
                      <h2
                        className="resume-header text-center mt-5"
                        style={{
                          WebkitTextStrokeWidth: "1px",
                          WebkitTextStrokeColor: "#17B890",
                          fontSize: "3.8vw",
                        }}
                      >
                        Experience / Education
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
                      <Row>
                        <Col>
                          <div>
                            <Tab.Container defaultActiveKey="first" transition>
                              <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                  <Nav className="d-flex justify-content-center">
                                    <Nav.Item className="resumedatelink">
                                      <Nav.Link
                                        className="date"
                                        eventKey="first"
                                      >
                                        2022-2021
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="resumedatelink">
                                      <Nav.Link
                                        className="date"
                                        eventKey="second"
                                      >
                                        2020-2019
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="resumedatelink">
                                      <Nav.Link
                                        className="date"
                                        eventKey="third"
                                      >
                                        2018-2017
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                              </Row>
                              <Row className="d-flex flex-row">
                                <Col md={{ span: 6 }}>
                                  <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                      <Card className="card resumecard">
                                        <p>
                                          24 Hr Fitness <br></br>
                                          <span className="highlighter">
                                            Personal Trainer
                                          </span>
                                        </p>
                                        <ul className="resumejob">
                                          <li>
                                            Creating, compreshensive, customized
                                            and detailed training programs based
                                            on clients goasl and needs{" "}
                                          </li>
                                          <li>
                                            Conducted assessments to determine
                                            clients current level of fitness
                                          </li>
                                        </ul>
                                      </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                      <Card className="card resumecard">
                                        <p>
                                          24 Hr Fitness <br></br>
                                          <span className="highlighter">
                                            Personal Trainer
                                          </span>
                                        </p>
                                        <ul className="resumejob">
                                          <li>
                                            Creating, compreshensive, customized
                                            and detailed training programs based
                                            on clients goasl and needs{" "}
                                          </li>
                                          <li>
                                            Conducted assessments to determine
                                            clients current level of fitness
                                          </li>
                                        </ul>
                                        <p>
                                          Northwestern State Univ. <br></br>
                                          <span className="highlighter">
                                            Graduate Asst.
                                          </span>
                                        </p>
                                        <ul className="resumejob">
                                          <li>
                                            Creating, compreshensive, customized
                                            and detailed training programs based
                                            on clients goasl and needs{" "}
                                          </li>
                                          <li>
                                            Conducted assessments to determine
                                            clients current level of fitness
                                          </li>
                                        </ul>
                                      </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <Card className="card resumecard">
                                        <p>
                                          Northwestern State Univ. <br></br>
                                          <span className="highlighter">
                                            Graduate Asst.
                                          </span>
                                        </p>
                                        <ul className="resumejob">
                                          <li>
                                            Responsible for teaching first year
                                            college courses in the Health and
                                            Human Performance degree field. Also
                                            develop, instruct and manage college
                                            athletic programs based on their
                                            respective sports.
                                          </li>
                                        </ul>
                                        <p>
                                          Sun Coast Resources <br></br>
                                          <span className="highlighter">
                                            Intern
                                          </span>
                                        </p>
                                        <ul className="resumejob">
                                          <li>
                                            Corporate Wellness intern, assisting
                                            in program design and adherance.
                                            Ensure that facility maintained
                                            above 70% utilization by company
                                            employees.{" "}
                                          </li>
                                        </ul>
                                      </Card>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                                <Col
                                  className="d-none d-md-block"
                                  md={{ span: 6 }}
                                >
                                  <Stack className="mt-3 gap-3">
                                    <Card className="card resumecard">
                                      <p className="d-flex flex-column ps-5 pe-5 gap-2">
                                        Northwestern State Univ. <br></br>
                                        <span className="highlighter">
                                          MS, Sport Administraion
                                        </span>
                                        <span className="highlighter">
                                          Graduate Degree Program
                                        </span>
                                        2012- 2014
                                      </p>
                                    </Card>
                                    <Card className="card resumecard ">
                                      <p className="d-flex flex-column ps-5 pe-5 gap-2">
                                        McNeese State Univ. <br></br>
                                        <span className="highlighter">
                                          BS, Health & Human Performance
                                        </span>
                                        <span className="highlighter">
                                          Bachelor's degree Program
                                        </span>
                                        2017- 2019
                                      </p>
                                    </Card>
                                  </Stack>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </Col>
                      </Row>
                      <div className="pe-5 ps-5">
                        <Row className="d-flex gap-5">
                          <Col sm className="resume-content d-none d-md-block">
                            <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                              <IconContext.Provider
                                value={{ className: "resume-icons" }}
                              >
                                <a href={pdf} target="_blank">
                                  <button className="resume-btn text-nowrap py-2 px-5 d-none d-sm-block">
                                    View resume{" "}
                                    <AiOutlineEye
                                      size={20}
                                      style={{
                                        marginBottom: "2.5px",
                                        marginLeft: "8px",
                                      }}
                                    />
                                  </button>
                                </a>
                              </IconContext.Provider>
                            </div>
                          </Col>
                          <Col sm className="resume-content">
                            <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                              <IconContext.Provider
                                value={{ className: "resume-icons" }}
                              >
                                <a href={pdf} download={pdf}>
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
                                </a>
                              </IconContext.Provider>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Container>
                </Col>
              </Row>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </section>
      {/* --------------------------> End Resume Section <---------------- */}
      {/* --------------------------> Contact <-------------------------- */}
      <section id="contact">
        <Container className="contact-content-wrapper pt-5" fluid>
          <Row className="">
            <Col md={{ span: 6, offset: 3 }}>
              <div className="resume-btn-wrapper d-flex justify-content-evenly px-3 mt-2">
                <p className="contact-header text-nowrap py-2 px-5">
                  Get In Touch
                </p>
              </div>
              <p className="contact-subheader px-5 text-center text-white">
                Currently looking for any new opportunities, my inbox is always
                open. Feel free to reach out to me and I’ll try my best to get
                back to you as soon as I can!
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
