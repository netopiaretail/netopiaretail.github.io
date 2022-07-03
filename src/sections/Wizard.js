import React, { useState } from "react";
import { Form } from "react-bootstrap";
import StepWizard from "react-step-wizard";

const Wizard = () => {
  const [state, updateState] = useState({
    form: {},
  });
  console.log("state", state);
  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {
    // console.log(stats);
  };

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  return (
    <div className="container shadow rounded p-4">
      <h3 className="mb-4">Wizard</h3>

      <div>
        <div className="row">
          <div className={`col-12 col-sm-6 text-start offset-sm-3`}>
            <StepWizard
              onStepChange={onStepChange}
              isHashEnabled
              instance={setInstance}
            >
              <First hashKey={"FirstStep"} update={updateForm} />
              <Second form={state.form} />
              <Last hashKey={"TheEnd!"} />
            </StepWizard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;

const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
  <div>
    <hr />
    {step > 1 && (
      <button className="btn text-black" onClick={previousStep}>
        Go Back
      </button>
    )}
    {step < totalSteps ? (
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

/** Steps */

const First = (props) => {
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="domeniu" onChange={update}>
        <Form.Label>Domeniu de activitate</Form.Label>
        <Form.Check type="radio" label="Retail" value="retail" name="domeniu" />
        <Form.Check type="radio" label="HoReCa" value="horeca" name="domeniu" />
      </Form.Group>

      {"domeniuValue" === "retail" && (
        <Form.Group className="mb-3" controlId="tipul" onChange={update}>
          <Form.Label>Tip de activitate</Form.Label>
          <Form.Check
            type="radio"
            label="Magazin universal"
            value="magazin-universal"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Magazin IT&C & Electrocasnice"
            value="magazin-itc"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Magazin de îmbrăcăminte"
            value="magazin-imbracaminte"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Farmacie"
            value="farmacie"
            name="tipul"
          />
          <Form.Check type="radio" label="Beauty" value="beauty" name="tipul" />
          <Form.Check
            type="radio"
            label="Cash & Carry"
            value="cash-carry"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Hypermarket"
            value="hypermarket"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Supermarket"
            value="supermarket"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Discounter"
            value="discounter"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Proximitate"
            value="proximitate"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="News & Convenience"
            value="news-convenience"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Librărie & Papetăriee"
            value="librărie-papetărie"
            name="tipul"
          />
        </Form.Group>
      )}
      {"domeniuValue" === "horeca" && (
        <Form.Group className="mb-3" controlId="tipul" onChange={update}>
          <Form.Label>Tip de activitate</Form.Label>
          <Form.Check
            type="radio"
            label="Ceainărie"
            value="ceainărie"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Cofetărie"
            value="cofetărie"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Cafenea"
            value="cafenea"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Brutărie"
            value="brutărie"
            name="tipul"
          />
          <Form.Check type="radio" label="Beauty" value="beauty" name="tipul" />
          <Form.Check
            type="radio"
            label="Patiserie & Covrigărie"
            value="patiserie-covrigărie"
            name="tipul"
          />
          <Form.Check type="radio" label="Pub" value="pub" name="tipul" />
          <Form.Check
            type="radio"
            label="Berărie"
            value="berărie"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Vinotecă & Cramă"
            value="vinotecă-cramă"
            name="tipul"
          />
          <Form.Check
            type="radio"
            label="Pescărie"
            value="pescărie"
            name="tipul"
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="magazin" onChange={update}>
        <Form.Label>Vei folosi soluția retail pentru magazin:</Form.Label>
        <Form.Check type="radio" label="Fizic" value="fizic" name="magazin" />
        <Form.Check type="radio" label="Online" value="online" name="magazin" />
        <Form.Check
          type="radio"
          label="Fizic si online"
          value="fizic-online"
          name="magazin"
        />
      </Form.Group>
      <Stats step={1} {...props} />
    </div>
  );
};

const Second = (props) => {
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };
  return (
    <div>
      <Form.Group className="mb-3" controlId="domeniu" onChange={update}>
        <Form.Label>
          Cum vrei să te sprijinim în dezvoltarea afacerii?
        </Form.Label>
        <Form.Check type="radio" label="Retail" value="retail" name="domeniu" />
        <Form.Check type="radio" label="HoReCa" value="horeca" name="domeniu" />
      </Form.Group>

      <Stats step={2} {...props} />
    </div>
  );
};

const Last = (props) => {
  const submit = () => {
    alert("You did it! Yay!"); // eslint-disable-line
  };

  return (
    <div>
      <div className={"text-center"}>
        <h3>This is the last step in this example!</h3>
        <hr />
      </div>
      <Stats step={4} {...props} nextStep={submit} />
    </div>
  );
};
