import React from "react";
import Container from "react-bootstrap/esm/Container";
import "../Styles/Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Facebook from "../img/facebook.svg";
import Linkedin from "../img/linkedin.svg";
import Twitter from "../img/twitter.svg";
import Youtube from "../img/youtube.svg";
import Instagram from "../img/instagram.svg";
import FooterLine1 from "../img/footerline1.svg";
import FooterLine2 from "../img/footerline2.svg";
import FooterLine3 from "../img/footerline3.svg";
import Mail from "../img/mail.svg";
import Phone from "../img/phone.svg";
import FooterLogo from "../img/footer-logo.svg";

function Footer() {
  return (
    <React.Fragment>
      <div className="mt-5 footer-bg-color">
        <Container className="pt-5 pb-5">
          <Row>
            <Col lg={1}>
              <div className="d-flex align-items-center">
                <img src={Facebook} width="40" alt="facebook logo" />
              </div>
            </Col>
            <Col lg={1}>
              <div className="d-flex align-items-center">
                <img src={Linkedin} width="40" alt="linkedin logo" />
              </div>
            </Col>
            <Col lg={1}>
              <div className="d-flex align-items-center">
                <img src={Twitter} width="40" alt="twitter logo" />
              </div>
            </Col>
            <Col lg={1}>
              <div className="d-flex align-items-center">
                <img src={Youtube} width="40" alt="youtube logo" />
              </div>
            </Col>
            <Col lg={1}>
              <div className="d-flex align-items-center">
                <img src={Instagram} width="38" alt="instagram logo" />
              </div>
            </Col>
            <Col lg={7}>
              <img src={FooterLine1} alt="linkedin logo" />
            </Col>
          </Row>
          <div className="">
            <div className="justify-content-end row">
              <div className="col-8"></div>
              <div className="col justify-content-end row">
                <div className="col-4">
                  <img src={Mail} width={25}/>
                </div>
                <div className="col-lg-8 phone-text">info@cvport.com</div>
              </div>
              <div className="col justify-content-end row">
                <div className="col-4">
                  <img src={Phone} width={25}/>
                </div>
                <div className="col-lg-8 phone-text">0555 555 55 55</div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <img src={FooterLine2} />
          </div>
          <Row>
            <Col lg={10}>
              <div className="footer-text-area row">
                <div className="col mt-4 mb-4">
                  <div className="footer-area-text mb-1" type="button">
                    İş Arayan Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Firma Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    İlan Ara
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Online İş Görüşmesi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                </div>
                <div className="col mt-4 mb-4">
                  <div className="footer-area-text mb-1" type="button">
                    İş Arayan Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Firma Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    İlan Ara
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Online İş Görüşmesi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                </div>
                <div className="col mt-4 mb-4">
                  <div className="footer-area-text mb-1" type="button">
                    İş Arayan Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Firma Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    İlan Ara
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Online İş Görüşmesi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                </div>
                <div className="col mt-4 mb-4">
                  <div className="footer-area-text mb-1" type="button">
                    İş Arayan Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Firma Üye Girişi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    İlan Ara
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Online İş Görüşmesi
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Hazır CV ile Üyelik Oluştur
                  </div>
                  <div className="footer-area-text mb-1" type="button">
                    Videolu Özgeçmiş Oluştur
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className="">
                <div className="footer-menu-text mb-1 " type="button">
                  Anasayfa
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  Hakkımızda
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  İş İlanları
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  Sıkça Sorulan Sorular
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  İletişim ve Ulaşım
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  Bayi Listemiz
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  İlan Ver
                </div>
                <div className="footer-menu-text mb-1" type="button">
                  Online Görüşme
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-3 row">
            <div className="col-1">
              <img src={FooterLogo} alt="Logo" />
            </div>
            <div className="col-11">
              <img src={FooterLine3} alt="çizgi" />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
