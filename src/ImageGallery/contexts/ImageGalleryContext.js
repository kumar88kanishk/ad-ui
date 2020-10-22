
/*
Maintaing the Image Gallery, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { GalleryTabContext } from "./GalleryTabContext";

import { chunks as createChunks, populateFalseArray } from "../utils";


export const ImageGalleryContext = createContext();


const ImageGalleryContextProvider = (props) => {

  const { activeTab } = useContext(GalleryTabContext);

  const initialState = {
    exterior: [],
    interior: []
  };

  const [images, setImageList] = useState(initialState);
  const [imageChunks, setImageChunks] = useState([]);
  const [imageBarSlider, setImageBarSlider] = useState([]);
  const [displayImageSlider, setDisplayImageSlider] = useState([])
  const [chunkSize, setChunkSize] = useState(1);

  // [t, ...fill with false till length-1]
  const setImageBarSliderProps = (l) => {
    setImageBarSlider([true, ...populateFalseArray(l - 1)]);
  };
  // [t, ...fill with false till length-1]
  const setDisplayImageSliderProps = (l) => {
    setDisplayImageSlider([true, ...populateFalseArray(l - 1)])
  }

  const updateSliderProps = (imageList, cs, currentTab) => {
    setImageBarSliderProps(cs.length);
    setDisplayImageSliderProps(imageList[currentTab].length)
  }

  const updateImageList = (imageList) => {
    setImageList(imageList);
  }

  const updateChunkSize = (size) => {
    setChunkSize(size);
  }

  const updateImageChunks = (cs) => {
    setImageChunks(cs)
  }

  return (
    <ImageGalleryContext.Provider value={{ images, imageChunks, updateImageList, imageBarSlider, displayImageSlider, updateChunkSize, updateSliderProps, updateImageChunks }}>
      {props.children}
    </ImageGalleryContext.Provider>
  )
}

export default ImageGalleryContextProvider;