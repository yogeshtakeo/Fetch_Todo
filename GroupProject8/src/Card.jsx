import React, { useState } from "react";
import { Card, Modal, Button } from "flowbite-react";

const CardCompontent = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="max-w-sm cursor-pointer hover"
      onClick={() => setShowModal(true)}
    >
      <Card imgSrc={props.recipe.imageURL}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.recipe.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.recipe.steps[0]} ...
        </p>
      </Card>
      <ModalComponent
        recipe={props.recipe}
        closeModal={closeModal}
        showModal={showModal}
      />
    </div>
  );
};

export default CardCompontent;
