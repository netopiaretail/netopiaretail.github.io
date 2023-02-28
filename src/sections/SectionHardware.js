import img1 from "../img/E800.jpg";
import img2 from "../img/cititor-coduri.jpg";
import img3 from "../img/bluecash-50.png";
import img4 from "../img/cantar.jpg";
import img5 from "../img/pax1.jpg";
import img6 from "../img/pax2.jpg";
import img7 from "../img/sertar.jpg";
import img8 from "../img/printer.jpg";
import img9 from "../img/dp25.png";
import img10 from "../img/devices.jpg";
import pdf from "../img/PAX E800+.pdf";

import Carousel from "react-bootstrap/Carousel";
import { Trans, useTranslation } from "react-i18next";

const SectionHardware = () => {
  const { t } = useTranslation();

  return (
    <section id="hardware" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="heading">{t("section8.title")}</h3>
        </div>
        <div className="row gap-2 justify-content-center">
          <div className="card col-lg-8 col-sm-8 my-3 h-auto wow fadeInRightBig">
            <div className="text-start mb-4">
              <h3 className="mb-3">{t("section8.b1")}</h3>
              <p>
                <Trans i18nKey={"section8.b1Text"}>
                  <a href={pdf} target="_blank" rel="noreferrer">
                    {t("section8.b1Text")}
                  </a>
                </Trans>
              </p>
            </div>
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img className="d-block m-auto" src={img1} alt="Pax E800" />
                <div className="mt-2">
                  <h5>{t("section8.d1")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img5} alt="Pax E800" />
                <div className="mt-2">
                  <h5>{t("section8.d2")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img6} alt="Pax E800" />
                <div className="mt-2">
                  <h5>{t("section8.d3")}</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card col-lg-4 col-sm-8 my-4 h-auto wow fadeInLeftBig">
            <div className="text-start mb-4">
              <h3 className="mb-3">{t("section8.b2")}</h3>
              <p>{t("section8.b2Text")}</p>
            </div>
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block m-auto"
                  src={img10}
                  alt="Second slide"
                />
                <div className="mt-2">
                  <h5>{t("section8.b2D2")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img3} alt="Second slide" />
                <div className="mt-2">
                  <h5>{t("section8.b2D1")}</h5>
                  <p>{t("section8.b2D1Description")}</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="card col-lg-4 col-sm-8 my-4  h-auto wow fadeInRightBig">
            <div className="text-start mb-4">
              <h3 className="mb-3">{t("accesories")}</h3>
              <p>{t("section8.c1d1")}</p>
            </div>
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img className="d-block m-auto" src={img2} alt="First slide" />
                <div className="mt-2">
                  <h5>{t("section8.c6")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img4} alt="First slide" />
                <div className="mt-2">
                  <h5>{t("section8.c3")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img7} alt="Second slide" />
                <div className="mt-2">
                  <h5>{t("section8.c5")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img8} alt="Second slide" />
                <div className="mt-2">
                  <h5>{t("section8.c2")}</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img9} alt="Second slide" />
                <div className="mt-2">
                  <h5>{t("section8.c4")}</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHardware;
