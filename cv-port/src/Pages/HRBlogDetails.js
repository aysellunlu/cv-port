import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import BackIcon from "../img/backicon.svg";
import "../Styles/HRBlogDetails.css";
import BlogDetailImg from "../img/blogdetailimg.jpg";

const HRBlogDetails = () => {
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
            <div className="header-bg mb-3">
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
            <Col lg={1}>
              <div type="button">
                <Row>
                  <Col lg={1}>
                    <img src={BackIcon} width="20" />
                  </Col>
                  <Col lg={2}>
                    <div className="back-text-style">GERİ</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <div className="hr-detail-card mt-3">
              <img src={BlogDetailImg} width="100%" className="m-0" />
              <div className="hr-detail-title mt-4 mx-4">
                Mülakatta nelere dikkat edilmeli ?
              </div>
              <div className="hr-detail-text mx-4 pb-4 mt-2">
                <p>
                  <b>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </b>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
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
   
            <div className="hr-detail-card mt-3">
              <img src={BlogDetailImg} width="100%" className="m-0" />
              <div className="hr-detail-title mt-2 p-2">
                Mülakatta nelere dikkat edilmeli ?
              </div>
              <div className="hr-detail-text px-2 pb-4 mt-2">
                <p>
                  <b>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </b>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. 
                </p>
                <p>
                  It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default HRBlogDetails;
