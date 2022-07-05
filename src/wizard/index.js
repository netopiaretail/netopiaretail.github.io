import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step4 from "./steps/Step4";
import Step0 from "./steps/Step0";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {},
  });
  console.log("state", state);
  const updateForm = (key, value) =>
    updateState((oldState) => ({
      ...oldState,
      form: {
        ...oldState.form,
        [key]: value,
      },
    }));

  // Do something on step change
  const onStepChange = () => {
    // console.log(stats);
  };

  const setInstance = (SW) =>
    updateState((oldState) => ({
      ...oldState,
      SW,
    }));

  return (
    <div className="container shadow rounded p-4">
      <h3 className="mb-4">Wizard</h3>

      <div>
        <StepWizard
          className="wizard"
          onStepChange={onStepChange}
          isHashEnabled
          instance={setInstance}
        >
          <Step0 hashKey={"Step0"} />
          <Step1 hashKey={"Step1"} update={updateForm} form={state.form} />
          <Step2 hashKey={"Step2"} update={updateForm} form={state.form} />
          <Step4 hashKey={"Step4"} update={updateForm} form={state.form} />
        </StepWizard>
      </div>
    </div>
  );
};

export default Wizard;
