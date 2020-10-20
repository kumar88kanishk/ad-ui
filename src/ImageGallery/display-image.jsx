import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { DisplayImageContext } from "../contexts/DisplayImageContext";
import { GalleryTabContext } from "../contexts/GalleryTabContext";
import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import { ImageBarContext } from "../contexts/ImageBarContext";
import { DisplayImageSliderContext } from "../contexts/DisplayImageSliderContext";
import { ImageBarSliderContext } from "../contexts/ImageBarSliderContext";
import Slider from "./slider";

import { circularIndex, newImageChunkIndex, swap } from "./utils";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "0" + theme.spacing(50),
    display: "flex"
  },
}));

const DisplayImage = () => {
  const classes = useStyles();
  const { activeImage, updateActiveImage } = useContext(DisplayImageContext);
  const { activeTab } = useContext(GalleryTabContext);
  const { images } = useContext(ImageGalleryContext);
  const { chunkIndex, updateChunkIndex, imagesPerChunk } = useContext(ImageBarContext);
  const { DIsliderChecked, updateDIsliderChecked, DIsliderDirection, updateDIsliderDirection } = useContext(DisplayImageSliderContext);
  const { IBsliderChecked, updateIBsliderChecked, updateIBsliderDirection } = useContext(ImageBarSliderContext);

  useEffect(() => {
    const sliderIntialState = Array.from({ length: images[activeTab].length - 1 }, i => i = false);
    updateDIsliderChecked([...DIsliderChecked, ...sliderIntialState]);
  }, []);

  const updateIBsliderProps = (i, direction) => {
    let newStateIBslider = swap(IBsliderChecked, chunkIndex, i)
    updateIBsliderChecked(newStateIBslider);
    updateIBsliderDirection(direction);
  }

  const updateImageChunkIndex = (i, c, direction) => {
    let icIndex = newImageChunkIndex(i, c)
    updateChunkIndex(icIndex);
    updateIBsliderProps(icIndex, direction)
  }

  const updateDIsliderProps = (i, direction) => {
    let newStateDIslider = swap(DIsliderChecked, activeImage, i);
    updateDIsliderChecked(newStateDIslider);
    updateDIsliderDirection(direction);
  }


  const nextImage = () => {
    let nextImage = activeImage + 1;
    let newImageIndex = circularIndex(images[activeTab], nextImage);
    updateDIsliderProps(newImageIndex, "right");
    updateActiveImage(newImageIndex)
    updateImageChunkIndex(newImageIndex, imagesPerChunk, "right");


  }

  const prevImage = () => {
    let prevIndex = activeImage - 1;
    let newImageIndex = circularIndex(images[activeTab], prevIndex);
    updateDIsliderProps(newImageIndex, "left");
    updateActiveImage(newImageIndex)
    updateImageChunkIndex(newImageIndex, imagesPerChunk, "left");

  }
  const displayedImage = (img) => <div className={classes.wrapper}><CardMedia
    component="img"
    alt={img['alt']}
    image={img['url']}
  /></div>

  const slides = () => images[activeTab].map((image, index) => <Slider key={index}
    checked={DIsliderChecked[index]}
    direction={DIsliderDirection}
    children={displayedImage(image)} />)

  return (
    <React.Fragment>
      <div className='slider-control next'>
        <ArrowForwardIosIcon onClick={() => { nextImage() }} />
      </div>
      <div className='activeImageWrap'>
        {slides()}
      </div>
      <div className='slider-control prev'>
        <ArrowBackIosIcon onClick={() => { prevImage() }} />
      </div>
    </React.Fragment>

  );
};

export default DisplayImage;
