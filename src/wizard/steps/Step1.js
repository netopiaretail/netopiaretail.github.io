import React from "react";
import wizard from "../../img/wizard.svg";
import { useTranslation } from "react-i18next";

const Step1 = () => {
  const { t } = useTranslation();

  return (
    <div className="row gap-4 justify-content-center text-center">
      <h3>Wizard</h3>
      <h4>{t("section11.title")}</h4>
      <img src={wizard} alt="NETOPIA Retail Wizard" height={400} />
    </div>
  );
};

export default Step1;
