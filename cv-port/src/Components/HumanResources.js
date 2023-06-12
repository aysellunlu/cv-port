import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import LineHR from "../img/lineHR.svg";
import HRImg from "../img/blogimg.jpg";

function HumanResources() {
  return (
    <Container type="button">
      <a href="/insan-kaynaklari-blog">
      <Row>
        <Col>
          <div className="hr-header">İnsan Kaynakları Blog</div>
        </Col>
        <Col>
          <Image src={LineHR} />
        </Col>
      </Row>
      <Col>
        <div className="mb-2 mt-4">
          <Image src={HRImg} width="100%" />
        </div>
      </Col>
      </a>
    </Container>
  );
}

export default HumanResources;
