import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step0 from "./steps/Step0";
import CoolNav from "./CoolNav";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {
      accesories: [],
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
    <div className="container wizard shadow rounded wow fadeInUpBig py-4">
      <div>
        <StepWizard
          className="p-4"
          onStepChange={onStepChange}
          isHashEnabled
          instance={setInstance}
          nav={<CoolNav currentStep={state.currentStep} />}
        >
          <Step0 hashKey={"Step0"} />
          <Step1 hashKey={"Step1"} update={updateForm} form={state.form} />
          <Step2 hashKey={"Step2"} update={updateForm} form={state.form} />
          <Step3 hashKey={"Step3"} update={updateForm} form={state.form} />
          <Step4 hashKey={"Step4"} update={updateForm} form={state.form} />
        </StepWizard>
      </div>
    </div>
  );
};

export default Wizard;
