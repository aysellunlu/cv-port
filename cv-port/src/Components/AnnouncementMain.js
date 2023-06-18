import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AnnouncementMain = () => {
  return (
    <Container fluid className="bg-color mb-5 mt-3">
      <Container>
        <div className="header pt-3 pb-2 text-center">
          BİNLERCE İLAN ARASINDAN SANA UYGUN OLANI SEÇ
        </div>
        <div className="text-center">
          <Row className="pt-4 pb-4 mb-5">
            <Col xs={12} lg={4} className="pt-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicSearch">
                  <Form.Control type="text" placeholder="Aradığın İş" />
                </Form.Group>
              </Form>
            </Col>
            <Col xs={12} lg={4} className="pt-4">
              <Form.Select aria-label="Default select example">
                <option>Şehir</option>
                <option value="1">Newyork</option>
                <option value="2">Madrid</option>
                <option value="3">Roma</option>
              </Form.Select>
            </Col>
            <Col xs={12} lg={4} className=" pt-4">
              <Button className="search-button">İŞ İLANI ARA</Button>
            </Col>
          </Row>
        </div>
        <div className="header pt-3 pb-2 text-center">POPÜLER ARAMALAR</div>
        <Row className="pt-4">
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Frontend Developer</Button>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Sosyal Medya Uzmanı</Button>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
            </div>
          </Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Frontend Developer</Button>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
            </div>
          </Col>

          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Sosyal Medya Uzmanı</Button>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <div className="text-center mt-2">
              <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AnnouncementMain;
