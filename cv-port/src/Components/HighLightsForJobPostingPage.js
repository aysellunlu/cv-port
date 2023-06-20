import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import CardImg from "../img/cardimg.svg";
import "../Styles/JobPosting.css";
const HighLightsForJobPostingPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      <div className="bg-sponso pt-2 pb-4">
      <div className="sponsor-title ">
                    ÖNE ÇIKAN İLANLAR
                </div>
        <Container>
        {width >= 1024 && (
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Row className="col-lg-12 pb-5">
                  <Col>
                    <div className="card">
                      <a href="/ilan-detay:id">
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
                      </a>
                    </div>
                  </Col>
                  <Col>
                    <div className="card">
                      <a href="/ilan-detay:id">
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
                      </a>
                    </div>
                  </Col>
                  <Col>
                    <div className="card">
                      <a href="/ilan-detay:id">
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
                      </a>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          )}
          {width <= 450 && (
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Firewall Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Frontend Developer
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Sosyal Medya Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Firewall Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Frontend Developer
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Sosyal Medya Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Firewall Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Frontend Developer
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Sosyal Medya Uzmanı
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Product Owner
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
                <div className="card mb-3 p-2">
                  <a href="/ilan-detay:id">
                    <Row>
                      <Col xs={4}>
                        {" "}
                        <div className="text-center m-3">
                          <Image src={CardImg} width="100%" />
                        </div>
                      </Col>
                      <Col xs={8}>
                        {" "}
                        <div className="job-style my-2 text-center">
                          Yazılım Mühendisi
                        </div>
                        <div className="company-name text-center">
                          {" "}
                          Logo Yazılım A.Ş.
                        </div>
                        <div className="city-name text-center mt-2 mb-4">
                          İstanbul, Ankara
                        </div>
                      </Col>
                    </Row>
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HighLightsForJobPostingPage;
