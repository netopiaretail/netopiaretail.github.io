import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import CoolNav from "./CoolNav";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {
      accessories: [],
      device: true,
      printer: true,
    },
  });

  const canGoNext = () => {
    switch (state.currentStep) {
      case 1:
        return true;
      case 2:
        return state.form.domain;
      case 3:
        return state.form.shopType;
      case 4:
        return state.form.pachet;
      case 5:
        return typeof state.form.device == "boolean";
      case 6:
        return typeof state.form.printer == "boolean";
      case 7:
        return typeof state.form.accessories;
    }
  };

  const updateForm = (key, value) => {
    updateState((oldState) => ({
      ...oldState,
      form: {
        ...oldState.form,
        [key]: value,
      },
    }));
  };

  const validate = () => {
    if (canGoNext()) {
      state.nextStep();
    }
  };

  // Do something on step change
  const onStepChange = (stats) => {
    console.log("ss", stats);
  };

  const setInstance = (SW) => {
    updateState((oldState) => ({
      ...oldState,
      SW,
    }));
  };

  return (
    <section className="section-area">
      <div className="container wizard rounded wow fadeInUpBig py-4">
        <StepWizard
          className="py-4 flex-column-reverse d-flex flex-1 justify-content-between"
          onStepChange={onStepChange}
          instance={setInstance}
          nav={<CoolNav currentStep={state.currentStep} form={state.form} />}
        >
          <Step1 />
          <Step2 update={updateForm} form={state.form} nextStep={validate()} />
          <Step3 update={updateForm} form={state.form} nextStep={validate()} />
          <Step4 update={updateForm} form={state.form} nextStep={validate()} />
          <Step5 update={updateForm} form={state.form} />
          <Step6 update={updateForm} form={state.form} />
          <Step7 update={updateForm} form={state.form} />
          <Step8 update={updateForm} form={state.form} />
        </StepWizard>
      </div>
    </section>
  );
};

export default Wizard;
