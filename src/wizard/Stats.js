import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const Stats = ({ nextStep, previousStep, totalSteps, currentStep, form }) => {
  const { t } = useTranslation();

  const canGoNext = () => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return form.domain;
      case 3:
        return form.shopType;
      case 4:
        return form.pachet;
      case 5:
        return typeof form.device == "boolean";
      case 6:
        return typeof form.printer == "boolean";
      case 7:
        return typeof form.accessories;
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
    <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
      {currentStep > 1 && (
        <div className="back-btn" onClick={previousStep}>
          <i className="fa-solid fa-chevron-left" onClick={previousStep}></i>
          &nbsp;{t("back")}
        </div>
      )}
      {currentStep === 1 && (
        <button
          className="btn main-btn next"
          onClick={() => validate()}
          disabled={!canGoNext()}
        >
          {t("start")}
        </button>
      )}
      {currentStep > 4 && currentStep < totalSteps && (
        <button
          className="btn main-btn next"
          onClick={() => validate()}
          disabled={!canGoNext()}
        >
          {t("next")}
        </button>
      )}

      {currentStep === totalSteps && (
        <div className="d-flex row align-items-center justify-content-center gap-4">
          <button
            onClick={handleShow}
            className="btn secondary-btn-gradient w-auto"
          >
            <i className="fa-solid fa-paper-plane"></i> {t("section11.btn")}
          </button>
          <button className="btn main-btn w-auto">
            <i className="fa-solid fa-user-plus"></i> {t("menu.btn1")}
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
                  <Form.Label className="fs-5 fw-bold">
                    {t("section12.f2")}
                  </Form.Label>
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
                    label={t("agree")}
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
                {t("close")}
              </Button>
              <button
                className="btn main-btn"
                onClick={handleClose}
                disabled={!checked}
              >
                {t("send")}
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Stats;
