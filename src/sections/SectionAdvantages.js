import img1 from "../img/integrareNP.svg";
import img2 from "../img/handle.svg";
import img3 from "../img/customize.svg";
// import img4 from "../img/netopiabusiness.svg";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

const SectionAdvantages = () => {
  const { t } = useTranslation();

  return (
    <section id="avantaje" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="heading">{t("section9.title")}</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-8 my-4 wow fadeInUp">
            <Card
              image={img1}
              imageTitle={"NETOPIA Payments"}
              title={t("section9.b1")}
              content={t("section9.b1Text")}
            />
          </div>
          <div className="col-lg-3 col-sm-8 my-4 wow fadeInUp">
            <Card
              image={img2}
              imageTitle={"Vanzari"}
              title={t("section9.b2")}
              content={t("section9.b2Text")}
            />
          </div>
          <div className="col-lg-3 col-sm-8 my-4 wow fadeInUp">
            <Card
              image={img3}
              imageTitle={"Personalizeaza"}
              title={t("section9.b3")}
              content={t("section9.b3Text")}
            />
          </div>
          {/* <div className="col-lg-3 col-sm-8 my-4 wow fadeInUp">
            <Card
              image={img4}
              imageTitle={"NETOPIA Card"}
              title={t("section9.b4")}
              content={
                <Trans i18nKey="section9.b4Text">
                  <a
                    href="https://netopia-payments.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    business NETOPIA
                  </a>
                </Trans>
              }
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SectionAdvantages;
