import React, { useContext, useState } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import { ActiveTabContext } from "../contexts/ActiveTabContext";
import { ActiveImageContext } from "../contexts/ActiveImageContext";

const noOfImages = 2;
const initialChunkIndex = 0
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
  const { activeTab } = useContext(ActiveTabContext);
  const { activeImage, updateActiveImage } = useContext(ActiveImageContext);
  const [chunkIndex, setChunkIndex] = useState(initialChunkIndex);

  const loadImage = (index) => {
    updateActiveImage(activeTab, index);
  };

  const imagesChunk = () =>  _.chunk(images[activeTab], noOfImages);

  const nextImageRange = () => {
    let nextIndex = chunkIndex + 1;
    setChunkIndex(newChunkIndex(nextIndex))
  }

  const newChunkIndex = (index) =>  {
    let length = imagesChunk().length;
    return ((index % length + length) % length)
  };

  const prevImageRange = () => {
    let nextIndex = chunkIndex - 1;
    setChunkIndex(newChunkIndex(nextIndex))
  }

  const imageBar = () =>
    imagesChunk()[chunkIndex].map((image, index) => {
        let borderSize = index === activeImage[activeTab] ? 2 : 1;
        let borderColor = index === activeImage[activeTab] ? "primary.main": "";

        return <Box border={borderSize} {...defaultProps} key={index} borderColor={borderColor}>
        <Avatar
          alt={image.alt}
          variant="square"
          src={image.url}
          className={classes.large}
          onClick={() => {loadImage(index)}}
        />
      </Box>
      });

  return (
    <div className="marginT30">
      <ArrowForwardIosIcon onClick={() => {nextImageRange()}}/>
      <Box display="flex" justifyContent="center">
        {imageBar()}
      </Box>
      <ArrowBackIosIcon onClick={() => {prevImageRange()}}/>
    </div>
  );
};

export default ImageBar;
