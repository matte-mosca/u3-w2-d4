import { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
  Container,
  Badge,
} from "react-bootstrap";
import logo from "../Netflix-assets/assets/netflix_logo.png";
import kidsImg from "../Netflix-assets/assets/kids_icon.png";
import profileImg from "../Netflix-assets/assets/avatar.png";

class MyNav extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <Navbar variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" style={{ width: "120px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav className="d-flex flex-column align-items-start flex-lg-row align-items-lg-center justify-content-between gap-4">
              <Button
                variant="link"
                className="text-white"
                onClick={this.toggleModal}
              >
                <i className="bi bi-search" style={{ fontSize: "23px" }}></i>
              </Button>
              <Modal
                show={this.state.showModal}
                onHide={() => {
                  this.closeModal();
                }}
                backdrop="static"
                data-bs-theme="dark"
              >
                <Modal.Header closeButton>
                  <Modal.Title className="fs-5 text-white">Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="d-flex gap-2" role="search">
                    <Form.Control type="search" placeholder="Search" />
                    <Button variant="danger" type="submit">
                      Search
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
              <img
                src={kidsImg}
                alt="kids"
                className="rounded-3"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="position-relative">
                <i
                  className="bi bi-bell-fill"
                  style={{ fontSize: "23px", color: "white" }}
                ></i>
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle rounded-circle p-1"
                >
                  8+
                </Badge>
              </div>
              <NavDropdown
                title={
                  <img
                    src={profileImg}
                    alt="media"
                    className="rounded-3"
                    style={{ width: "40px", height: "40px" }}
                  />
                }
                id="basic-nav-dropdown"
                align={"end"}
                data-bs-theme="dark"
              >
                <NavDropdown.Item href="#">
                  <img
                    src={profileImg}
                    alt="media"
                    style={{ width: "30px", height: "30px" }}
                    className="rounded-circle "
                  />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#"
                  className="text-decoration-none text-white"
                >
                  Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#"
                  className="text-decoration-none text-white"
                >
                  Settings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNav;
