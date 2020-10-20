import React from 'react';
import Slide from '@material-ui/core/Slide';


const Slider = ({ checked, direction, children }) => {
  return (
    <Slide direction={direction} in={checked} mountOnEnter unmountOnExit>
      {children}
    </Slide>
  );
}

export default Slider;