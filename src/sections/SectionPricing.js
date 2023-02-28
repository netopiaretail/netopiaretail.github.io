import PricingCard from "../components/PricingCard";
import Accordion from "react-bootstrap/Accordion";
import PricingTable from "./PricingTable";
import { useTranslation } from "react-i18next";

const SectionPricing = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="section-area">
      <div className="container">
        <div className="text-center pb-4">
          <h3 className="heading">{t("menu.l4")}</h3>
        </div>
        <div className="row justify-content-evenly gap-4">
          <PricingCard
            styles={("Gratis", "orange")}
            price={"0"}
            title={t("section10.free")}
            link={"#pricing-table"}
          >
            <p>{t("section10.freeText")}</p>
          </PricingCard>
          <PricingCard
            styles={("Standard", "blue")}
            price={"100"}
            title={t("section10.standard")}
            link={"#pricing-table"}
          >
            <p>{t("section10.standardText")}</p>
            <ul>
              <li>{t("section10.standardText1")}</li>
              <li>{t("section10.standardText2")}</li>
              <li>{t("section10.standardText3")}</li>
            </ul>
          </PricingCard>
          <PricingCard
            styles={("Premium", "purple")}
            price={"200"}
            from={true}
            title={t("section10.premium")}
            link={"#pricing-table"}
          >
            <p>{t("section10.premiumText")}</p>
          </PricingCard>
        </div>

        <Accordion className="pt-5 wow fadeInUpBig" id="pricing-table">
          <Accordion.Item eventKey="0">
            <Accordion.Header id="pricing-btn">
              {t("section10.title")}
            </Accordion.Header>
            <Accordion.Body>
              <PricingTable />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default SectionPricing;
