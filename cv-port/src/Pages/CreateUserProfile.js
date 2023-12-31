import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/CreateUserProfile.css";


const CreateUserProfile = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
      <div>
      <Container>
        <div className="header-bg mb-5">
          <Row>
            <Col lg={1}>
              <div className="px-4">
                <img src={HeaderLogo} width="100" />
              </div>
            </Col>
            <Col lg={11}>
              <div className="text-center page-header-text pb-4 pt-4">
                KULLANICI HESABI OLUŞTUR
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Form className="mx-5 mt-5 mb-5">
          <Row>
            <Col lg={6} xs={12}>
              <Row>
                <Col lg={6} xs={12}>
                  <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>Adınız :</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col lg={6} xs={12}>
                  <Form.Group className="mb-3" controlId="userLastname">
                    <Form.Label>Soyadınız :</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="userMail">
                <Form.Label>Mail Adresiniz :</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="userPhoneNumber">
                <Form.Label>Telefon Numarası :</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="usertckn">
                <Form.Label>TC Kimlik Numarası :</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="userJob">
                <Form.Label>Mesleğiniz :</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col  lg={6} xs={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Özet :</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Sertifikalar :</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Form.Group controlId="userUploadPhoto" className="mb-3">
                <Form.Label>Profil Fotoğrafı :</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex flex-row-reverse">
            <Button className="mt-2" type="submit">
              Yeni Kullanıcı Hesabı Oluştur
            </Button>
          </div>
        </Form>
      </Container></div>
      )}
       {width <= 450 && (
         <div>
         <Container>
           <div className="header-bg mb-5">


                 <div className="text-center mobile-header-text pb-4 pt-4">
                   KULLANICI HESABI OLUŞTUR
                 </div>
         
           </div>
         </Container>
         <Container>
           <Form className="mx-1 mt-3 mb-5">
             <Row>
               <Col lg={6} xs={12}>
                 <Row>
                   <Col lg={6} xs={12}>
                     <Form.Group className="mb-3" controlId="userName">
                       <Form.Label>Adınız :</Form.Label>
                       <Form.Control type="text" />
                     </Form.Group>
                   </Col>
                   <Col lg={6} xs={12}>
                     <Form.Group className="mb-3" controlId="userLastname">
                       <Form.Label>Soyadınız :</Form.Label>
                       <Form.Control type="text" />
                     </Form.Group>
                   </Col>
                 </Row>
                 <Form.Group className="mb-3" controlId="userMail">
                   <Form.Label>Mail Adresiniz :</Form.Label>
                   <Form.Control type="email" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="userPhoneNumber">
                   <Form.Label>Telefon Numarası :</Form.Label>
                   <Form.Control type="number" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="usertckn">
                   <Form.Label>TC Kimlik Numarası :</Form.Label>
                   <Form.Control type="number" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="userJob">
                   <Form.Label>Mesleğiniz :</Form.Label>
                   <Form.Control type="text" />
                 </Form.Group>
               </Col>
               <Col  lg={6} xs={12}>
                 <Form.Group
                   className="mb-3"
                   controlId="exampleForm.ControlTextarea1"
                 >
                   <Form.Label>Özet :</Form.Label>
                   <Form.Control as="textarea" rows={4} />
                 </Form.Group>
                 <Form.Group
                   className="mb-3"
                   controlId="exampleForm.ControlTextarea1"
                 >
                   <Form.Label>Sertifikalar :</Form.Label>
                   <Form.Control as="textarea" rows={4} />
                 </Form.Group>
                 <Form.Group controlId="userUploadPhoto" className="mb-3">
                   <Form.Label>Profil Fotoğrafı :</Form.Label>
                   <Form.Control type="file" />
                 </Form.Group>
               </Col>
             </Row>
   
             <div className="d-flex flex-row-reverse">
               <Button className="mt-2" type="submit">
                 Yeni Kullanıcı Hesabı Oluştur
               </Button>
             </div>
           </Form>
         </Container></div>)}
    </React.Fragment>
  );
};

export default CreateUserProfile;
