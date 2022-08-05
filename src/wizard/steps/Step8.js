import React from "react";
import { useTranslation } from "react-i18next";

const Step8 = ({ form }) => {
  const device = form.device.toString();
  const printer = form.printer.toString();

  const { t } = useTranslation();

  return (
    <div className="wizard-step-4">
      <div className={"row gap-4 text-start fs-5 justify-content-evenly"}>
        <div className="col-12 text-center">
          <h3 className="mb-5">{t("summary")}</h3>
          <div className="price mb-5">
            <div>
              {t("total")}:{" "}
              <b>
                {form.pachet?.price +
                  form.accessories.reduce((s, x) => s + x.price, 0)}
                <span>&euro;/{t("month")}</span>
              </b>
            </div>
          </div>
          <div className="d-flex row justify-content-around choices-list mb-5">
            <div className="row d-flex justify-content-around gap-2">
              <div className="col-lg-3">
                {t("section11.s1")}
                <div>{t(form.domain)}</div>
              </div>

              <div className="col-lg-3">
                {t("section11.s2")}
                <div>{t(form.shopType)}</div>
              </div>
              <div className="col-lg-3">
                {t("pachet")}
                <div>{t(form.pachet?.name)}</div>
              </div>
            </div>
            <div className="row d-flex justify-content-around gap-2">
              <div className="col-lg-3">
                {t("device")}
                <div>{device === "true" ? t("yes") : t("no")}</div>
              </div>
              <div className="col-lg-3">
                {t("section11.s5P2")}
                <div>{printer === "true" ? t("yes") : t("no")}</div>
              </div>
              {form.accessories.lenght > 0 && (
                <div className="col-lg-3">
                  {t("accesories")}
                  <div>
                    {form.accessories.map((device) => (
                      <div key={device.name}>{t(device.name)}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
