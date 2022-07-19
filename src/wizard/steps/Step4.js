import React, { useCallback } from "react";
import device from "../../img/e800.png";

const accessoryList = [
  {
    image: require("../../img/cantar.jpg"),
    deviceTitle: "Cântar.",
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
    deviceTitle: "Sertar casă de marcat",
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
        <div className="col-lg-7 col-sm-12">
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
                  <div className="col-sm-6 col-lg-4">
                    <img src={device} />
                  </div>

                  <div className="text-start col-sm-12 col-lg-8">
                    <h4 className="mb-2">PAX E800</h4>
                    <p>
                      Îți oferim unul dintre cele mai moderne și rapide
                      dispozitive de pe piață, ușor de integrat cu orice tip de
                      casă de marcat și alte accesorii necesare pentru a
                      finaliza plățile. Pax e800 dispune de 2 ecrane
                      touchscreen:
                    </p>
                    <ul>
                      <li>
                        ecranul 1 are 20 de centimetri și poate fi folosit
                        ca&nbsp;
                        <b>spațiu publicitar</b> (pentru oferte, magazin,
                        parteneri și altele);
                      </li>
                      <li>
                        ecranul 2 are 31.75 centimentri pentru ca angajații tăi
                        să fie mai eficienți și să scadă timpul pe care îl
                        petrece clientul tău la casă.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flip-card-back d-flex row gap-3 align-content-center text-start">
                  <h5 className="mb-2">
                    Dacă nu vrei să folosești dispozitivul nostru, nu este nicio
                    problemă. Însă, dispozitivul tău trebuie să îndeplinească un
                    număr de cerințe tehnice obligatorii:
                  </h5>
                  <div className="d-flex column gap-2 align-items-center">
                    <i className="fa fa-android"></i>
                    <p>
                      Să aibă minimum versiunea de <b>Android 6</b>;
                    </p>
                  </div>
                  <div className="d-flex column gap-2 align-items-center">
                    <i className="fa-brands fa-usb"></i>
                    <p>
                      Să aibă{" "}
                      <b>
                        port USB dedicat pentru casa de marcat (sau blueetooth)
                      </b>
                      ;
                    </p>
                  </div>
                  <div className="d-flex column gap-2 align-items-center">
                    <i className="fa-solid fa-barcode"></i>
                    <p>
                      Să aibă un{" "}
                      <b>
                        port USB dedicat pentru cititorul de cod de bare (sau
                        blueetooth)
                      </b>
                      ;
                    </p>
                  </div>
                  <div className="d-flex column gap-2 align-items-center">
                    <i className="fa-solid fa-weight-scale"></i>
                    <p>
                      Să aibă un <b>port USB dedicat pentru cântar.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <h4>Vrei accesorii?</h4>
          <div className="row gap-4 justify-content-center align-items-center accesories-list my-4">
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
                  <div className="accesories-icon">
                    {form.accessories
                      .map((device) => device.name)
                      .includes(item.deviceTitle) ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                  <img src={item.image} height={100} />
                  <span>{item.deviceTitle}</span>
                  <span>{item.price} &euro;/luna</span>
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
