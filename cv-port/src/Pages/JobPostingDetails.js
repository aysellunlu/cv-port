import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import LogoCompany from "../img/companyprofilepic.jpg";
import "../Styles/JobPostingDetails.css";

const JobPostingDetails = () => {
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
                    İLAN DETAYLARI
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col lg={8}>
                <div className="job-details-card">
                  <Row>
                    <Col lg={8}>
                      <div className="job-detail-card-title px-4 pt-4 pb-2">
                        Frontend Developer
                      </div>
                      <div className="company-type px-4">Yazılım Şirketi</div>
                      <div className="company-city px-4">
                        İzmir, İstanbul, Ankara
                      </div>
                      <Row className="mt-4">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Çalışma Şekli :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Tam Zamanlı</div>
                        </Col>
                      </Row>
                      <Row className="mt-1">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Pozisyon :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Uzman</div>
                        </Col>
                      </Row>
                      <Row className="mt-1">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Departman :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Bilişim</div>
                        </Col>
                      </Row>
                      <Row className="mt-1 mb-4">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Başvuru Sayısı :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">256 Başvuru</div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} className="pt-4">
                      <Button className="job-save-btn mx-2">Kaydet</Button>
                      <Button className="job-share-btn mx-2">Paylaş</Button>
                      <Button className="job-apply-btn mx-2">Başvur</Button>
                      <div className="nomination-criteria-bg mt-3 mx-3">
                        <div className="nomination-criteria-title px-4 pb-3 pt-2">
                          Aday Kriterleri
                        </div>
                        <div className="nomination-criteria-text px-4 pb-2 mb-4">
                          <b>Eğitim :</b>
                          <p>
                            Bilgisayar Mühendisliği, Yazılım Mühendisliği,
                            Elektronik ve Haberleşme Mühendisliği,
                          </p>
                          <Row>
                            <Col lg={5}>
                              <div>
                                <b>Tecrübe :</b>
                              </div>
                            </Col>
                            <Col lg={7}>
                              <div>En az 3 yıl</div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="job-details-card  p-4">
                  <div className="card-line pb-3">
                    <Row>
                      <Col lg={5}>
                        <img src={LogoCompany} width="80" />
                      </Col>
                      <Col lg={7}>
                        <div className="job-detail-card-title">
                          LOGO YAZILIM
                        </div>
                        <div className="justify-content-end row mx-5 company-type">
                          Yazılım Şirketi
                        </div>
                        <div className="justify-content-end row mx-5">
                          <Button className="follow-btn mt-2">Takip Et</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col>
                      <div className="company-city mt-2">
                        <b>Hakkımızda</b>
                      </div>
                    </Col>
                    <Col>
                      <div className="company-page-btn mt-2" type="button">
                        Şirket Sayfasına Git
                      </div>
                    </Col>
                  </Row>
                  <div className="detail-text mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                </div>
              </Col>
            </Row>
            <div className="job-details-card mt-4 p-4">
              <div className="job-detail-card-title pb-3">GENEL NİTELİKLER</div>
              <div className="detail-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
      {width <= 450 && (
        <div>
          <Container>
            <div className="header-bg mb-5">
              <div className="text-center mobile-header-text pb-4 pt-4">
                İLAN DETAYLARI
              </div>
            </div>
          </Container>
          <Container>
            <Row>
              <Col lg={8}>
                <div className="job-details-card">
                  <Row>
                    <Col lg={8}>
                      <div className="job-detail-card-title px-4 pt-4 pb-2">
                        Frontend Developer
                      </div>
                      <div className="company-type px-4">Yazılım Şirketi</div>
                      <div className="company-city px-4">
                        İzmir, İstanbul, Ankara
                      </div>
                      <Row className="mt-4">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Çalışma Şekli :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Tam Zamanlı</div>
                        </Col>
                      </Row>
                      <Row className="mt-1">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Pozisyon :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Uzman</div>
                        </Col>
                      </Row>
                      <Row className="mt-1">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Departman :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">Bilişim</div>
                        </Col>
                      </Row>
                      <Row className="mt-1 mb-2">
                        <Col lg={4}>
                          <div className="bold-detail-text px-4">
                            Başvuru Sayısı :
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="detail-text px-4">256 Başvuru</div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={4} className="pt-2 text-center">
                      <Button className="job-save-btn mx-2">Kaydet</Button>
                      <Button className="job-share-btn mx-3">Paylaş</Button>
                      <Button className="job-apply-btn mx-2">Başvur</Button>
                      <div className="nomination-criteria-bg mt-3 mx-3">
                        <div className="nomination-criteria-title px-4 pb-2 pt-2">
                          Aday Kriterleri
                        </div>
                        <div className="nomination-criteria-text px-4 pb-2 mb-4">
                          <b>Eğitim :</b>
                          <p>
                            Bilgisayar Mühendisliği, Yazılım Mühendisliği,
                            Elektronik ve Haberleşme Mühendisliği,
                          </p>
                          <Row>
                            <Col xs={6}>
                              <div>
                                <b>Tecrübe :</b>
                              </div>
                            </Col>
                            <Col xs={6}>
                              <div>En az 3 yıl</div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="job-details-card p-2 mt-3">
                  <div className="card-line pb-3">
                    <Row>
                      <Col lg={5}>
                        <img src={LogoCompany} width="80" />
                      </Col>
                      <Col lg={7}>
                        <div className="job-detail-card-title mx-2 mt-2">
                          LOGO YAZILIM
                        </div>
                        <div className="justify-content-end row mx-2 company-type">
                          Yazılım Şirketi
                        </div>
                        <div className="justify-content-end row mx-2">
                          <Button className="follow-btn mt-2 ">Takip Et</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col>
                      <div className="company-city mt-3">
                        <b>Hakkımızda</b>
                      </div>
                    </Col>
                    <Col>
                      <div className="company-page-btn mt-3" type="button">
                        Şirket Sayfasına Git
                      </div>
                    </Col>
                  </Row>
                  <div className="detail-text mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                </div>
              </Col>
            </Row>
            <div className="job-details-card mt-4 p-2">
              <div className="job-detail-card-title pb-3">GENEL NİTELİKLER</div>
              <div className="detail-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default JobPostingDetails;
