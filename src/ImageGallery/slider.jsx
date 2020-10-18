import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

export default function SimpleSlide(props) {
  const [checked, setChecked] = useState(true);
  const [direction, setDirection] = useState("right");

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const { ImageBar, checked, classes, direction } = props

  return (
    <Slide direction={direction} in={checked} mountOnEnter unmountOnExit>
      <Paper elevation={4} className={classes.paper}>
        <ImageBar />
      </Paper>
    </Slide>
  );
}
