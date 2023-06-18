import React from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/CompanyProfile.css";
import CompanyProfilePic from "../img/companyprofilepic.jpg";
import AdressMap from "../img/adressmap.jpg";

const CompanyProfile = () => {
  return (
    <React.Fragment>
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
                KULLANICI PROFİLİ
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="user-profile-card-bg p-4 mb-5">
          <Row>
            <Col lg={10} xs={6}>
              <div className="user-profile-card-title pb-4">TEMEL BİLGİLER</div>
            </Col>
            <Col lg={2} xs={6}>
              <Button className="edit-profile-btn">Profili Düzenle</Button>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <img src={CompanyProfilePic} width="160" />
            </Col>
            <Col lg={5}>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Firma Adı :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">LOGO Yazılım</div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Sektör :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">
                    Bilgi Teknolojileri
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Telefon :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">0555 555 55 55</div>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Vergi Numarası :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">1234567890</div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Yaşadığı Şehir :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">Marmaris / Muğla</div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="card-bold-text mt-2">Mail Adresi :</div>
                </Col>
                <Col lg={8}>
                  <div className="profile-card-text mt-2">info@cvport.com</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="user-profile-card-bg p-4 mb-5">
          <Row>
            <Col lg={10} xs={6}>
              <div className="user-profile-card-title pb-4">
                ŞİRKET HAKKINDA
              </div>
            </Col>
            {/* <Col lg={2} xs={6}>
              <Button className="edit-profile-btn">Düzenle</Button>   -> burada her bölümü ayrı ayrı mı düzenlemek yoksa sadece profili düzenle diyip tamamını mı alacak ? ona göre açarız diye burada bıraktım :D
            </Col> */}
          </Row>
          <div className="profile-card-text m">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </div>
        </div>
        <Row>
          <Col>
            <div className="user-profile-card-bg p-4 mb-5">
              <img src={AdressMap} />
              <div className="user-profile-card-title pb-4 pt-4">ADRES</div>
              <div className="profile-card-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="user-profile-card-bg p-4 mb-5">
              <div className="user-profile-card-title pb-4">
                AÇIK POZİSYONLAR
              </div>
              <div className="profile-card-text">
                <p>Bilgi İşlem Müdürü</p>
                <p>Devops Uzmanı</p>
                <p>İnsan Kaynakları Uzmanı</p>
                <p>Proje Yöneticisi</p>
                <p>Test Mühendisi</p>
                <p>İş Analisti</p>
                <p>Test Mühendisi</p>
                <p>İş Analisti</p>
                <p>Test Mühendisi</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default CompanyProfile;
