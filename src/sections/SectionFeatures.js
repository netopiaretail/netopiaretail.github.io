import Card from "../components/Card";
import IconText from "../components/IconText";
import retailList from "../resources/retail-types.json";
import horecaList from "../resources/horeca-types.json";
import { Trans, useTranslation } from "react-i18next";

const SectionFeatures = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="section-area">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div>
            <div className="text-center pb-4">
              <h3 className="title fw-normal">
                <Trans i18nKey="section1.title">
                  <span className="fw-bold">
                    Softul de gestiune și administrare vânzări NETOPIA Retail{" "}
                  </span>
                  conține soluții și programe IT de tip On Cloud și Android
                  pentru:
                </Trans>
              </h3>
            </div>
          </div>
        </div>

        <div className="features-card row align-items-center">
          <div className="col-lg-6 mb-4 order-1 col-sm-12 p-3 wow fadeInLeftBig">
            <Card
              title={t("section1.retail.title")}
              content={t("section1.retail.text")}
              styles={"text-start"}
            />
          </div>

          <div
            className="mb-4 col-lg-6 col-sm-12 p-3 order-2 wow fadeInRightBig ciclegraph"
            style={{ ["--count"]: retailList.length }}
          >
            {retailList.map((el, index) => (
              <IconText
                key={index + el}
                index={index}
                iconTitle={t(el.iconTitle)}
                icon={el.icon}
              />
            ))}
          </div>
        </div>

        <div className="features-card row align-items-center">
          <div
            className="mb-4 col-lg-6 col-md-12 p-3 order-2 order-lg-1 wow fadeInLeftBig ciclegraph"
            style={{ ["--count"]: horecaList.length }}
          >
            {horecaList.map((el, index) => (
              <IconText
                key={index}
                index={index}
                iconTitle={t(el.iconTitle)}
                icon={el.icon}
              />
            ))}
          </div>
          <div className="mb-4 col-lg-6 col-md-12 p-3 order-1 order-lg-2 wow fadeInRightBig">
            <Card
              title={t("section1.horeca.title")}
              content={t("section1.horeca.text")}
              styles={"text-start"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
