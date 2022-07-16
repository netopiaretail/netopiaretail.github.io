import React from "react";
import wizard from "../../img/wizard.svg";

const Step1 = () => {
  return (
    <div className="row gap-4 justify-content-center text-center">
      <h3>Wizard</h3>
      <h4>
        Folosește wizard-ul pentru a configura soluția după nevoia business-ului
        tău
      </h4>
      <img src={wizard} alt="NETOPIA Retail Wizard" height={400} />
    </div>
  );
};

export default Step1;
