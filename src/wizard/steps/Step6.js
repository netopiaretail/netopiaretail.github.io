import React from "react";
import device from "../../img/e800.png";
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
                form.device ? "device-card-inner" : "device-card-inner active"
              }
            >
              <div className="flip-card-front d-flex row justify-content-center align-items-center">
                <div className="col-sm-6 col-lg-4">
                  <img src={device} />
                </div>

                <div className="text-start col-sm-12 col-lg-8">
                  <h4 className="mb-2">PAX E800</h4>
                  <p>{t("section11.s4P1")}</p>
                  <ul>
                    <li>{t("section11.s4P2")}</li>
                    <li>{t("section11.s4P3")}</li>
                  </ul>
                </div>
              </div>
              <div className="flip-card-back d-flex row gap-3 align-content-center text-start">
                <h5 className="mb-2">{t("section11.s4P21")}</h5>
                <div className="d-flex column gap-2 align-items-center">
                  <i className="fa fa-android"></i>
                  <p>{t("section11.s4P22")}</p>
                </div>
                <div className="d-flex column gap-2 align-items-center">
                  <i className="fa-brands fa-usb"></i>
                  <p>{t("section11.s4P23")}</p>
                </div>
                <div className="d-flex column gap-2 align-items-center">
                  <i className="fa-solid fa-barcode"></i>
                  <p>{t("section11.s4P24")}</p>
                </div>
                <div className="d-flex column gap-2 align-items-center">
                  <i className="fa-solid fa-weight-scale"></i>
                  <p>{t("section11.s4P25")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
