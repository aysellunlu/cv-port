import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import CardForJobPosting from "../Components/CardForJobPosting";
import FilteredForJobPosting from "../Components/FilteredForJobPosting";
import HighLightsForJobPostingPage from "../Components/HighLightsForJobPostingPage";
import SponsorJobPosting from "../Components/SponsorJobPosting";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/JobPosting.css";

const JobPosting = () => {
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
                İŞ İLANLARI
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={3}>
            <FilteredForJobPosting/>            
          </Col>
          <Col lg={9}>
            <Row className=" pb-4 mb-1">
              <Col xs={12} lg={4} className="mt-2">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicSearch">
                    <Form.Control type="text" placeholder="Aradığın İş" />
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} lg={4} className="mt-2">
                <Form.Select aria-label="Default select example">
                  <option>Şehir</option>
                  <option value="1">Newyork</option>
                  <option value="2">Madrid</option>
                  <option value="3">Roma</option>
                </Form.Select>
              </Col>
              <Col xs={12} lg={4} className="mt-2">
                <Button className="search-button">İŞ İLANI ARA</Button>
              </Col>
            </Row>
            <SponsorJobPosting />
            <HighLightsForJobPostingPage />
            <CardForJobPosting/>
            <CardForJobPosting/>
            <CardForJobPosting/>
            <CardForJobPosting/>
            <CardForJobPosting/>
            <CardForJobPosting/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default JobPosting;
