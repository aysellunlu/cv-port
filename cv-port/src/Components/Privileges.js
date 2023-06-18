import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Styles/MainPage.css";

const Privileges = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
        <Container>
          <div className="bg-privileges mb-5">
            <Container className="pb-5">
              <div className="privileges-header pb-5 pt-5">
                CV Port Ayrıcalıkları ile Tanışın
              </div>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/firmalar-icin-online-mulakat">
                    <div
                      className="priveleges-card text-center pb-5 pt-5"
                      type="button"
                    >
                      Firmalar İçin <br /> Online İş Mülakatı
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/gorusme-oncesi-duygu-adaptasyonu">
                    <div
                      className="priveleges-card text-center pb-4 pt-5"
                      type="button"
                    >
                      Kullancılar İçin <br />
                      Görüşme Öncesi <br />
                      Duygu Adaptasyonu
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/uyumlu-cv-aktarimi">
                    <div
                      className="priveleges-card text-center pb-4 pt-5"
                      type="button"
                    >
                      Kullanıcılar İçin <br />
                      Tüm PDF Formatlarına <br />
                      Uyumlu CV Aktarımı
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/firmalar-icin-api-entegrasyonu">
                    <div
                      className="priveleges-card text-center pb-4 pt-5"
                      type="button"
                    >
                      Firmalar İçin <br />
                      Tüm Sistemlere <br />
                      Api Entegrasyonu
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      )}
      {width <= 425 && (
        <Container>
          <div className="bg-privileges mb-5">
            <Container className="pb-5">
              <div className="privileges-header pb-5 pt-5">
                CV Port Ayrıcalıkları ile Tanışın
              </div>
              <Row>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/firmalar-icin-online-mulakat">
                    <div
                      className="priveleges-card text-center mb-3 py-2"
                      type="button"
                    >
                      Firmalar İçin <br /> Online İş Mülakatı
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/gorusme-oncesi-duygu-adaptasyonu">
                    <div
                      className="priveleges-card text-center mb-3 py-2"
                      type="button"
                    >
                      Kullancılar İçin <br />
                      Görüşme Öncesi <br />
                      Duygu Adaptasyonu
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/uyumlu-cv-aktarimi">
                    <div
                      className="priveleges-card text-center mb-3 py-2"
                      type="button"
                    >
                      Kullanıcılar İçin <br />
                      Tüm PDF Formatlarına <br />
                      Uyumlu CV Aktarımı
                    </div>
                  </a>
                </Col>
                <Col lg={3} sm={6} xs={12}>
                  <a href="/firmalar-icin-api-entegrasyonu">
                    <div
                      className="priveleges-card text-center mb-3 py-2"
                      type="button"
                    >
                      Firmalar İçin <br />
                      Tüm Sistemlere <br />
                      Api Entegrasyonu
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Privileges;
