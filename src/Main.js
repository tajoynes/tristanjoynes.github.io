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
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { IconContext } from "react-icons";

function Main() {
  return (
    <div>
      {/* --------------------------> Banner/Nav <-------------------------- */}
      <section id="home">
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
                <p className="home-content-sub">Software Developer</p>
                <p className="home-content-sub">Gym Junkie</p>
                <p className="home-content-sub">certified doggo dad </p>
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
      </section>
      {/* --------------------------> About <-------------------------- */}
      <section id="seperator-space" className="pb-5">
        <div></div>
      </section>
      <section id="about" className="pt-4">
        <hr
          style={{
            backgroundColor: "#17B890",
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
          <Col className="ps-5 pe-3 pt-5 d-none d-sm-block">
            <p className="about-text">
              Hello! My name is Tristan a native from a little small island
              called Bermuda. I began a my quest into learning software
              development August 2021. <br></br>
              <br></br>
              Taking my first web development course on Udemy, expanding into
              CodeAcademy and other tutorials to understand the basics..{" "}
              <br></br>
              <br></br>
              Fast-forward to today, I’ve had the privilege and opportunity to
              solidify my knowledge through Nucamp's Full-Stack coding bootcamp
              course developing a web application with HTML, CSS and JavaScript
              utilizing the Bootstrap toolkit.<br></br>
              <br></br>
              From there I've progressed to using javascript libraries such as
              React.js, React Native and Node.js for both course and personal
              projects!
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
          <Col className="py-5 px-5">
            <Card className="bg-dark text-white">
              <Card.Img src={imgone} />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <div className="readmore-btn-wrapper d-sm-none">
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
        </Row>
        <Row className="px-5 py-5">
          <Col className="d-flex justify-content-center gap-4">
            <IconContext.Provider
              value={{ className: "tech-icons", size: "1.7rem" }}
            >
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
              <SiReact />
              <SiNodedotjs />
              <SiMongodb />
              <SiExpress />
            </IconContext.Provider>
          </Col>
        </Row>
      </section>

      {/* --------------------------> Project <-------------------------- */}
      <section id="projects">
        <div className="project-header-wrapper">
          <Row className="text-center pt-5">
            <Col></Col>
          </Row>
        </div>

        <div className="project-content-wrapper d-block px-5 py-3">
          <Row>
            <Col className="mt-4 mb-5"></Col>
          </Row>
          <Row className="gap-3 mb-2 px-4">
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
          <Row className="gap-3 mb-2 px-4">
            <Col sm className="prjctcard main d-none d-sm-block">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
            <Col sm className="prjctcard main d-none d-md-block">
              <div className="prjct-wrapper">
                <h5 className="prjct-heading">Project 1 Name</h5>
                <p className="prjct-desc">
                  Description, This project was built using HTML, JavaScript,
                  CSS.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pb-5">
            <Col className="">
              <div className="readmore-btn-wrapper d-lg-none">
                <IconContext.Provider value={{ className: "banner-icons" }}>
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
        </div>
      </section>
      <section id="seperator-space" className="pt-2 pb-5">
        <div></div>
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
