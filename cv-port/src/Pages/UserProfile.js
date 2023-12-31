import React, { useState, useEffect } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/UserProfile.css";
import ProfilePicture from "../img/profilepicture.jpg";

const UserProfile = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
        <div>
          <Container>
            <div className="header-bg mb-5">
              <Row>
                <Col lg={1}>
                  <div className="px-4">
                    <img src={HeaderLogo} width="100" />
                  </div>
                </Col>
                <Col lg={11}>
                  <div className="text-center page-header-text pb-4 pt-4">
                    KULLANICI PROFİLİ
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="user-profile-card-bg p-4 mb-5">
              <Row>
                <Col lg={10} xs={6}>
                  <div className="user-profile-card-title pb-4">
                    TEMEL BİLGİLER
                  </div>
                </Col>
                <Col lg={2} xs={6}>
                  <Button className="edit-profile-btn">Profili Düzenle</Button>
                </Col>
              </Row>
              <Row>
                <Col lg={2}>
                  <img src={ProfilePicture} width="160" />
                </Col>
                <Col lg={5}>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">Ad - Soyad :</div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">Aysel Ünlü</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">Meslek :</div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">
                        Elektronik ve Haberleşme Mühendisi
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">Telefon :</div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">
                        0555 555 55 55
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={5}>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">
                        TC Kimlik Numarası :
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">1234567890</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">
                        Yaşadığı Şehir :
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">
                        Marmaris / Muğla
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <div className="card-bold-text mt-2">Mail Adresi :</div>
                    </Col>
                    <Col lg={8}>
                      <div className="profile-card-text mt-2">
                        info@cvport.com
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="user-profile-card-bg p-4 mb-5">
              <Row>
                <Col lg={10} xs={6}>
                  <div className="user-profile-card-title pb-4">
                    MESLEKİ DENEYİMLER
                  </div>
                </Col>
                {/* <Col lg={2} xs={6}>
              <Button className="edit-profile-btn">Düzenle</Button>   -> burada her bölümü ayrı ayrı mı düzenlemek yoksa sadece profili düzenle diyip tamamını mı alacak ? ona göre açarız diye burada bıraktım :D
            </Col> */}
              </Row>
              <Row>
                <Col lg={10}>
                  <div className="profile-card-text mt-2">
                    Engineer Intern, Research and Development -{" "}
                    <b> Vestel City </b>
                  </div>
                  <div className="profile-card-text mt-2">
                    Frontend Developer -{" "}
                    <b> Istanbul Metropolitan Municipality </b>
                  </div>
                  <div className="profile-card-text mt-2">
                    Graphic Designer - <b> Yonbilgi Academy </b>
                  </div>
                  <div className="profile-card-text mt-2">
                    Frontend Developer, UI / UX Designer - <b> Freelance </b>
                  </div>
                  <div className="profile-card-text mt-2">
                    Engineer Intern, Web Developer - <b> Enoca </b>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="card-bold-text mt-2">2019</div>
                  <div className="card-bold-text mt-2">2020-2022</div>
                  <div className="card-bold-text mt-2">2018-2020</div>
                  <div className="card-bold-text mt-2">2022-2023</div>
                  <div className="card-bold-text mt-2">2020</div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col>
                <div className="user-profile-card-bg p-4 mb-5">
                  <div className="user-profile-card-title pb-4">YETENEKLER</div>
                  <div className="profile-card-text">
                    <p>React JS / React Native</p>
                    <p>Javascript, HTML, CSS</p>
                    <p>Responsive Design, Bootstrap</p>
                    <p>Embedded System Development</p>
                    <p>Figma, Adobe XD</p>
                    <p>Linux</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="user-profile-card-bg p-4 mb-5">
                  <div className="user-profile-card-title pb-4">
                    İLGİ ALANLARI
                  </div>
                  <div className="profile-card-text">
                    <p>React JS / React Native</p>
                    <p>Javascript, HTML, CSS</p>
                    <p>Responsive Design, Bootstrap</p>
                    <p>Embedded System Development</p>
                    <p>Figma, Adobe XD</p>
                    <p>Linux</p>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="user-profile-card-bg p-4 mb-5">
              <div className="user-profile-card-title pb-4">
                KİŞİSEL MOTİVASYON{" "}
              </div>
              <div className="profile-card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </Container>
        </div>
      )}
      {width <= 450 && (
        <div>
          <Container>
            <div className="header-bg mb-2">
              <Row>
                <Col lg={1}></Col>
                <Col lg={11}>
                  <div className="text-center mobile-header-text pb-4 pt-4">
                    KULLANICI PROFİLİ
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="user-profile-card-bg px-2 pt-4 mb-3">
              <Row>
                <Col lg={10} xs={7}>
                  <div className="user-profile-card-title ">TEMEL BİLGİLER</div>
                  <Button className="edit-profile-btn mb-2 mt-3">
                    Profili Düzenle
                  </Button>
                </Col>
                <Col lg={2} xs={5}>
                  <img src={ProfilePicture} width="100%" />
                </Col>
              </Row>

              <div className="card-bold-text mt-2">Ad - Soyad :</div>

              <div className="profile-card-text mt-2">Aysel Ünlü</div>

              <div className="card-bold-text mt-2">Meslek :</div>

              <div className="profile-card-text mt-2">
                Elektronik ve Haberleşme Mühendisi
              </div>

              <div className="card-bold-text mt-2">Telefon :</div>

              <div className="profile-card-text mt-2">0555 555 55 55</div>

              <div className="card-bold-text mt-2">TC Kimlik Numarası :</div>

              <div className="profile-card-text mt-2">1234567890</div>

              <div className="card-bold-text mt-2">Yaşadığı Şehir :</div>

              <div className="profile-card-text mt-2">Marmaris / Muğla</div>

              <div className="card-bold-text mt-2">Mail Adresi :</div>

              <div className="profile-card-text mt-2 pb-3">info@cvport.com</div>
            </div>
            <div className="user-profile-card-bg px-2 pt-4  mb-3">
              <Row>
                <Col lg={10} xs={12}>
                  <div className="user-profile-card-title pb-4">
                    MESLEKİ DENEYİMLER
                  </div>
                </Col>
                {/* <Col lg={2} xs={6}>
                <Button className="edit-profile-btn">Düzenle</Button>   -> burada her bölümü ayrı ayrı mı düzenlemek yoksa sadece profili düzenle diyip tamamını mı alacak ? ona göre açarız diye burada bıraktım :D
              </Col> */}
              </Row>

              <div className="profile-card-text mt-2">
                <span className="card-bold-text">2019 : </span>
                Engineer Intern, Research and Development - <b> Vestel City </b>
              </div>
              <div className="profile-card-text mt-2">
                <span className="card-bold-text">2020-2022 : </span>
                Frontend Developer - <b> Istanbul Metropolitan Municipality </b>
              </div>
              <div className="profile-card-text mt-2">
                <span className="card-bold-text">2018-2020 : </span>
                Graphic Designer - <b> Yonbilgi Academy </b>
              </div>
              <div className="profile-card-text mt-2">
                <span className="card-bold-text">2022-2023 : </span>
                Frontend Developer, UI / UX Designer - <b> Freelance </b>
              </div>
              <div className="profile-card-text mt-2">
                <span className="card-bold-text">2020 : </span>
                Engineer Intern, Web Developer - <b> Enoca </b>
              </div>
            </div>

            <div className="user-profile-card-bg p-2 mb-3">
              <div className="user-profile-card-title pb-4">YETENEKLER</div>
              <div className="profile-card-text">
                <p>React JS / React Native</p>
                <p>Javascript, HTML, CSS</p>
                <p>Responsive Design, Bootstrap</p>
                <p>Embedded System Development</p>
                <p>Figma, Adobe XD</p>
                <p>Linux</p>
              </div>
            </div>

            <div className="user-profile-card-bg p-2 mb-3">
              <div className="user-profile-card-title pb-4">İLGİ ALANLARI</div>
              <div className="profile-card-text">
                <p>React JS / React Native</p>
                <p>Javascript, HTML, CSS</p>
                <p>Responsive Design, Bootstrap</p>
                <p>Embedded System Development</p>
                <p>Figma, Adobe XD</p>
                <p>Linux</p>
              </div>
            </div>

            <div className="user-profile-card-bg p-2 mb-4">
              <div className="user-profile-card-title pb-4">
                KİŞİSEL MOTİVASYON{" "}
              </div>
              <div className="profile-card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserProfile;
