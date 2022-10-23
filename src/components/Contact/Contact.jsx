import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./contact.css";
import Center from "../Center";

export default function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll(".form-control");
    const templateParams = {
      username: inputs[0].value,
      email: inputs[1].value,
      message: inputs[2].value,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_ID
    );

    document.querySelector("form").reset();
    setShow(true);
  };
  return (
    <>
      <Modal className="text-dark" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Başarılı</Modal.Title>
        </Modal.Header>
        <Modal.Body>Mesajınız başarılı bir şekilde iletildi.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Center centralizeBy="flex">
        <div className="contact-card">
          <div className="contact-card--header">
            <h2>İletişime Geçin</h2>
            <h6 className="text-muted">
              Bu formu uygun bir şekilde doldurunuz.
            </h6>
            <hr />
          </div>
          <div className="contact-card--body">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="form-fullname">
                <Form.Label className="form-label">
                  Ad soyad <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="fullName"
                  placeholder="Adınızı ve soyadınızı giriniz"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-email">
                <Form.Label className="form-label">
                  Email <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email adresinizi giriniz"
                  required
                />
                <Form.Text className="form-text text-muted">
                  Email adresinizi başkalarıyla paylaşmayacağız.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="form-message">
                <Form.Label className="form-label">
                  Message <span className="red-star">*</span>
                </Form.Label>
                <Form.Control
                  className="form-control"
                  name="message"
                  as="textarea"
                  rows={3}
                  placeholder="Mesajınızı giriniz"
                ></Form.Control>
              </Form.Group>
              <div className="form-submit">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </Center>
    </>
  );
}
