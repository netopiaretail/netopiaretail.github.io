import React, { useCallback } from "react";
import device from "../../img/e800.png";

const accessoryList = [
  {
    image: require("../../img/cantar.jpg"),
    deviceTitle: "Cantar",
    price: 5,
  },
  {
    image: require("../../img/dp25.png"),
    deviceTitle: "Imprimantă nonfiscala",
    price: 2,
  },
  {
    image: require("../../img/cititor-coduri.jpg"),
    deviceTitle: "Cititor coduri de bare",
    price: 4,
  },
  {
    image: require("../../img/sertar.jpg"),
    deviceTitle: "Sertar casa de marcat",
    price: 3,
  },
];

const Step4 = ({ form, update }) => {
  const updateAccessories = useCallback(
    (item) => {
      if (form.accessories.map((device) => device.name).includes(item.name)) {
        update("accessories", [
          ...form.accessories.filter((x) => x.name !== item.name),
        ]);
      } else {
        update("accessories", [...form.accessories, item]);
      }
    },
    [form]
  );

  return (
    <div className="wizard-step-3">
      <div className="d-flex row text-center">
        <div className="col-lg-6 col-sm-12">
          <h4>Vrei dispozitivul nostru?</h4>
          <div className="row fs-5 my-4">
            <ul
              className="list-inline text-center switch-toggler"
              role="tablist"
              id="switch-toggle-tab"
            >
              <li className="cursor-pointer">
                <a
                  onClick={() => {
                    update("device", true);
                  }}
                >
                  Da
                </a>
              </li>
              <li>
                <label
                  className={form.device ? "on switch" : "off switch"}
                  onClick={() => {
                    update("device", !form.device);
                  }}
                >
                  <span className="slider round"></span>
                </label>
              </li>
              <li className="cursor-pointer">
                <a
                  onClick={() => {
                    update("device", false);
                  }}
                >
                  Nu
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
                  <img
                    className="col-sm-10 col-lg-6"
                    src={device}
                    width={200}
                  />
                  <div className="text-start col-sm-12 col-lg-6">
                    <h4 className="mb-2">PAX E800</h4>
                    Adaugă un plus de eleganță magazinului tău. Îți oferim unul
                    dintre cele mai moderne și rapide dispozitive care va impune
                    un standard de calitate ce va fi apreciat de oricare dintre
                    clienții tăi. Este ușor de integrat cu orice tip de casă de
                    marcat și alte accesorii necesare pentru a finaliza plățile.
                  </div>
                </div>
                <div className="flip-card-back d-flex flex-row justify-content-center gap-4 ">
                  <p>Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>Vrei accesorii?</h4>
          <div className="row gap-2 justify-content-center align-items-center accessories-list my-4">
            {accessoryList.map((item) => {
              return (
                <label
                  className={
                    form.accessories
                      .map((device) => device.name)
                      .includes(item.deviceTitle)
                      ? "col-lg-4 col-sm-6 active"
                      : "col-lg-4 col-sm-6"
                  }
                  key={item.deviceTitle}
                  onClick={() => {
                    updateAccessories({
                      name: item.deviceTitle,
                      price: item.price,
                    });
                  }}
                >
                  <img src={item.image} width={100} />
                  <span>
                    {item.deviceTitle} - {item.price} euro/luna
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
