import React from "react";
import { useTranslation } from "react-i18next";
import data0 from "../resources/retail-types.json";
import data1 from "../resources/horeca-types.json";

const InputSugesstions = () => {
  const { t } = useTranslation();
  let inputField = document.getElementById("input");
  let ulField = document.getElementById("suggestions");

  const autoComplete = (inputValue) => {
    const data = data0.concat(data1);
    return data.filter(({ iconTitle }) =>
      t(iconTitle).toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const changeAutoComplete = ({ target }) => {
    let data = target.value;
    ulField.innerHTML = ``;
    if (data.length) {
      autoComplete(data).forEach(({ iconTitle }) => {
        ulField.innerHTML = ulField.innerHTML + `<li>${t(iconTitle)}</li>`;
      });
    }
  };

  const selectItem = ({ target }) => {
    if (target.tagName === "LI") {
      inputField.value = target.textContent;
      ulField.innerHTML = ``;
    }
  };

  const handleChange = () => {
    inputField.addEventListener("input", changeAutoComplete);
    ulField.addEventListener("click", selectItem);
  };

  return (
    <div className="suggestion-container">
      <div>
        <input
          placeholder={t("section12.f4")}
          className="form-control"
          type="search"
          id="type"
          onKeyUp={handleChange}
        />
      </div>
      <div className="list">
        <ul id="suggestions"></ul>
      </div>
    </div>
  );
};

export default InputSugesstions;
