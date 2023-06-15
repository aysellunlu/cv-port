import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CompanyLogo from "../img/companyprofilepic.jpg";
import "../Styles/JobPosting.css";
const CardForJobPosting = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="job-card-bg p-4 mb-4">
          <Row>
            <Col lg={3}>
              <img src={CompanyLogo} width="50%" />
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={6}>
                  <div className="job-title">Frontend Developer</div>
                </Col>
                <Col lg={4}>
                  <div className="job-city">İstanbul, Ankara</div>
                </Col>
                <Col lg={2}>
                  <div className="job-time pt-1">20 gün önce</div>
                </Col>
              </Row>
              <div className="job-company mt-4">LOGO Yazılım</div>
              <Row className="">
                <Col lg={9}>
                  <div className="working-type mt-2">Tam Zamanlı</div>
                </Col>
                <Col lg={3}>
                  <Button className="job-details-btn" href="/ilan-detay:id">İlan Detayları</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CardForJobPosting;
