import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import LineSSS from "../img/lineSSS.svg";
import SSSImg from "../img/sssimg.jpg";

const SSS = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
        <Container type="button">
          <a href="/sikca-sorulan-sorular">
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
          </a>
        </Container>
      )}
      {width <= 450 && (
        <Container type="button" className="mt-4">
          <a href="/sikca-sorulan-sorular">
            <div className="hr-header">Sıkça Sorulan Sorular</div>

            <div className="mb-5 mt-2">
              <Image src={SSSImg} width="100%" />
            </div>
          </a>
        </Container>
      )}
    </React.Fragment>
  );
};

export default SSS;
