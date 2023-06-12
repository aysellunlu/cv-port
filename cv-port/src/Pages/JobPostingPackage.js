import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import HeaderLogo from "../img/page-header-logo.svg";
import "../Styles/JobPostingPackage.css";
import Video from "../img/video.svg";
import Call from '../img/call.svg';
import Search from '../img/searchnormal1.svg';

const JobPostingPackage = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="header-bg mt-4 mb-5">
          <Row>
            <Col lg={1}>
              <div className="px-4">
                <img src={HeaderLogo} width="100" />
              </div>
            </Col>
            <Col lg={11}>
              <div className="text-center page-header-text pb-4 pt-4">
                İLAN YAYINLA
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="line-job pb-4 mb-5">
        <Row>
          <Col lg={4}>
            <div className="job-posting-card-second m-4 p-4">
              <div className="job-second-card-bg p-4">
                <div className="second-job-header text-center">
                  1 İLAN <br /> ₺ 2000
                </div>
                <div className="second-job-kdv-text text-center">( + KDV )</div>
              </div>
              <div className="mt-4 mb-2">
                <p>+ 30 Gün İlan Yayın Süresi</p>
                <p>+ 365 Gün Üyelik Süresi</p>
                <p>+ Sınırsız İlan Görüntüleme</p>
                <p>+ Bütün başvuruları sınırısız görüntüleme</p>
                <p>+ Sınırsız Videolu CV görüntüleme</p>
                <p>+ Sınırsız yapay zeka CV önerileri</p>
              </div>
              <div className="text-center mt-4">
                <Button className="px-5">SATIN AL</Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="job-posting-card-first mb-4 p-4">
              <div className="job-first-card-bg p-4">
                <div className="first-job-header text-center">
                  5 İLAN <br /> ₺ 6000
                </div>
                <div className="first-job-kdv-text text-center">( + KDV )</div>
              </div>
              <div className="mt-4 mb-4">
                <p>+ 30 Gün İlan Yayın Süresi</p>
                <p>+ 365 Gün Üyelik Süresi</p>
                <p>+ Sınırsız İlan Görüntüleme</p>
                <p>+ Bütün başvuruları sınırısız görüntüleme</p>
                <p>+ Sınırsız Videolu CV görüntüleme</p>
                <p>+ Sınırsız yapay zeka CV önerileri</p>
              </div>
              <div className="text-center mt-4">
                <Button className="px-5">SATIN AL</Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="job-posting-card-second m-4 p-4">
              <div className="job-second-card-bg p-4">
                <div className="second-job-header text-center">
                  1 İLAN <br /> ₺ 2000
                </div>
                <div className="second-job-kdv-text text-center">( + KDV )</div>
              </div>
              <div className="mt-4 mb-2">
                <p>+ 30 Gün İlan Yayın Süresi</p>
                <p>+ 365 Gün Üyelik Süresi</p>
                <p>+ Sınırsız İlan Görüntüleme</p>
                <p>+ Bütün başvuruları sınırısız görüntüleme</p>
                <p>+ Sınırsız Videolu CV görüntüleme</p>
                <p>+ Sınırsız yapay zeka CV önerileri</p>
              </div>
              <div className="text-center mt-4">
                <Button className="px-5">SATIN AL</Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="more-job-text text-center pt-5 mt-5" type="button">
          DAHA FAZLASI İÇİN TIKLAYINIZ
        </div>
      </Container>
      <Container>
        <div className="meet-dealer-bg m-5 p-4">
          <div className="meet-dealer-header text-center">
            CV Banko ile Bayileri İleri Taşıyın
          </div>
          <div className="meet-dealer-text text-center mt-4 mb-4">
            Online Satış sayfamızdaki paket ve ilan fiyatları haricinde iş
            ortaklığı ve daha yüksek adetli <br /> paketler hakkında fiyat
            bilgisi ve detaylara ulaşmak için lütfen iletişime geçiniz.
          </div>
        </div>
        <div className="m-5">
          <Row>
            <Col>
              <div className="m-4 meet-box text-center p-4" type="button">
                <img src={Video} />
                <div className="pt-3">
                  BAYİNİZLE GÖRÜNTÜLÜ <br /> GÖRÜŞÜN
                </div>
              </div>
            </Col>
            <Col>
              <div className="m-4 meet-box text-center p-4" type="button">
                <img src={Call} />
                <div className="pt-3 pb-4">
                  BAYİNİZİ ARAYIN
                </div>
              </div>
            </Col>
            <Col>
              <div className="m-4 meet-box text-center p-4" type="button">
                <img src={Search} />
                <div className="pt-3 pb-4">
                  BAYİNİZİ BULUN
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default JobPostingPackage;
