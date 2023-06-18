import React from "react";
import "../Styles/AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import AboutPic from '../img/aboutus-pic.jpg'

const AboutUs = () => {
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
                HAKKIMIZDA
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="our-story-header text-center mt-5 mb-4">Hikayemiz</div>
        <div className="our-story-text text-center mt-5 mb-4">
          <p>
            İnsana gönül vermiş ve hayalleri olan bir kuruluş olarak, güçlü bir
            ekip ile fark yaratacak bir sistem geliştirdik. <br /> Sistemimiz
            gücünü 20 yıllık insan kaynakları tecrübesinden almaktadır. Yeni
            nesil teknolojilerle insan <br /> kaynaklarını buluşturarak her
            bireyin teknolojiyi kolayca kullanabileceği, aday ve işvereni doğru
            nitelikler ile <br /> analiz ederek zaman ve emek kaybı olmadan
            ortak bir havuzda buluşturduk.
          </p>
          <p>
            Bunu yapay zekâ destekli işe alım platformumuza yansıtarak doğru
            eşleştirme ile her iki tarafın birbirini <br /> bulmasını sağladık.
          </p>
          <p>Hayalleriniz için buradayız...</p>
        </div>
        <div className="our-story-header text-center mt-5 mb-4">Misyonumuz</div>
        <div className="our-story-text text-center mt-5 mb-4">
          <p>İnsanı teknolojinin merkezine koyarak hayatı kolaylaştırmak.</p>
        </div>
        <div className="our-story-header text-center mt-5 mb-4">Vizyonumuz</div>
        <div className="our-story-text text-center mt-5 mb-4">
          <p>Doğaya dost yapımızla inovatif ürünler ve yazılımlar üreterek geleceğimizi yeniden inşa ediyoruz.</p>
        </div>
        <div className="mx-5">
            <img src={AboutPic} width="100%"/>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AboutUs;
