import React, { useContext, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

import { ImageGalleryContext } from "./contexts/ImageGalleryContext";
import { GalleryTabContext } from "./contexts/GalleryTabContext";
import { ImageBarSliderContext } from "./contexts/ImageBarSliderContext";
import { DisplayImageSliderContext } from "./contexts/DisplayImageSliderContext";

import Slider from "./slider";

import { circularIndex, swap, firstTrueIndex, chunks } from "./utils";

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { padding: "5px" },
  borderColor: "text.primary",
};

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  wrapper: {
    padding: "0" + theme.spacing(50),
    display: "flex"
  },
}));


const ImageBar = () => {
  const classes = useStyles();

  const { imageChunks, chunkSize } = useContext(ImageGalleryContext);
  const { IBsliderChecked, updateIBsliderChecked, IBsliderDirection, updateIBsliderDirection } = useContext(ImageBarSliderContext);
  const { DIsliderChecked, updateDIsliderChecked, updateDIsliderDirection } = useContext(DisplayImageSliderContext);

  const currentIBindex = firstTrueIndex(IBsliderChecked);
  const currentDIindex = firstTrueIndex(DIsliderChecked);

  const loadImage = (i) => {
    let nextDIindex = (currentIBindex * chunkSize) + i;
    if (nextDIindex !== currentDIindex) {
      let newStateDIslider = swap(DIsliderChecked, currentDIindex, nextDIindex);
      updateDIsliderState(newStateDIslider, "right")
    }
  }
  const updateIBsliderState = (newStateIBslider, direction) => {
    updateIBsliderChecked([...newStateIBslider]);
    updateIBsliderDirection(direction);
  };

  const updateDIsliderState = (newStateDIslider, direction) => {
    updateDIsliderChecked([...newStateDIslider]);
    updateDIsliderDirection(direction);
  };

  const nextGallery = () => {
   
    let nextIBindex = circularIndex(IBsliderChecked, currentIBindex + 1);
    let newStateIBslider = swap(IBsliderChecked, currentIBindex, nextIBindex);
    updateIBsliderState(newStateIBslider, "right");
    
    let nextDIindex = nextIBindex * chunkSize;
    if (nextDIindex !== currentDIindex) {
      let newStateDIslider = swap(DIsliderChecked, currentDIindex, nextDIindex);
      updateDIsliderState(newStateDIslider, "right")
    }
  }

  const prevGallery = () => {
    let prevIBindex = circularIndex(IBsliderChecked, currentIBindex - 1);
    let newStateIBslider = swap(IBsliderChecked, currentIBindex, prevIBindex);
    updateIBsliderState(newStateIBslider, "left");

    let prevDIindex = prevIBindex * chunkSize;
    if (prevDIindex !== currentDIindex) {
      let newStateDIslider = swap(DIsliderChecked, currentDIindex, prevDIindex);
      updateDIsliderState(newStateDIslider, "right")
    }
  }

  const prevIcon = () => <div className='slider-control next'>
    <ArrowForwardIosIcon className="iconSize18" onClick={() => { nextGallery() }} />
  </div>

  const nextIcon = () => <div className='slider-control prev'>
    <ArrowBackIosIcon className="iconSize18" onClick={() => { prevGallery() }} />
  </div>

  const imageBarComponent = (bs, bc, img, i, loadImage) => <div className={classes.wrapper}>
    <Box border={bs} {...defaultProps} bc={bc}>
      <Avatar
        alt={img.alt}
        variant="square"
        src={img.url}
        className={classes.large}
        onClick={() => { loadImage(i) }}
      />
    </Box>
  </div>
  const slides = () => imageChunks[currentIBindex].map((image, index) => {
    let biggerIndex = (currentIBindex * chunkSize) + index;
    let borderSize = biggerIndex === currentDIindex ? 2 : 1;
    let borderColor = biggerIndex === currentDIindex ? "primary.main" : "";

    return (
      <Slider key={biggerIndex}
        checked={IBsliderChecked[currentIBindex]}
        direction={IBsliderDirection}
        children={imageBarComponent(borderSize, borderColor, image, index, loadImage)} />
    )
  });

  return (
    <div className="marginT30 img-thumb">
      {prevIcon()}
      <div className="slidePanel">{slides()} </div>
      {nextIcon()}
    </div>
  );
};

export default ImageBar;
