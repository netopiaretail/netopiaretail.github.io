import React from "react";
import device from "../../img/printer.jpg";
import printers from "../../img/printers.png";
import { useTranslation } from "react-i18next";

const Step6 = ({ form, update }) => {
  const { t } = useTranslation();

  return (
    <div className="wizard-step-3">
      <div className="d-flex row text-center">
        <h4>{t("section11.s6")}</h4>
        <div className="row fs-5 my-4">
          <ul
            className="list-inline text-center switch-toggler"
            role="tablist"
            id="switch-toggle-tab"
          >
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  update("printer", true);
                }}
              >
                {t("yes")}
              </a>
            </li>
            <li>
              <label
                className={form.printer ? "on switch" : "off switch"}
                onClick={() => {
                  update("printer", !form.printer);
                }}
              >
                <span className="slider round"></span>
              </label>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => {
                  update("printer", false);
                }}
              >
                {t("no")}
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <div className="device-card">
            <div
              className={
                form.printer ? "device-card-inner" : "device-card-inner active"
              }
            >
              <div className="flip-card-front d-flex row justify-content-center align-items-center">
                <div className="col-sm-6 col-lg-4">
                  <img src={device} />
                </div>

                <div className="text-start col-sm-12 col-lg-8">
                  <h4 className="mb-2">{t("section11.s6P1")}</h4>
                  <p>{t("section11.s6P2")}</p>
                </div>
              </div>
              <div className="flip-card-back d-flex row gap-3 align-content-center justify-content-center text-start">
                <img width={300} src={printers} />

                <h5 className="mb-2">{t("section11.s6P3")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
