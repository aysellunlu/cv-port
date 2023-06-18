import React, { useState, useEffect } from "react";
import { Form, Button, Accordion, Container } from "react-bootstrap";

const FilteredForJobPosting = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  }, [width]);
  return (
    <React.Fragment>
      {width >= 1024 && (
        <>
          <div className="filter-header mt-1 pb-4">ARAMA FİLTRELERİ</div>
          <div className="filter-title mt-3 mb-2">Konum:</div>
          <div className="filter-card-bg p-4">
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Ülke Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Şehir Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>İlçe Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
          </div>
          <div className="filter-title mt-3 mb-2">Çalışma Tercihi:</div>
          <div className="filter-card-bg p-4">
            <Form.Check label="İş Yerinde" />
            <Form.Check label="Uzaktan (Remote)" />
            <Form.Check label="Hibrit" />
          </div>
          <div className="filter-title mt-3 mb-2">Tarih:</div>
          <div className="filter-card-bg p-4">
            <Form.Check label="Tümü" type="radio" />
            <Form.Check label="Bugün" type="radio" />
            <Form.Check label="Bu Hafta" type="radio" />
            <Form.Check label="Bu Ay" type="radio" />
          </div>
          <div className="filter-title mt-3 mb-2">Şirketin Sektörü:</div>
          <div className="filter-card-bg p-4">
            <Form.Group className="mb-3" controlId="searchSector">
              <Form.Control type="text" placeholder="Sektör Ara" />
            </Form.Group>
            <Form.Check label="Bilişim" />
            <Form.Check label="Üretim / Endüstri" />
            <Form.Check label="Elektrik & Elektronik" />
            <Form.Check label="Güvenlik" />
            <Form.Check label="Enerji" />
            <Form.Check label="Gıda" />
            <Form.Check label="Kimya" />
            <Form.Check label="Maden ve Metal Sanayi" />
          </div>
          <div className="filter-title mt-3 mb-2">Departman</div>
          <div className="filter-card-bg p-4">
            <Form.Group className="mb-3" controlId="searchSector">
              <Form.Control type="text" placeholder="Departman Ara" />
            </Form.Group>
            <Form.Check label="Akademik" />
            <Form.Check label="AR- GE" />
            <Form.Check label="Arşiv / Dökümantasyon" />
            <Form.Check label="Bakım / Onarım" />
            <Form.Check label="Bilgi İşlem" />
            <Form.Check label="Depo / Antrepo" />
            <Form.Check label="Eğitim" />
            <Form.Check label="Genel Başvuru" />
          </div>
          <div className="filter-title mt-3 mb-2">Pozisyon Sevitesi</div>
          <div className="filter-card-bg p-4">
            <Form.Check label="Üst Düzey Yönetici" />
            <Form.Check label="Orta Düzey Yönetici" />
            <Form.Check label="Yönetici Adayı" />
            <Form.Check label="Uzman" />
            <Form.Check label="Yeni Başlayan" />
            <Form.Check label="İşçi veya Mavi Yaka" />
            <Form.Check label="Uzman Yardımcısı" />
            <Form.Check label="Stajyer" />
          </div>
          <div className="filter-title mt-3 mb-2">Eğitim Sevviyesi</div>
          <div className="filter-card-bg p-4">
            <Form.Check label="Doktora - Mezun" />
            <Form.Check label="Doktora - Öğrenci" />
            <Form.Check label="Yüksek Lisans - Mezun" />
            <Form.Check label="Yüksek Lisans _ Öğrenci" />
            <Form.Check label="Üniversite - Mezun" />
            <Form.Check label="Üniversite - Öğrenci" />
            <Form.Check label="Lise - Mezun" />
            <Form.Check label="Lise - Öğrenci" />
          </div>
          <Button className="col-12 mt-4">UYGULA</Button>
        </>
      )}
      {width <= 425 && (
        <Container>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Konum</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Ülke Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Şehir Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>İlçe Seçiniz</option>
              <option value="1">Newyork</option>
              <option value="2">Madrid</option>
              <option value="3">Roma</option>
            </Form.Select>
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Çalışma Tercihi</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Check label="İş Yerinde" />
            <Form.Check label="Uzaktan (Remote)" />
            <Form.Check label="Hibrit" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Tarih</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Check label="Tümü" type="radio" />
            <Form.Check label="Bugün" type="radio" />
            <Form.Check label="Bu Hafta" type="radio" />
            <Form.Check label="Bu Ay" type="radio" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Şirketin Sektörü</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Group className="mb-3" controlId="searchSector">
              <Form.Control type="text" placeholder="Sektör Ara" />
            </Form.Group>
            <Form.Check label="Bilişim" />
            <Form.Check label="Üretim / Endüstri" />
            <Form.Check label="Elektrik & Elektronik" />
            <Form.Check label="Güvenlik" />
            <Form.Check label="Enerji" />
            <Form.Check label="Gıda" />
            <Form.Check label="Kimya" />
            <Form.Check label="Maden ve Metal Sanayi" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Departman</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Group className="mb-3" controlId="searchSector">
              <Form.Control type="text" placeholder="Departman Ara" />
            </Form.Group>
            <Form.Check label="Akademik" />
            <Form.Check label="AR- GE" />
            <Form.Check label="Arşiv / Dökümantasyon" />
            <Form.Check label="Bakım / Onarım" />
            <Form.Check label="Bilgi İşlem" />
            <Form.Check label="Depo / Antrepo" />
            <Form.Check label="Eğitim" />
            <Form.Check label="Genel Başvuru" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Pozisyon Seviyesi</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Check label="Üst Düzey Yönetici" />
            <Form.Check label="Orta Düzey Yönetici" />
            <Form.Check label="Yönetici Adayı" />
            <Form.Check label="Uzman" />
            <Form.Check label="Yeni Başlayan" />
            <Form.Check label="İşçi veya Mavi Yaka" />
            <Form.Check label="Uzman Yardımcısı" />
            <Form.Check label="Stajyer" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Eğitim Seviyesi</Accordion.Header>
              <Accordion.Body>
              <div className="filter-card-bg p-4">
            <Form.Check label="Doktora - Mezun" />
            <Form.Check label="Doktora - Öğrenci" />
            <Form.Check label="Yüksek Lisans - Mezun" />
            <Form.Check label="Yüksek Lisans _ Öğrenci" />
            <Form.Check label="Üniversite - Mezun" />
            <Form.Check label="Üniversite - Öğrenci" />
            <Form.Check label="Lise - Mezun" />
            <Form.Check label="Lise - Öğrenci" />
          </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button className="col-12 mt-2 mb-4">UYGULA</Button>
        </Container>
      )}
    </React.Fragment>
  );
};

export default FilteredForJobPosting;
