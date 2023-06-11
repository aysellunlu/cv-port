import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import CardImg from "../img/cardimg.svg";

function HighLights() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <div className="bg-highlights pt-2 pb-4">
        <Container>
          <div className="header-highlights pb-4 pt-4">Öne Çıkan İlanlar</div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Row className="col-lg-12 pb-5">
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className=" pb-5">
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="col-lg-12 pb-5">
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="text-center mb-4 mt-4">
                      <Image src={CardImg} width="50%" />
                    </div>

                    <div className="job-style mt-2 mb-5 text-center">
                      Frontend Developer
                    </div>
                    <div className="company-name text-center">
                      {" "}
                      Logo Yazılım A.Ş.
                    </div>
                    <div className="city-name text-center mt-2 mb-4">
                      İstanbul, Ankara
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default HighLights;
