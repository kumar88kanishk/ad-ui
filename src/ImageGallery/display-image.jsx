import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { GalleryTabContext } from './contexts/GalleryTabContext';
import { ImageGalleryContext } from './contexts/ImageGalleryContext';
import { DisplayImageSliderContext } from './contexts/DisplayImageSliderContext';
import { ImageBarSliderContext } from './contexts/ImageBarSliderContext';
import { constants } from "./constants";
import Slider from './slider';


import { circularIndex, swap, firstTrueIndex } from './utils';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: `0${theme.spacing(50)}`,
    display: 'flex',
  },
}));


const DisplayImage = () => {
  const classes = useStyles();
  const { activeTab } = useContext(GalleryTabContext);
  const { images } = useContext(ImageGalleryContext);
  const { imagesPerChunk } = constants;
  const {
    DIsliderChecked, updateDIsliderChecked, DIsliderDirection, updateDIsliderDirection,
  } = useContext(DisplayImageSliderContext);
  const {
    IBsliderChecked,
    updateIBsliderChecked,
    updateIBsliderDirection } = useContext(ImageBarSliderContext);

  const currentDIindex = firstTrueIndex(DIsliderChecked);
  const currentIBindex = firstTrueIndex(IBsliderChecked);

  const updateIBsliderState = (newStateIBslider, direction) => {
    updateIBsliderChecked([...newStateIBslider]);
    updateIBsliderDirection(direction);
  };

  const updateDIsliderState = (newStateDIslider, direction) => {
    updateDIsliderChecked([...newStateDIslider]);
    updateDIsliderDirection(direction);
  };

  const nextImage = () => {
    let nextDIindex = circularIndex(DIsliderChecked, currentDIindex + 1);
    let newStateDIslider = swap(DIsliderChecked, currentDIindex, nextDIindex);
    updateDIsliderState(newStateDIslider, "right");

    let nextIbindex = Math.trunc(nextDIindex / imagesPerChunk);
    if (nextIbindex !== currentIBindex) {
      let newStateIBslider = swap(IBsliderChecked, currentIBindex, nextIbindex);
      updateIBsliderState(newStateIBslider, "right")
    }
  };

  const prevImage = () => {
    let prevDIindex = circularIndex(DIsliderChecked, currentDIindex - 1);
    let newStateDIslider = swap(DIsliderChecked, currentDIindex, prevDIindex);
    updateDIsliderState(newStateDIslider, "left");

    let prevIbindex = Math.trunc(prevDIindex / imagesPerChunk);
    if (prevIbindex !== currentIBindex) {
      let newStateIBslider = swap(IBsliderChecked, currentIBindex, prevIbindex);
      updateIBsliderState(newStateIBslider, "right");
    }
  };
  const displayedImage = (img) => (
    <div className={classes.wrapper}>
      <CardMedia
        component="img"
        alt={img.alt}
        image={img.url}
      />
    </div>
  );
  const slides = () => images[activeTab].map((image, index) => <Slider
    key={index}
    checked={DIsliderChecked[index]}
    direction={DIsliderDirection}
    children={displayedImage(image)}
  />);
  return (
    <React.Fragment>
      <div className="slider-control next">
        <ArrowForwardIosIcon onClick={() => { nextImage(); }} />
      </div>
      <div className="activeImageWrap">
        {slides()}
      </div>
      <div className="slider-control prev">
        <ArrowBackIosIcon onClick={() => { prevImage(); }} />
      </div>
    </React.Fragment>

  );
};

export default DisplayImage;
