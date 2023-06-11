import React from "react";
import Logo from "../img/logo.svg";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";

function Header() {
  return (
    <div className="container-fluid">
      <Row className="mt-2 line-header">
        <Col className="col-lg-10 ">
          <Image src={Logo} width={75} />
        </Col>
        <Col className="col-lg-2 mt-2">
          <Navbar expand="lg">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown
                    title="Giriş Yap / Üye Ol "
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <Button className="signup-btn px-5">
                        <div className="col px-2"> Üye Ol</div>
                      </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/user-login">
                      <Button className="signin-btn">
                        <div className="col">
                          <span> Kullanıcı/Firma Giriş</span>
                        </div>
                      </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Ücretsiz Üye Ol
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      İşveren Giriş
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      İlan Paketi Al
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Sizi Arayalım
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Bizimle İletişime Geçin
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row className="mt-3 text-center">
        <Col>
          <div className="tab-menu-text" type="button" href="/homepage">
            Anasayfa
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            İş İlanları
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            Hakkımızda
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            S.S.S.
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            İletişim ve Ulaşım
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            Bayi Listemiz
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            Online Görüşme
          </div>
        </Col>
        <Col>
          <div className="tab-menu-text" type="button">
            İlan Ver
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;