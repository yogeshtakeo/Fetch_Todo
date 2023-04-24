import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";

const ModalComponent = (recipe) => {
  return (
    <Modal show={props.showModal} onClose={props.closeModal}>
      <Modal.Header>{props.recipe.name}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <ul className="flex flex-wrap justify-between ">
              {props.recipe.ingredients.map((ingridient, index) => {
                return (
                  <li key={index}>
                    <p>Quantity:{ingridient.quantity}</p>
                    <p>Name:{ingridient.name}</p>
                    <p>Type:{ingridient.type}</p>
                  </li>
                );
              })}
            </ul>
          </p>
          <p
            className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            onClick={props.closeModal}
          >
            {props.recipe.steps.map((step, index) => {
              return <li key={index}>{step}</li>;
            })}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>I accept</Button>
        <Button color="gray" onClick={props.closeModal}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal;
