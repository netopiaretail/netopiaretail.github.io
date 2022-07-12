import React from "react";
import Stats from "./Stats";

const Step2 = ({ form, update, ...props }) => {
  return (
    <div className="text-start wizard-step-2">
      <h4 className="mb-3">Alege pachetul potrivit business-ului tau:</h4>
      <div className="d-flex column flex-wrap justify-content-evenly">
        <div className="row">
          <div
            className={
              form.pachet?.name === "Gratis"
                ? "active btn pricing-btn fs-5"
                : "btn pricing-btn fs-5"
            }
            onClick={() => update("pachet", { name: "Gratis", price: 0 })}
          >
            Gratis
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <a
            href="#pricing"
            className="text-center fs-6 fw-light text-secondary"
          >
            Vezi detalii
          </a>
        </div>
        <div className="row">
          <div
            className={
              form.pachet?.name === "Standard"
                ? "active btn pricing-btn fs-5"
                : "btn pricing-btn fs-5"
            }
            onClick={() => update("pachet", { name: "Standard", price: 40 })}
          >
            Standard
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <a
            href="#pricing"
            className="text-center fs-6 fw-light text-secondary"
          >
            Vezi detalii
          </a>
        </div>
        <div className="row">
          <div
            className={
              form.pachet?.name === "Premium"
                ? "active btn pricing-btn fs-5"
                : "btn pricing-btn fs-5"
            }
            onClick={() => update("pachet", { name: "Premium", price: 80 })}
          >
            Premium
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <a
            href="#pricing"
            className="text-center fs-6 fw-light text-secondary"
          >
            Vezi detalii
          </a>
        </div>
      </div>

      <Stats {...props} form={form} />
    </div>
  );
};

export default Step2;
