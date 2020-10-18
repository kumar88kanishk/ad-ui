import React, { useContext } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import { GalleryTabContext } from "../contexts/GalleryTabContext";
import { DisplayImageContext } from "../contexts/DisplayImageContext";
import { ImageBarContext } from "../contexts/ImageBarContext";

import Slider from "./slider";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  style: { padding: "5px" },
  borderColor: "text.primary",
};

const ImageBar = () => {
  const classes = useStyles();

  const { images } = useContext(ImageGalleryContext);
  const { activeTab } = useContext(GalleryTabContext);
  const { activeImage, updateActiveImage } = useContext(DisplayImageContext);
  const { chunkIndex, updateChunkIndex, imagesPerChunk } = useContext(ImageBarContext);

  const loadImage = (index) => {
    updateActiveImage(index);
  };

  // const imagesChunk = () => images[activeTab].slice(activeImage, (activeImage + imagesPerChunk));

  const imagesChunk = () => _.chunk(images[activeTab], imagesPerChunk);

  const circularChunkIndex = (arr, index) => {
    let length = arr.length;
    return ((index % length + length) % length)
  };

  const nextChunkIndex = () => {
    let nextIndex = chunkIndex + 1;
    let newChunkIndex = circularChunkIndex(imagesChunk(), nextIndex)
    updateChunkIndex(newChunkIndex);
  }

  const prevChunkIndex = () => {
    let prevIndex = chunkIndex + 1;
    let newChunkIndex = circularChunkIndex(imagesChunk(), prevIndex)
    updateChunkIndex(newChunkIndex);
  }

  const leftIcon = () => <div className='slider-control next'>
    <ArrowForwardIosIcon className="iconSize18" onClick={() => { nextChunkIndex() }} />
  </div>

  const rightIcon = () => <div className='slider-control prev'>
    <ArrowBackIosIcon className="iconSize18" onClick={() => { prevChunkIndex() }} />
  </div>

  const imageBar = () =>
    imagesChunk()[chunkIndex].map((image, index) => {
      let biggerIndex = (chunkIndex * imagesPerChunk) + index;
      let borderSize = biggerIndex === activeImage ? 2 : 1;
      let borderColor = biggerIndex === activeImage ? "primary.main" : "";
      return (
        <Box border={borderSize} {...defaultProps} key={biggerIndex} borderColor={borderColor}>
          <Avatar
            alt={image.alt}
            variant="square"
            src={image.url}
            className={classes.large}
            onClick={() => { loadImage(biggerIndex) }}
          />
        </Box>
      )
    });

  return (
    <div className="marginT30 img-thumb">
      {leftIcon()}
      <Box display="flex" justifyContent="center">
        <Slider ImageBar={imageBar} />
      </Box>
      {rightIcon()}
    </div>
  );
};

export default ImageBar;
