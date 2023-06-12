import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/BeDealer.css";

function BeDealer() {
  return (
    <React.Fragment>
      <Container>
        <div className="header-bg mt-4 mb-5">
          <Row>
            <Col lg={1}>
              <div className="px-4">
                <img src={HeaderLogo} width="100" />
              </div>
            </Col>
            <Col lg={11}>
              <div className="text-center page-header-text pb-4 pt-4">
                BAYİ OLMAK İSTER MİSİNİZ ?
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="dealer-line">
          <div className="dealer-header mb-4">
            CV Port Bayisi Olun, Birlikte Büyüyelim!
          </div>
          <div className="dealer-text mb-2">
            Türkiye'nin neresinde olursanız olun, teknoloji ya da insan
            kaynakları sektöründeki deneyimlerinizle CV Port portfötyüne
            ekleyeceğiniz her yeni müşteri ile CV Port ile birlikte siz de
            büyüyeceksiniz!
          </div>
          <div className="dealer-text mb-5">
            Bayilik programımız hakkında detaylı bilgi için bizimle
            info@cvport.com üzerinden iletişime geçebilirsiniz ya da isterseniz
            aşağıdaki bayilik formunu doldurarak bize ulaşabilirsiniz.
          </div>
        </div>
      </Container>
      <Container>
        <div className="dealer-header-text mt-5">Bayilik Ön Başvuru Formu</div>
        <Form>
          <Row>
            <Col xs={12} lg={4}> 
              <div className="mx-2 mt-5 mb-5">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Adınız Soyadınız :</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCompany">
                  <Form.Label>Firma / Kurum Adı :</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Label>Şehir :</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="mx-2 mt-5 mb-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E - posta Adresiniz :</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Telefon Numaranız :</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="">
                  <Form.Check
                    type="checkbox"
                    id=""
                    label="KVKV Aydınlatma Metnini okudum, 
            kabul ediyorum."
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="mx-2 mt-5 mb-5">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mesajınız : </Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <div className="d-flex flex-row-reverse">
                  <Button className="mt-4" type="submit">
                    Formu Gönder
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default BeDealer;
