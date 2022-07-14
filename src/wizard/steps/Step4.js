import React from "react";
import Stats from "./Stats";

const Step4 = ({ form, update, ...props }) => {
  const device = form.device.toString();

  return (
    <div className="wizard-step-4">
      <div className={"row gap-4 text-start fs-5 justify-content-evenly"}>
        <div className="col-12">
          <div className="price mb-5">
            <div>
              Total:{" "}
              <b>
                {form.pachet?.price +
                  form.accesories.reduce((s, x) => s + x.price, 0)}
                <span>&euro;/lună</span>
              </b>
            </div>
          </div>
          <div className="d-flex row justify-content-around choices-list mb-5">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-3">
                Domeniul de activitate<div>{form.domain}</div>
              </div>
              <div className="col-lg-3">
                Tip de activitate<div>{form.activityType}</div>
              </div>
              <div className="col-lg-3">
                Magazin<div>{form.shopType}</div>
              </div>
            </div>
            <div className="row d-flex justify-content-around">
              <div className="col-lg-3">
                Pachetul<div>{form.pachet?.name}</div>
              </div>
              <div className="col-lg-3">
                Dispozitiv
                <div>
                  {device == "true"
                    ? device.replace("true", "Da")
                    : device.replace("false", "Nu")}
                </div>
              </div>
              <div className="col-lg-3">
                Accesorii
                <div>
                  {form.accesories.map((device) => (
                    <div key={device.name}>{device.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats {...props} form={form} />
    </div>
  );
};

export default Step4;
