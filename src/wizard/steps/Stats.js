import React from "react";

const Stats = ({ nextStep, previousStep, totalSteps, currentStep }) => {
  return (
    <div>
      <hr />
      {currentStep > 1 && (
        <button className="btn main-btn text-black" onClick={previousStep}>
          Go Back
        </button>
      )}
      {currentStep < totalSteps ? (
        <button className="btn main-btn" onClick={nextStep}>
          Continue
        </button>
      ) : (
        <button className="btn main-btn" onClick={nextStep}>
          Finish
        </button>
      )}
    </div>
  );
};

export default Stats;
