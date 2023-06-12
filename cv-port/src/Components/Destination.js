import React, { Fragment } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

const Destination = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Destination;
