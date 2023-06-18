import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/esm/Image";
import LineHR from "../img/lineHR.svg";
import HRImg from "../img/blogimg.jpg";

const HumanResources = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
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
      )}
      {width <= 450 && (
        <Container type="button" className="mt-4">
          <a href="/insan-kaynaklari-blog">
            
                <div className="hr-header">İnsan Kaynakları Blog</div>
             
              <div className="mb-4 mt-2">
                <Image src={HRImg} width="100%" />
              </div>
           
          </a>
        </Container>
      )}
    </React.Fragment>
  );
};

export default HumanResources;
