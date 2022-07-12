import React, { useCallback } from "react";
import Stats from "./Stats";
import device from "../../img/E800.jpg";
import choice from "../../img/choice.svg";

const accesoryList = [
  {
    image: require("../../img/cantar.jpg"),
    deviceTitle: "Cantar",
    price: 35,
  },
  {
    image: require("../../img/dp25.png"),
    deviceTitle: "Imprimantă nonfiscala",
    price: 20,
  },
  {
    image: require("../../img/cititor-coduri.jpg"),
    deviceTitle: "Cititor coduri de bare",
    price: 40,
  },
  {
    image: require("../../img/sertar.jpg"),
    deviceTitle: "Sertar casa de marcat",
    price: 15,
  },
];

const Step3 = ({ form, update, ...props }) => {
  const updateAccesories = useCallback(
    (item) => {
      if (form.accesories.map((device) => device.name).includes(item.name)) {
        update("accesories", [
          ...form.accesories.filter((x) => x.name != item.name),
        ]);
      } else {
        update("accesories", [...form.accesories, item]);
      }
    },
    [form]
  );

  return (
    <div className="wizard-step-3">
      <div className="text-center">
        <h4 className="mb-4">Vrei dispozitivul nostru?</h4>
        <div className="row fs-5">
          <img
            className="choice-img"
            src={choice}
            alt="Choose"
            height={form.device ? 0 : 250}
          />
          <div>
            <label
              htmlFor="yes-device"
              onClick={() => {
                update("device", "Da");
              }}
            >
              <input
                type="radio"
                id="yes-device"
                name="device"
                className="mx-2"
              />
              Da
            </label>
            <label
              htmlFor="no-device"
              onClick={() => {
                update("device", "Nu");
              }}
            >
              <input
                type="radio"
                id="no-device"
                name="device"
                className="mx-2"
              />
              Nu
            </label>
          </div>
        </div>
        {form.device === "Da" && (
          <div>
            <img src={device} width={200} className="my-4" />

            <h4 className="my-4">Vrei accesorii?</h4>
            <div className="row gap-2 justify-content-center">
              {accesoryList.map((item) => {
                return (
                  <label
                    className={
                      form.accesories
                        .map((device) => device.name)
                        .includes(item.deviceTitle)
                        ? "col-lg-4 col-sm-6 active"
                        : "col-lg-4 col-sm-6"
                    }
                    key={item.deviceTitle}
                    onClick={() => {
                      updateAccesories({
                        name: item.deviceTitle,
                        price: item.price,
                      });
                    }}
                  >
                    <img src={item.image} width={100} />
                    <span className="text-nowrap ">
                      {item.deviceTitle} - {item.price} lei/luna
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Stats {...props} form={form} />
    </div>
  );
};

export default Step3;
