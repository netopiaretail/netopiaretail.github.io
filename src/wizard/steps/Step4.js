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
      <div className={"row gap-4 text-start fs-5"}>
        <div className="col-12 col-sm-5">
          <h4 className="mb-4">Verifică alegerile tale:</h4>
          <ul>
            <li>Domeniul de activitate: {form.domain}</li>
            <li>Tip de activitate: {form.activityType}</li>
            <li>Magazin: {form.shopType}</li>
            <li>Pachetul: {form.pachet?.name}</li>
            <li>Dispozitiv: {form.device}</li>
            <li>
              Accesorii:{" "}
              {form.accesories.map((device) => device.name).join(", ")}
            </li>
          </ul>
          <h4 className="mt-4">
            Prețul total:{" "}
            {form.pachet?.price +
              form.accesories.reduce((s, x) => s + x.price, 0)}
          </h4>
        </div>
        <div className="col-12 col-sm-5 btns d-flex flex-column align-items-center justify-content-center gap-4">
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
