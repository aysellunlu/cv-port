import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Button, Form } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import Mic from "../img/mic.svg";
import Headphone from "../img/headphone.svg";
import RecordCircle from "../img/recordcircle.svg";
import Video from "../videos/video.mp4";
import "../Styles/OnlineInterview.css";

const OnlineInterview = () => {
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
                ONLINE GÖRÜŞME
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={9}>
            <div className="text-center">
              <video width="80%" height="70%" controls="controls">
                <source src={Video} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
              <div className="mt-4 text-center mx-5 mb-5">
                <Row>
                  <Col>
                    <div type="button">
                      <img src={Mic} width="30" />
                    </div>
                  </Col>
                  <Col>
                    <div type="button">
                      <img src={Headphone} width="30" />
                    </div>
                  </Col>
                  <Col>
                    <div type="button">
                      <img src={RecordCircle} width="30" />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="video-info-text mx-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="chatwindow-bg">
              <div className="chatwindow-title p-2 ">SOHBET</div>
              <div className="scrolling">
                <div className="chatwindow-name px-2 pt-2 ">Aysel Ünlü :</div>
                <div className="chatwindow-text px-2 ">toplantıya katıldı.</div>
                <div className="chatwindow-name px-2 pt-2 ">
                  Emirhan Kutlu :
                </div>
                <div className="chatwindow-text px-2 ">toplantıya katıldı.</div>
                <div className="chatwindow-name px-2 pt-2 ">Aysel Ünlü :</div>
                <div className="chatwindow-text px-2 ">
                  Emir Bey merhaba, sesim geliyor mu?
                </div>
                <div className="chatwindow-name px-2 pt-2 ">Aysel Ünlü :</div>
                <div className="chatwindow-text px-2 ">
                  Emir Bey merhaba, sesim geliyor mu? Emir Bey merhaba, sesim
                  geliyor mu? Emir Bey merhaba, sesim geliyor mu?
                </div>
                <div className="chatwindow-text px-2 ">
                  Emir Bey merhaba, sesim geliyor mu? Emir Bey merhaba, sesim
                  geliyor mu? Emir Bey merhaba, sesim geliyor mu?
                </div>
              </div>
              <div className="p-2">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control as="textarea" rows={4} />
                  </Form.Group>
                  <div className="d-flex flex-row-reverse">
                    <Button>Gönder</Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default OnlineInterview;
