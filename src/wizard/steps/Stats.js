import React from "react";

const Stats = ({ nextStep, previousStep, totalSteps, currentStep, form }) => {
  const canGoNext = () => {
    switch (currentStep) {
      case 2:
        return form.activityType && form.domain && form.shopType;
      case 3:
        return form.pachet;
      case 4:
        return form.device;
    }
  };

  const validate = () => {
    if (canGoNext()) {
      nextStep();
    }
  };

  return (
    <div className="d-flex gap-4 justify-content-center mt-4">
      {currentStep > 1 && (
        <button className="btn main-btn" onClick={previousStep}>
          Înapoi
        </button>
      )}
      {currentStep < totalSteps ? (
        <button
          className="btn main-btn next"
          onClick={() => validate()}
          disabled={!canGoNext()}
        >
          Continuă
        </button>
      ) : (
        <button className="btn main-btn" onClick={nextStep}>
          Termină
        </button>
      )}
    </div>
  );
};

export default Stats;
