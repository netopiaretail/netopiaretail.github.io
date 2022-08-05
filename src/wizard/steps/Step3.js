import React from "react";
import { useTranslation } from "react-i18next";

import shopTypes from "../../resources/shop-types.json";

const Step3 = ({ form, update, nextStep }) => {
  const { t } = useTranslation();

  return (
    <div className="wizard-step-1">
      <h4>{t("section11.s2")}</h4>
      <div className="wizard-block wizard-shop-type fs-4 mt-5">
        {shopTypes.map((shopType) => {
          return (
            <label
              key={shopType.name}
              className={form.shopType === t(shopType.name) ? "active" : ""}
              onClick={() => {
                update("shopType", t(shopType.name));
                nextStep();
              }}
            >
              <img
                src={require(`../../img/${shopType.icon}`)}
                className="mb-4"
                height={200}
              />{" "}
              {t(shopType.name)}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
