import { Card, Container, Navbar, NavbarBrand } from "react-bootstrap";
import "./App.css";
import Main from "./Main.js";
import { Row, Col, Nav } from "react-bootstrap";
import logo from "./images/logo.png";
import { AiOutlineHome, AiFillProject, AiOutlineFileText, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai'
import { IconContext } from "react-icons";


function App() {
  return (
    <div className="display-wrapper">
      <section id="header-nav-wrapper">
        <header className="header-nav">
          <Navbar className="nav" fixed="top">
            <NavbarBrand className="m-5">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavbarBrand>
          <IconContext.Provider value={{ className: "nav-icons", size: "2.1rem" }}>
            <Container className="justify-content-center">
              <Nav>
              <Nav.Item>
                  <Nav.Link href="#banner">
                    <AiOutlineHome />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about">
                    <AiOutlineUser />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="#projects" >
                    <AiFillProject />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="#resume">
                    <AiOutlineFileText />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  href="#contact">
                    <AiOutlineContacts />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
            <NavbarBrand >
              <p className="initials">taj.</p>
            </NavbarBrand>
            </IconContext.Provider>
          </Navbar>
        </header>
      </section>

      <section id="main-wrapper">
        <container className="main-content">
          <Row>
            <Col className="">
              <Main />
            </Col>
          </Row>
        </container>
      </section>
    </div>
  );
}

export default App;
