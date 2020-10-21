
/*
Maintaing the Image Gallery, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { GalleryTabContext } from "./GalleryTabContext";
import { constants } from "../constants";
import { chunks  as createChunks, populateFalseArray } from "../utils";


export const ImageGalleryContext = createContext();


const ImageGalleryContextProvider = (props) => {

  const { activeTab } = useContext(GalleryTabContext);
  const { imagesPerChunk } = constants;

  const initialState = {
    exterior: [],
    interior: []
  };

  const [images, setImageList] = useState(initialState);
  const [imageBarSlider, setImageBarSlider]= useState([]);
  const [displayImageSlider, setDisplayImageSlider] = useState([])

  const setImageBarSliderProps = (imagesList) => {
    let myChuncks = createChunks(imagesList, imagesPerChunk);
    setImageBarSlider([true, ...populateFalseArray(myChuncks.length)]);
  };

  const setDisplayImageSliderProps = (l) => {
    setDisplayImageSlider([true, ...populateFalseArray(l)])
  }

  const updateSliderProps = (imagesList, currentTab) => {
    setImageBarSliderProps(imagesList[currentTab]);
    setDisplayImageSliderProps(imagesList[currentTab].length)
  }

  const updateImageList = (imagesList) => {
    setImageList(imagesList);
    updateSliderProps(imagesList, activeTab)
  }

  useEffect(() => {
    updateSliderProps(images, activeTab)
  }, [activeTab]);
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
        {
          url: "/images/4.jpg",
          alt: "4.jpg",
        },
        {
          url: "/images/5.jpg",
          alt: "5.jpg",
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
    <ImageGalleryContext.Provider value={{ images, imageBarSlider, displayImageSlider }}>
      {props.children}
    </ImageGalleryContext.Provider>
  )
}

export default ImageGalleryContextProvider;