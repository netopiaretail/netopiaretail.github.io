import React from "react";
import PricingCard from "../../components/PricingCard";
import { useTranslation } from "react-i18next";

const Step4 = ({ form, update, nextStep }) => {
  const { t } = useTranslation();
  const getCardClass = (name, color) => {
    return form.pachet?.name === name
      ? `active ${color}`
      : form.pachet?.name
      ? `${color} inactive`
      : color;
  };

  return (
    <div className="text-start wizard-step-2 justify-content-between">
      <h4 className="mb-3">{t("section11.s3")}</h4>

      <div className="row justify-content-evenly gap-4">
        <PricingCard
          styles={getCardClass("Gratis", "orange")}
          price={"0"}
          onClick={() => {
            update("pachet", { name: "Gratis", price: 0 });
            nextStep();
          }}
          title={t("section10.free")}
          link={"#pricing-table"}
        >
          <p>{t("section10.freeText")}</p>
        </PricingCard>
        <PricingCard
          styles={getCardClass("Standard", "blue")}
          price={"10"}
          onClick={() => {
            update("pachet", { name: "Standard", price: 10 });
            nextStep();
          }}
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
          styles={getCardClass("Premium", "purple")}
          price={"99"}
          from={true}
          onClick={() => {
            update("pachet", { name: "Premium", price: 99 });
            nextStep();
          }}
          title={t("section10.premium")}
          link={"#pricing-table"}
        >
          <p>{t("section10.premiumText")}</p>
        </PricingCard>
      </div>
    </div>
  );
};

export default Step4;
