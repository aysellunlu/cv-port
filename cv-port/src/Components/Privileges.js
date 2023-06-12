import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Styles/MainPage.css";

const Privileges = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="bg-privileges mb-5">
          <Container className="pb-5">
            <div className="privileges-header pb-5 pt-5">
              CV Port Ayrıcalıkları ile Tanışın
            </div>
            <Row>
              <Col>
                <a href="/firmalar-icin-online-mulakat">
                  <div
                    className="priveleges-card text-center pb-5 pt-5"
                    type="button"
                  >
                    Firmalar İçin <br /> Online İş Mülakatı
                  </div>
                </a>
              </Col>
              <Col>
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
              <Col>
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
              <Col>
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
    </React.Fragment>
  );
};

export default Privileges;
