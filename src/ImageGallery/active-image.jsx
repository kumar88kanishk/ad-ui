import React, { useContext } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ActiveImageContext } from "../contexts/ActiveImageContext";
import { ActiveTabContext } from "../contexts/ActiveTabContext";
import { ImageGalleryContext } from "../contexts/ImageGalleryContext";

const ActiveImage = () => {
  const { activeImage, updateActiveImage } = useContext(ActiveImageContext);
  const { activeTab } = useContext(ActiveTabContext);
  const { images } = useContext(ImageGalleryContext);

  const newImageIndex = (index) =>  {
    let length = images[activeTab].length;
    return ((index % length + length) % length)
  };

  const nextImage = () => {
    let nextIndex = activeImage[activeTab] + 1;
    updateActiveImage(activeTab, newImageIndex(nextIndex))
  }

  const prevImage = () => {
    let prevIndex = activeImage[activeTab] - 1;
    updateActiveImage(activeTab, newImageIndex(prevIndex))
  }
  
  return (
    <React.Fragment>
      <ArrowForwardIosIcon onClick={() => {nextImage()}}/>
      <CardMedia
      component="img"
      alt={images[activeTab][activeImage[activeTab]].alt}
      image={images[activeTab][activeImage[activeTab]].url}
      />
      <ArrowBackIosIcon onClick={() => {prevImage()}}/>
    </React.Fragment>
    
  );
};

export default ActiveImage;
