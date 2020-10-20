import React, { useContext, useEffect } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import { GalleryTabContext } from "../contexts/GalleryTabContext";
import { DisplayImageContext } from "../contexts/DisplayImageContext";
import { ImageBarContext } from "../contexts/ImageBarContext";
import { ImageBarSliderContext } from "../contexts/ImageBarSliderContext";
import { DisplayImageSliderContext } from "../contexts/DisplayImageSliderContext";

import Slider from "./slider";

import { circularIndex, swap } from "./utils";

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

  const { images } = useContext(ImageGalleryContext);
  const { activeTab } = useContext(GalleryTabContext);
  const { activeImage, updateActiveImage } = useContext(DisplayImageContext);
  const { chunkIndex, updateChunkIndex, imagesPerChunk } = useContext(ImageBarContext);
  const { IBsliderChecked, updateIBsliderChecked, IBsliderDirection, updateIBsliderDirection } = useContext(ImageBarSliderContext);
  const { DIsliderChecked, updateDIsliderChecked, updateDIsliderDirection } = useContext(DisplayImageSliderContext);
  const loadImage = (index) => {
    updateActiveImage(index);
  };

  const imagesChunk = () => _.chunk(images[activeTab], imagesPerChunk);

  useEffect(() => {
    const sliderIntialState = Array.from({ length: imagesChunk().length - 1 }, i => i = false);
    updateIBsliderChecked([...IBsliderChecked, ...sliderIntialState]);
  }, []);

  const updateIBsliderProps = (i, direction) => {
    let newStateIBSlider = swap(IBsliderChecked, chunkIndex, i)
    updateIBsliderChecked(newStateIBSlider);
    updateIBsliderDirection(direction);
  }

  const updateDIsliderProps = (i, direction) => {
    let newStateDIslider = swap(DIsliderChecked, activeImage, i)
    updateDIsliderChecked(newStateDIslider);
    updateDIsliderDirection(direction);
  }

  console.log("=========>IB", IBsliderChecked)
  const nextChunkIndex = () => {
    let nextIndex = chunkIndex + 1;
    let newChunkIndex = circularIndex(imagesChunk(), nextIndex)
    updateChunkIndex(newChunkIndex);
    updateIBsliderProps(newChunkIndex, "right")
    updateDIsliderProps(newChunkIndex, "right");
  }

  const prevChunkIndex = () => {
    let prevIndex = chunkIndex - 1;
    let newChunkIndex = circularIndex(imagesChunk(), prevIndex)
    updateChunkIndex(newChunkIndex);
    updateIBsliderProps(newChunkIndex, "left")
    updateDIsliderProps(newChunkIndex, "left");
  }

  const prevIcon = () => <div className='slider-control \'>
    <ArrowForwardIosIcon className="iconSize18" onClick={() => { nextChunkIndex() }} />
  </div>

  const nextIcon = () => <div className='slider-control prev'>
    <ArrowBackIosIcon className="iconSize18" onClick={() => { prevChunkIndex() }} />
  </div>

  const imageBarComponent = ( bs, bc, img, i, loadImage) => <div className={classes.wrapper}>
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
  const slides = () =>
    imagesChunk()[chunkIndex].map((image, index) => {
      let biggerIndex = (chunkIndex * imagesPerChunk) + index;
      let borderSize = biggerIndex === activeImage ? 2 : 1;
      let borderColor = biggerIndex === activeImage ? "primary.main" : "";

      return (
        <Slider key={biggerIndex}
          checked={IBsliderChecked[chunkIndex]}
          direction={IBsliderDirection}
          children={imageBarComponent( borderSize, borderColor, image, index, loadImage)} />
      )
    });

  return (
    <div className="marginT30 img-thumb">
      {prevIcon()}
      {slides()}
      {nextIcon()}
    </div>
  );
};

export default ImageBar;
