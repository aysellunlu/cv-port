import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/MyVideos.css";
import { Button } from "react-bootstrap";

const MyVideos = () => {
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
                VİDEOLARIM
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="myvideos-card-bg p-4">
          <Row>
            <Col lg={10}>
              <div className="myvideos-title">EN SON YÜKLENENLER</div>
            </Col>
            <Col lg={2}>
              <Button>+ Video Oluştur</Button>
            </Col>
          </Row>
          <div className="last-videos-bg mt-3">
            <Row>
              <Col>
                <div className="video-bg mt-5 mb-5">
                  <video width="360" height="200" controls="controls">
                    <source src="video.mp4" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                  <div className="video-name ">
                  Grafik Tasarımcı Video Başvurusu
                </div>
                </div>
              </Col>
              <Col>
                <div className="video-bg mt-5">
                  <video width="360" height="200" controls="controls">
                    <source src="video.mp4" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                  <div className="video-name ">
                  Grafik Tasarımcı Video Başvurusu
                </div>
                </div>
              </Col>
              <Col>
                <div className="video-bg mt-5">
                  <video width="360" height="200" controls="controls">
                    <source src="video.mp4" type="video/mp4" />
                    <source src="video.ogg" type="video/ogg" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                  <div className="video-name ">
                  Grafik Tasarımcı Video Başvurusu
                </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="myvideos-title mt-4"> TÜM VİDEOLAR</div>
          <Row>
            <Col>
              <div className="video-bg mt-5 mb-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name ">
                  Yazılım Uzmanı Video Başvurusu
                </div>
              </div>
            </Col>
            <Col>
              <div className="video-bg mt-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name ">
                  Grafik Tasarımcı Video Başvurusu
                </div>
              </div>
            </Col>
            <Col>
              <div className="video-bg mt-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name">
                  Gömülü Sistemler Mühendisi Video Başvurusu
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="video-bg mt-5 mb-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name ">
                  Yazılım Uzmanı Video Başvurusu
                </div>
              </div>
            </Col>
            <Col>
              <div className="video-bg mt-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name ">
                  Grafik Tasarımcı Video Başvurusu
                </div>
              </div>
            </Col>
            <Col>
              <div className="video-bg mt-5">
                <video width="360" height="200" controls="controls">
                  <source src="video.mp4" type="video/mp4" />
                  <source src="video.ogg" type="video/ogg" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="video-name">
                  Gömülü Sistemler Mühendisi Video Başvurusu
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MyVideos;
