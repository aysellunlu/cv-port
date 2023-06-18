import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "../Styles/MainPage.css";
import Banner from "../img/banner-1.svg";
import MainImg1 from "../img/main-img1.svg";
import AnnouncementMain from "../Components/AnnouncementMain";
import HighLights from "../Components/HighLights";
import HumanResources from "../Components/HumanResources";
import SSS from "../Components/SSS";
import Container from "react-bootstrap/esm/Container";
import Privileges from "../Components/Privileges";
import Destination from "../Components/Destination";

const MainPage = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      <Container>
        {width >= 1024 && (
          <div className="banner-style">
            <Image src={Banner} width="100%" />
          </div>
        )}
        <Destination />
        <AnnouncementMain />
        <HighLights />
      </Container>
      {width >= 1024 && (
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <HumanResources />
            </Col>
            <Col>
              <SSS />
            </Col>
          </Row>
        </Container>
      )}
      {width <= 450 && (
        <Container>
          {" "}
          <HumanResources />
          <SSS />
        </Container>
      )}
      <Privileges />
    </React.Fragment>
  );
};

export default MainPage;
