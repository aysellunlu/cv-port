import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import CompanyLogo from "../img/companyprofilepic.jpg";

const BusinessPartners = () => {
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
    </React.Fragment>
  );
};

export default BusinessPartners;
