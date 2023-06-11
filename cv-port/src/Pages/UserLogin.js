import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/CompanyLogin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

function UserLogin() {
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
                KULLANICI GİRİŞİ
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="mt-5 mb-5">
              <Row>
                <Col lg={6} xs={6}>
                  <div
                    className="nonselected-login text-center pb-5 pt-5 mt-3"
                    type="button"
                  >
                    <div className="mt-5 mb-5 pt-5 pb-5">FİRMA GİRİŞİ</div>
                  </div>
                </Col>
                <Col lg={6} xs={6} className="">
                  <div
                    className="selected-login px-2 text-center pb-5 pt-5 mt-3"
                    type="button"
                  >
                    <div className="mt-5 mb-5 pt-5 pb-5">KULLANICI GİRİŞİ</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={7} sm={12}>
            <Form className="mx-5 mt-5 mb-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E - posta :</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Şifre :</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <div
                className="d-flex flex-row-reverse forget-password mb-3"
                type="button"
              >
                Şifremi Unuttum
              </div>
              <div className="d-flex flex-row-reverse">
                <Button className="mt-2" type="submit">
                  Giriş Yap
                </Button>
              </div>
              <div
                className="d-flex flex-row-reverse mt-3 new-account-text"
                type="button"
              >
                <b> Yeni Hesap Oluştur </b> Hesabınız yok mu?
              </div>
              <div
                className="d-flex flex-row-reverse mt-5 login-with-facebook"
                type="button"
              >
                Facebook ile Giriş Yap
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UserLogin;
