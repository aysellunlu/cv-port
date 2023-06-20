import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import CompanyLogo from "../img/companyprofilepic.jpg";

const BusinessPartners = () => {
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
                    İŞ ORTAKLARIMIZ
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="mb-5 pb-3 mt-5">
              <Row>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5">
              <Row>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5">
              <Row>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
                <Col>
                  <img src={CompanyLogo} />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
      {width <= 450 && (
        <div>
          <Container>
            <div className="header-bg mb-5">
              <div className="text-center mobile-header-text pb-4 pt-4">
                İŞ ORTAKLARIMIZ
              </div>
            </div>
          </Container>
          <Container>
            <div className="mb-5 pb-3 mt-5 text-center">
              <Row>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5 text-center">
              <Row>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5 text-center">
              <Row>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5 text-center">
              <Row>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
              </Row>
            </div>
            <div className="mb-5 pb-3 mt-5 text-center">
              <Row>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
                <Col xs={6}>
                  <img src={CompanyLogo} width={100} />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default BusinessPartners;
