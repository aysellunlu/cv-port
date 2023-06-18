import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const Destination = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
      <Row>
        <Col lg={3}>
          <div className="pt-4 pb-4">
            <div className="destination-block p-3 mt-3 ">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3 mb-3">
              Profesyonel CV
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="pt-4 pb-4">
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
          </div>
        </Col>

        <Col lg={3}>
          <div className="pt-4 pb-4">
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="pt-4 pb-4">
            <div className="destination-block p-3 mt-3">Profesyonel CV</div>
          </div>
        </Col>
      </Row>
      )}
    </React.Fragment>
  );
};

export default Destination;
