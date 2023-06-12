import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Styles/MainPage.css";

function Privileges() {
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
              <div className="priveleges-card text-center pb-5 pt-5">
                Firmalar İçin <br /> Online İş Mülakatı
              </div>
            </Col>
            <Col>
              <div className="priveleges-card text-center pb-4 pt-5">
                Kullancılar İçin <br /> 
                Görüşme Öncesi <br /> 
                Duygu Adaptasyonu
              </div>
            </Col>
            <Col>
              <div className="priveleges-card text-center pb-4 pt-5">
                Kullanıcılar İçin <br />
                Tüm PDF Formatlarına <br />
                Uyumlu CV Aktarımı
              </div>
            </Col>
            <Col>
              <div className="priveleges-card text-center pb-4 pt-5">
              Firmalar İçin <br/>
Tüm Sistemlere <br/>
Api Entegrasyonu
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </Container>
    </React.Fragment>
  );
}

export default Privileges;
