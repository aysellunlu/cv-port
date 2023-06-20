import React from "react";
import Logo from "../img/logo.svg";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/esm/Container";

const Header = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <Container>
      {width >= 1024 && (
        <>
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
                        <NavDropdown.Item href="kullanici-profili-olustur">
                          <Button className="signup-btn px-5 ">
                            <div className="col px-2"> Üye Ol</div>
                          </Button>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/kullanici-girisi">
                          <Button className="signin-btn">
                            <div className="col">
                              <span> Kullanıcı/Firma Giriş</span>
                            </div>
                          </Button>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/firma-profili-olustur">
                          Firma Profili Oluştur
                        </NavDropdown.Item>
                        <NavDropdown.Item href="firma-girisi">
                          İşveren Giriş
                        </NavDropdown.Item>
                        <NavDropdown.Item href="ilan-ver">
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
          <div>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/anasayfa">
                      <div className="px-1">Anasayfa</div>
                    </Nav.Link>
                    <Nav.Link href="/is-ilanlari">
                      <div className="px-1">İş İlanları</div>
                    </Nav.Link>
                    <Nav.Link href="/hakkimizda">
                      <div className="px-1">Hakkımızda</div>
                    </Nav.Link>
                    <Nav.Link href="/sikca-sorulan-sorular">
                      <div className="px-1">S.S.S.</div>
                    </Nav.Link>
                    <Nav.Link href="/iletisim-ulasim">
                      <div className="px-1">İletişim ve Ulaşım</div>
                    </Nav.Link>
                    <Nav.Link href="/bayi-listemiz">
                      <div className="px-1">Bayi Listemiz</div>
                    </Nav.Link>
                    <Nav.Link href="/online-gorusme">
                      <div className="px-1">Online Görüşme</div>
                    </Nav.Link>
                    <Nav.Link href="/ilan-ver">
                      <div className="px-1">İlan Ver</div>
                    </Nav.Link>
                    <Nav.Link href="/insan-kaynaklari-blog">
                      <div className="px-1">Blog</div>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </>
      )}
      {width <= 450 && (
        <div className="mt-2 ">
          
              <Navbar expand="lg" className="bg-body-tertiary">
                
                  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/anasayfa">
                        <div className="px-1">Anasayfa</div>
                      </Nav.Link>
                      <Nav.Link href="/is-ilanlari">
                        <div className="px-1">İş İlanları</div>
                      </Nav.Link>
                      <Nav.Link href="/hakkimizda">
                        <div className="px-1">Hakkımızda</div>
                      </Nav.Link>
                      <Nav.Link href="/sikca-sorulan-sorular">
                        <div className="px-1">S.S.S.</div>
                      </Nav.Link>
                      <Nav.Link href="/iletisim-ulasim">
                        <div className="px-1">İletişim ve Ulaşım</div>
                      </Nav.Link>
                      <Nav.Link href="/bayi-listemiz">
                        <div className="px-1">Bayi Listemiz</div>
                      </Nav.Link>
                      <Nav.Link href="/online-gorusme">
                        <div className="px-1">Online Görüşme</div>
                      </Nav.Link>
                      <Nav.Link href="/ilan-ver">
                        <div className="px-1">İlan Ver</div>
                      </Nav.Link>
                      <Nav.Link href="/insan-kaynaklari-blog">
                        <div className="px-1">Blog</div>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                
              </Navbar>
         
    
        </div>
      )}
    </Container>
  );
};

export default Header;
