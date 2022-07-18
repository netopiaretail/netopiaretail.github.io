import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import CoolNav from "./CoolNav";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {
      accessories: [],
      device: true,
    },
  });

  const updateForm = (key, value) =>
    updateState((oldState) => ({
      ...oldState,
      form: {
        ...oldState.form,
        [key]: value,
      },
    }));

  // Do something on step change
  const onStepChange = (stats) => {
    console.log("ss", stats);
  };

  const setInstance = (SW) =>
    updateState((oldState) => ({
      ...oldState,
      SW,
    }));

  return (
    <div className="container wizard rounded wow fadeInUpBig py-4">
      <StepWizard
        className="p-4 flex-column-reverse d-flex flex-1 justify-content-between"
        onStepChange={onStepChange}
        instance={setInstance}
        nav={<CoolNav currentStep={state.currentStep} form={state.form} />}
      >
        <Step1 />
        <Step2 update={updateForm} form={state.form} />
        <Step3 update={updateForm} form={state.form} />
        <Step4 update={updateForm} form={state.form} />
        <Step5 update={updateForm} form={state.form} />
      </StepWizard>
    </div>
  );
};

export default Wizard;
