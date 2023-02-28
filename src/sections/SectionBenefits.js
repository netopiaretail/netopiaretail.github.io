import Card from "../components/Card";
import img1 from "../img/automatizare.svg";
import img2 from "../img/analize.svg";
import img3 from "../img/stocks.svg";
import img4 from "../img/rapoarte.svg";
import { useTranslation } from "react-i18next";

const SectionBenefits = () => {
  const { t } = useTranslation();

  return (
    <section id="beneficii" className="section-area">
      <div className="container">
        <div className="text-center">
          <h3 className="heading">{t("section7.title")}</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img1}
              imageTitle={t("section7.b1")}
              title={t("section7.b1")}
              content={t("section7.b1Text")}
            />
          </div>
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img2}
              imageTitle={t("section7.b2")}
              title={t("section7.b2")}
              content={t("section7.b2Text")}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img3}
              imageTitle={t("section7.b3")}
              title={t("section7.b3")}
              content={t("section7.b3Text")}
            />
          </div>
          <div className="col-lg-6 col-sm-8 my-4">
            <Card
              image={img4}
              imageTitle={t("section7.b4")}
              title={t("section7.b4")}
              content={t("section7.b4Text")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBenefits;
