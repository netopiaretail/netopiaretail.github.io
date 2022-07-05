import React from "react";

const Step0 = (props) => {
  return (
    <div className="text-center">
      <h4>
        Foloseste wizard-ul pentru a configura solutia dupa nevoie business-ului
        tau
      </h4>
      <span className="btn main-btn" onClick={props.nextStep}>
        Incepe
      </span>
    </div>
  );
};

export default Step0;
