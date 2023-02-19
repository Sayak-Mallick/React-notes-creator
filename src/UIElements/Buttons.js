import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = ({ text }) => {
  return (
    <Button
      className='btn-class p-3 m-2 w-100'
      style={{ backgroundColor: '#2B3467' }}
    >
      {text}
    </Button>
  );
};

export default Buttons;
