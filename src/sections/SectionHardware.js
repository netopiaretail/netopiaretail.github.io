import img1 from "../img/E800.jpg";
import img2 from "../img/dp25.png";
import img3 from "../img/bluecash-50.png";
import img4 from "../img/cantar.jpg";
import img5 from "../img/pax1.png";
import img6 from "../img/pax2.png";

import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

const SectionHardware = () => {
  const { t } = useTranslation();

  return (
    <section id="hardware" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="title">{t("section8.title")}</h3>
        </div>
        <div className="row gap-2 justify-content-center">
          <div className="card col-lg-8 col-sm-8 my-4 wow fadeInRightBig">
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img className="d-block m-auto" src={img1} alt="Pax E800" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img5} alt="Pax E800" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img6} alt="Pax E800" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="text-start mt-4">
              <h5>{t("section8.b1")}</h5>
              <p>{t("section8.b1Text")}</p>
            </div>
          </div>
          <div className="card col-lg-4 col-sm-8 my-4 wow fadeInLeftBig">
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img className="d-block m-auto" src={img2} alt="First slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img3} alt="Second slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img4} alt="Second slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="text-start mt-4">
              <h5>{t("section8.b2")}</h5>
              <p>{t("section8.b2Text")}</p>
            </div>
          </div>
          <div className="card col-lg-4 col-sm-8 my-4 wow fadeInRightBig">
            <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                <img className="d-block m-auto" src={img2} alt="First slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img3} alt="Second slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block m-auto" src={img4} alt="Second slide" />
                <div className="mt-2">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
            <div className="text-start mt-4">
              <h5>{t("section8.b2")}</h5>
              <p>{t("section8.b2Text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHardware;
