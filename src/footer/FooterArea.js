import img from "../img/contact.svg";
import logo from "../img/logo-blank.svg";
import ParticlesComponent from "../components/Particles";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Trans, useTranslation } from "react-i18next";
import InputSugesstions from "../components/InputSugesstions";

const FooterArea = () => {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <footer id="contact" className="footer-area relative py-5">
      <div className="container text-start">
        <div className="contact-area wow fadeIn">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact-content mt-4">
                <div className="text-center">
                  <img width="70%" src={img} alt="Contact" />
                </div>
                <h2 className="mt-5 contact-title">{t("menu.l7")}</h2>

                <p className="mt-4 fs-6">
                  <Trans i18nKey="section12.text">
                    <a
                      href="https://docs.netopia-retail.ro/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t("menu.l5")}
                    </a>
                  </Trans>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder={t("section12.f1") + "*"}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      id="name"
                      placeholder={t("section12.f2") + "*"}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="cui"
                      placeholder={t("section12.f3") + "*"}
                    />
                  </div>
                  <div className="mb-4">
                    <InputSugesstions />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      maxLength="2000"
                      placeholder={t("section12.f5") + "*"}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn main-btn mt-3">
                    {t("send")}
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget pb-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="footer-section mt-5 wow fadeIn text-center"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <a className="logo" href="/">
                  <img
                    className="user-select-none"
                    src={logo}
                    alt="NETOPIA Retail"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div className="footer-link d-flex mt-5 justify-content-md-between">
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="footer-title">
                    <h4 className="title">{t("footer.title")}</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <a href="/">{t("footer.l1")}</a>
                    </li>
                    <li>
                      <a href="/">{t("footer.l2")}</a>
                    </li>
                    <li>
                      <a href="/">{t("footer.l3")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-5">
              <div
                className="footer-contact mt-5 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="footer-title">
                  <h4 className="title">{t("menu.l7")}</h4>
                </div>
                <ul className="contact">
                  <li>info@netopia.ro</li>
                  <li>
                    Bd. Dimitrie Pompeiu nr 9-9A, Iride Business Park, Cladirea
                    nr. 24, camera 4A, et. 4, sector 2, 020335 BUCUREȘTI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-content">
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ParticlesComponent id={"footer"} color={"#fff"} />
    </footer>
  );
};

export default FooterArea;
