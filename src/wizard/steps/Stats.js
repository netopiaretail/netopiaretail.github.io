import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Stats = ({ nextStep, previousStep, totalSteps, currentStep, form }) => {
  const canGoNext = () => {
    switch (currentStep) {
      case 2:
        return form.activityType && form.domain && form.shopType;
      case 3:
        return form.pachet;
      case 4:
        return typeof form.device == "boolean";
    }
  };

  const validate = () => {
    if (canGoNext()) {
      nextStep();
    }
  };

  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setChecked(true);
    } else setChecked(false);
  };

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center my-5">
      {currentStep > 1 && (
        <div className="back-btn" onClick={previousStep}>
          <i className="fa-solid fa-chevron-left" onClick={previousStep}></i>
          &nbsp;Înapoi
        </div>
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
        <div className="d-flex row align-items-center justify-content-center gap-4">
          <button
            onClick={handleShow}
            className="btn secondary-btn-gradient w-auto"
          >
            <i className="fa-solid fa-paper-plane"></i> Trimite configurația pe
            email
          </button>
          <button className="btn main-btn w-auto">
            <i className="fa-solid fa-user-plus"></i> Înscrie-te
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="text-start">
              <Form>
                <Form.Group className="mb-3" controlId="form.ControlInput1">
                  <Form.Label className="fs-5 fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.ControlCheckbox1">
                  <Form.Check
                    type={"checkbox"}
                    onChange={handleChange}
                    label={
                      "Sunt de acord ca datele mele trimise să fie colectate și stocate."
                    }
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-primary"
                className="btn"
                onClick={handleClose}
              >
                Închide
              </Button>
              <button
                className="btn main-btn"
                onClick={handleClose}
                disabled={!checked}
              >
                Submit
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Stats;
