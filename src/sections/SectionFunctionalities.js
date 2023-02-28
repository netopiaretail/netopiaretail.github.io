import Accordion from "react-bootstrap/Accordion";
import { Trans, useTranslation } from "react-i18next";

const SectionFunctionalities = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const el = document.getElementById("pricing-btn");
    el.firstChild.click();
  };

  return (
    <section id="functionalitati" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="heading">
            <Trans i18nKey="section3.title">
              Acces gratuit <span>la funcționalități cheie</span>
            </Trans>
          </h3>
        </div>
        <div className="align-items-start pt-5">
          <Accordion className="row text-start">
            <div className="col-lg-6">
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInLeftBig"
                eventKey="0"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-user-gear"></i>
                    {t("section3.b1")}
                  </span>
                  <br />
                  {t("section3.b1Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <Trans i18nKey="section3.b1P1">
                      <b>Contul de Casier</b>
                    </Trans>
                  </p>
                  <p className="py-2">
                    <Trans i18nKey="section3.b1P2">
                      <b>Contul de Manager</b>
                    </Trans>
                  </p>
                  <ul className="ps-4">
                    <li>{t("section3.b1P3")}</li>
                    <li>{t("section3.b1P4")}</li>
                    <li>{t("section3.b1P5")}</li>
                  </ul>
                  <p className="py-2">
                    <Trans i18nKey="section3.b1P6">
                      <b>Contul de Admin</b>
                      <b>Manager</b>
                    </Trans>
                  </p>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0  wow fadeInLeftBig"
                eventKey="1"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-folder-tree"></i>
                    {t("section3.b3")}
                  </span>
                  <br /> {t("section3.b3Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <Trans i18nKey="section3.b3P1">
                      <b>Conturile de Manager și Admin</b>
                    </Trans>
                  </p>
                  <p className="py-2">{t("section3.b3P2")}</p>
                  <p className="pb-2">{t("section3.b3P3")}</p>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0  wow fadeInLeftBig"
                eventKey="2"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-chart-line"></i>
                    {t("section3.b5")}
                  </span>
                  <br />
                  {t("section3.b5Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{t("section3.b5P1")}</p>
                  <p className="py-2">{t("section3.b5P2")}</p>
                  <p className="pb-2">{t("section3.b5P3")}</p>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-lg-6">
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="3"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-regular fa-file-lines"></i>
                    {t("section3.b2")}
                  </span>
                  <br />
                  {t("section3.b2Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{t("section3.b2P1")}</p>
                  <p className="py-2">{t("section3.b2P2")}</p>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="4"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-brands fa-sellsy"></i>
                    {t("section3.b4")}
                  </span>
                  <br />
                  {t("section3.b4Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="py-2">
                    <Trans i18nKey="section3.b4P2">
                      <b>Managerul</b>
                    </Trans>
                  </p>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className="shadow mb-4 p-2 border-0 wow fadeInRightBig"
                eventKey="5"
              >
                <Accordion.Header>
                  <span>
                    <i className="fa-solid fa-credit-card"></i>
                    {t("section3.b6")}
                  </span>
                  <br />
                  {t("section3.b6Description")}
                </Accordion.Header>
                <Accordion.Body>
                  <p>{t("section3.b6P1")}</p>
                  <p className="py-2">{t("section3.b6P2")}</p>
                  {t("section3.b6P3")}
                  <ul className="ps-4 pb-2">
                    <li>;</li>
                    <li>;</li>
                    <li>;</li>
                    <li>;</li>
                  </ul>
                  <a
                    className="more"
                    onClick={handleClick}
                    href="#pricing-table"
                  >
                    {t("more")}
                    <i className="fa-solid fa-angle-right"></i>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SectionFunctionalities;
