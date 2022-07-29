import React from "react";
import domains from "../../resources/wizard-domains";
import { useTranslation } from "react-i18next";

const Step2 = ({ form, update, nextStep }) => {
  const { t } = useTranslation();

  return (
    <div className="wizard-step-1">
      <h4>{t("section11.s1")}</h4>
      <div className="wizard-block wizard-domain mt-5 fs-4">
        {domains.map((domain) => (
          <label
            key={domain.name}
            className={form.domain === domain.name ? "active" : ""}
            onClick={() => {
              update("domain", domain.name);
              nextStep();
            }}
          >
            <img
              src={require(`../../img/${domain.icon}`)}
              className="mb-4"
              height={300}
            />
            {domain.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step2;
