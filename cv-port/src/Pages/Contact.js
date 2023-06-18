import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <React.Fragment>
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
                İLETİŞİM VE ULAŞIM
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="contact-bg mt-5">
          <Row>
            <Col>
              <div className="p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                  width="100%"
                  height="500"
                  frameborder="0"
                ></iframe>
              </div>
            </Col>
            <Col>
              <div className="adress-title pt-5 mt-5">ADRES</div>
              <div className="contact-text mt-4">
                Bostanlı Mahallesi, Sahil Caddesi, Bayrak Plaza, <br /> Kat : 8{" "}
                <br />
                Karşıyaka / İzmir
              </div>
              <div className="contact-text mt-2">
                <b>Telefon : </b>
                0555 555 55 55 
              </div>
              <div className="contact-text mt-2">
                <b>Şirket İşlemleri için E - posta : </b>
                info@cvport.com
              </div>
              <div className="contact-text mt-2">
                <b>Aday İşlemleri için E - posta : </b>
                info@cvport.com
              </div>
              <div className="contact-text mt-2">
                <b>Faks : </b>
                0555 555 55 55
              </div>
              <div className="contact-text mt-2">
                <b>Çalışma Saatleri : </b>
                Hafta içi 08:45 - 17: 45
              </div>
              <div className="contact-text mt-2">
                <b>Mersis No : </b>
                234829302378
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
