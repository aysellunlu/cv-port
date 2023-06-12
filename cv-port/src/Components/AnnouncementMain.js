import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AnnouncementMain = () => {
  return (
    <Container fluid className="bg-color mb-5">
      <Container>
        <div className="header pt-3 pb-2">
          BİNLERCE İLAN ARASINDAN SANA UYGUN OLANI SEÇ
        </div>
        <Row className="pt-4 pb-4 mb-5">
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
        <div className="header pt-3 pb-2">Popüler Aramalar</div>
        <Row className="pt-4">
          <Col>
            <Button className="popular-button">Frontend Developer</Button>
          </Col>
          <Col>
            <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
          </Col>

          <Col>
            <Button className="popular-button">Sosyal Medya Uzmanı</Button>
          </Col>
          <Col>
            <Button className="popular-button">Frontend Developer</Button>
          </Col>
          <Col>
            <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
          </Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col>
            <Button className="popular-button">Frontend Developer</Button>
          </Col>
          <Col>
            <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
          </Col>

          <Col>
            <Button className="popular-button">Sosyal Medya Uzmanı</Button>
          </Col>
          <Col>
            <Button className="popular-button">Frontend Developer</Button>
          </Col>
          <Col>
            <Button className="popular-button">Ağ Güvenliği Uzmanı</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AnnouncementMain;
