import React from "react";
import domains from "../../resources/wizard-domains.json";
import retailList from "../../resources/retail-types.json";
import horecaList from "../../resources/horeca-types.json";
import shopTypes from "../../resources/shop-types.json";

const Step2 = ({ form, update }) => {
  return (
    <div className="wizard-step-1">
      <h4>Domeniu de activitate*</h4>
      <div className="wizard-block wizard-domain">
        {domains.map((domain) => (
          <label
            key={domain.name}
            className={form.domain === domain.name ? "active" : ""}
            onClick={() => {
              update("domain", domain.name);
              update("activityType", null);
            }}
          >
            <i className={domain.icon}></i> {domain.label}
          </label>
        ))}
      </div>

      {form.domain === "retail" && (
        <>
          <h5>Tip de activitate*</h5>
          <div className="wizard-block wizard-activity-type gap-2 retail">
            {retailList.map((item) => (
              <label
                key={item.iconTitle}
                className={form.activityType === item.iconTitle ? "active" : ""}
                onClick={() => {
                  update("activityType", item.iconTitle);
                }}
              >
                <i className={item.icon}></i> {item.iconTitle}
              </label>
            ))}
          </div>
        </>
      )}
      {form.domain === "horeca" && (
        <>
          <h5>Tip de activitate*</h5>
          <div className="wizard-block wizard-activity-type gap-2 horeca">
            {horecaList.map((item) => (
              <label
                key={item.iconTitle}
                className={form.activityType === item.iconTitle ? "active" : ""}
                onClick={() => {
                  update("activityType", item.iconTitle);
                }}
              >
                <i className={item.icon}></i> {item.iconTitle}
              </label>
            ))}
          </div>
        </>
      )}
      <h4>Tip de magazin*</h4>
      <div className="wizard-block wizard-shop-type">
        {shopTypes.map((shopType) => (
          <label
            key={shopType.name}
            className={form.shopType === shopType.name ? "active" : ""}
            onClick={() => {
              update("shopType", shopType.name);
            }}
          >
            <i className={shopType.icon}></i> {shopType.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Step2;
