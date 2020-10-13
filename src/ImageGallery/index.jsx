import React, { useContext, useEffect } from "react";

import { ImageGalleryContext } from "../contexts/ImageGalleryContext";

import ActiveImage from "./active-image";
import ImageBar from "./image-bar";
import GalleryTabs from "./gallery-tabs";
import MyDialog from "../MyDialog/index";

const ImageGallery = () => {
  const { updateImageList } = useContext(ImageGalleryContext);

  useEffect(() => {
    updateImageList({
      exterior: [
        {
          url: "/images/1.jpg",
          alt: "1.jpg",
        },
        {
          url: "/images/2.jpg",
          alt: "2.jpg",
        },
        {
          url: "/images/3.jpg",
          alt: "3.jpg",
        },
      ],
      interior: [
        {
          url: "/images/4.jpg",
          alt: "4.jpg",
        },
        {
          url: "/images/5.jpg",
          alt: "5.jpg",
        },
        {
          url: "/images/6.jpg",
          alt: "6.jpg",
        },
      ],
    });
  }, []);

  return (
    <div className="marginT30">
      <MyDialog ActiveImage={ActiveImage} ImageBar={ImageBar} GalleryTabs={GalleryTabs}/>
    </div>
  );
};

export default ImageGallery;
