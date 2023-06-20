import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/HRBlogs.css";
import HRPicSmall from "../img/hrsmallpic.jpg";

const HRBlogs = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
        <div>
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
                    İNSAN KAYNAKLARI BLOG
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-5">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-4">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-4 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {width <= 450 && (
        <div>
          <Container>
            <div className="header-bg mb-2">
              <div className="text-center mobile-header-text pb-4 pt-4">
                İNSAN KAYNAKLARI BLOG
              </div>
            </div>
          </Container>
          <Container>
            <Row>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                  <div className="card-hr-blogs mb-3">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-2">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-2 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                <div className="card-hr-blogs mb-3">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-2">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-2 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
              <Col lg={4}>
                <a href="/insan-kaynaklari-blog-detay:id">
                <div className="card-hr-blogs mb-3">
                    <div className="card-img-style">
                      <img src={HRPicSmall} width="100%" />
                    </div>
                    <div className="card-hr-title mt-3  p-2">
                      Mülakatta nelere dikkat edilmeli ?
                    </div>
                    <div className="card-hr-text px-2 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default HRBlogs;
