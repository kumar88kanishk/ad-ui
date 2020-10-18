import React, { useContext } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { DisplayImageContext } from "../contexts/DisplayImageContext";
import { GalleryTabContext } from "../contexts/GalleryTabContext";
import { ImageGalleryContext } from "../contexts/ImageGalleryContext";
import { ImageBarContext } from "../contexts/ImageBarContext";

const DisplayImage = () => {

  const { activeImage, updateActiveImage } = useContext(DisplayImageContext);
  const { activeTab } = useContext(GalleryTabContext);
  const { images } = useContext(ImageGalleryContext);
  const { updateChunkIndex, imagesPerChunk } = useContext(ImageBarContext);


  const circularImageIndex = (index) => {
    let length = images[activeTab].length;
    return ((index % length + length) % length)
  };

  const nextImage = () => {
    let nextIndex = activeImage + 1;
    let newImageIndex = circularImageIndex(nextIndex)
    updateActiveImage(newImageIndex)
    updateChunkIndex(Math.trunc(newImageIndex / imagesPerChunk))
  }

  const prevImage = () => {
    let prevIndex = activeImage - 1;
    let newImageIndex = circularImageIndex(prevIndex)
    updateActiveImage(newImageIndex)
    updateChunkIndex(Math.trunc(newImageIndex / imagesPerChunk))
  }

  return (
    <React.Fragment>
      <div className='slider-control next'>
        <ArrowForwardIosIcon onClick={() => { nextImage() }} />
      </div>
      <div className='activeImageWrap'>
        <CardMedia
          component="img"
          alt={images[activeTab][activeImage]['alt']}
          image={images[activeTab][activeImage]['url']}
        />
      </div>
      <div className='slider-control prev'>
        <ArrowBackIosIcon onClick={() => { prevImage() }} />
      </div>
    </React.Fragment>

  );
};

export default DisplayImage;
