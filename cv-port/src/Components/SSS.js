import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import LineSSS from "../img/lineSSS.svg";
import SSSImg from "../img/sssimg.jpg";

function SSS() {
  return (
    <Container type="button">
      <Row>
        <Col>
          <Image src={LineSSS} />
        </Col>
        <Col>
          <div className="hr-header">Sıkça Sorulan Sorular</div>
        </Col>
      </Row>
      <Col>
        <div className="mb-2 mt-4">
          <Image src={SSSImg} width="100%" />
        </div>
      </Col>
    </Container>
  );
}

export default SSS;
