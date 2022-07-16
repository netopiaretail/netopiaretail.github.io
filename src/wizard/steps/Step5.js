import React from "react";

const Step5 = ({ form }) => {
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
                  form.accessories.reduce((s, x) => s + x.price, 0)}
                <span>&euro;/lună</span>
              </b>
            </div>
          </div>
          <div className="d-flex row justify-content-around choices-list mb-5">
            <div className="row d-flex justify-content-around gap-2">
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
            <div className="row d-flex justify-content-around gap-2">
              <div className="col-lg-3">
                Pachetul<div>{form.pachet?.name}</div>
              </div>
              <div className="col-lg-3">
                Dispozitiv
                <div>
                  {device === "true"
                    ? device.replace("true", "Da")
                    : device.replace("false", "Nu")}
                </div>
              </div>
              <div className="col-lg-3">
                Accesorii
                <div>
                  {form.accessories.map((device) => (
                    <div key={device.name}>{device.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
