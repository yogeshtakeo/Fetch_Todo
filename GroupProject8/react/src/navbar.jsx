import React from 'react';
import { Alert } from 'flowbite-react';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Alert color="info">
  <span>
    <span className="font-medium">
      Info alert!
    </span>
    {' '}Change a few things up and try submitting again.
  </span>
</Alert>
  );
};
export default CustomNavbar;



