import {
  Card,
  Container,
  Navbar,
  NavbarBrand,
  Overlay,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./App.css";
import Main from "./Main.js";
import { Row, Col, Nav } from "react-bootstrap";
import logo from "./images/logo.png";
import {
  AiOutlineHome,
  AiFillProject,
  AiOutlineFileText,
  AiOutlineContacts,
  AiOutlineUser,
} from "react-icons/ai";
import { IconContext } from "react-icons";

// const overlayNavIcon = <Tooltip>Go to </Tooltip>;

function App() {
  return (
    <div className="display-wrapper">
      <section id="header-nav-wrapper">
        <header className="header-nav">
          <Navbar className="nav" fixed="top">
            <NavbarBrand className="m-2">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </NavbarBrand>
            <IconContext.Provider
              value={{ className: "nav-icons", size: "1.7rem" }}
            >
              <Container className="justify-content-center" fluid>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href="#home">
                      <AiOutlineHome />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#about">
                      <AiOutlineUser />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#projects">
                      <AiFillProject />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#resume">
                      <AiOutlineFileText />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#contact">
                      <AiOutlineContacts />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Container>
              <NavbarBrand>
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
