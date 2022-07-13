import React from "react";
import Stats from "./Stats";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Step4 = ({ form, update, ...props }) => {
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
    <div className="wizard-step-4">
      <div className={"row gap-4 text-start fs-5 justify-content-evenly"}>
        <div className="col-12">
          <h4 className="mb-4">Verifică alegerile tale:</h4>
          <div className="d-flex flex-row justify-content-around choices-list">
            <div>
              Domeniul de activitate<div>{form.domain}</div>
            </div>
            <div>
              Tip de activitate<div>{form.activityType}</div>
            </div>
            <div>
              Magazin<div>{form.shopType}</div>
            </div>
            <div>
              Pachetul<div>{form.pachet?.name}</div>
            </div>
            <div>
              Dispozitiv<div>{form.device.toString()}</div>
            </div>
            <div>
              Accesorii{" "}
              <div>
                {form.accesories.map((device) => (
                  <div key={device.name}>{device.name}</div>
                ))}
              </div>
            </div>
          </div>
          <h4 className="mt-4">
            Prețul total:{" "}
            {form.pachet?.price +
              form.accesories.reduce((s, x) => s + x.price, 0)}
          </h4>
        </div>
        <div className="col-12 btns d-flex flex-column align-items-center justify-content-center gap-4">
          <button>
            <i className="fa-solid fa-user-plus"></i> Înscrie-te
          </button>
          <button onClick={handleShow}>
            <i className="fa-solid fa-paper-plane"></i> Trimite configurația pe
            email
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
      </div>

      <Stats {...props} form={form} />
    </div>
  );
};

export default Step4;
