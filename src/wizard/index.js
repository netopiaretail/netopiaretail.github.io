import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step0 from "./steps/Step0";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {
      accesories: [],
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
    <div className="container wizard shadow rounded p-4 wow fadeInUpBig">
      <h3>Wizard</h3>
      <div className="row justify-content-center align-content-center">
        <StepWizard
          className="p-4"
          onStepChange={onStepChange}
          isHashEnabled
          instance={setInstance}
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
