import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const accessoryList = [
  {
    image: require("../../img/cantar.jpg"),
    accTitle: "section11.s5P1",
    price: 5,
  },
  {
    image: require("../../img/cititor-coduri.jpg"),
    accTitle: "section11.s5P3",
    price: 4,
  },
  {
    image: require("../../img/sertar.jpg"),
    accTitle: "section11.s5P4",
    price: 3,
  },
  {
    image: require("../../img/dp25.png"),
    accTitle: "section8.c4",
    price: 3,
  },
  {
    image: require("../../img/role.jpg"),
    accTitle: "section8.c7",
    price: 3,
  },
];

const Step7 = ({ form, update }) => {
  const { t } = useTranslation();

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
      <div className="d-flex row text-center justify-content-center">
        <h4>{t("section11.s5")}</h4>
        <div className="row col-8 gap-4 justify-content-center align-items-center accesories-list my-4">
          {accessoryList.map((item) => {
            return (
              <label
                className={
                  form.accessories
                    .map((device) => t(device.name))
                    .includes(t(item.accTitle))
                    ? "col-lg-4 col-sm-6 active"
                    : "col-lg-4 col-sm-6"
                }
                key={item.accTitle}
                onClick={() => {
                  updateAccessories({
                    name: t(item.accTitle),
                    price: item.price,
                  });
                }}
              >
                <div className="accesories-icon">
                  {form.accessories
                    .map((device) => device.name)
                    .includes(t(item.accTitle)) ? (
                    <i className="fas fa-minus"></i>
                  ) : (
                    <i className="fas fa-plus"></i>
                  )}
                </div>
                <img src={item.image} height={100} />
                <span>{t(item.accTitle)}</span>
                <span>
                  {item.price} &euro;/{t("month")}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step7;
