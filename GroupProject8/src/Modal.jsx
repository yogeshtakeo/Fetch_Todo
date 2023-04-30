import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";

const ModalComponent = ({ showModal, recipe, closeModal }) => {
  return (
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Header>{recipe.name}</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <ul className="flex flex-wrap justify-between position: relative;">
              {recipe.ingredients.map((ingridient, index) => {
                return (
                  <li
                    key={index}
                    className="border-2 p-2 flex gap-3 justify-between w-full"
                  >
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
            onClick={closeModal}
          >
            {recipe.steps.map((step, index) => {
              return <li key={index}>{step}</li>;
            })}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>I accept</Button>
        <Button color="gray" onClick={closeModal}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
