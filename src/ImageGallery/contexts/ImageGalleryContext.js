
/*
Maintaing the Image Gallery, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { GalleryTabContext } from "./GalleryTabContext";

import { chunks as createChunks } from "../utils";


export const ImageGalleryContext = createContext();

const ImageGalleryContextProvider = (props) => {
  const { activeTab } = useContext(GalleryTabContext)
  const initialState = {
    exterior: [],
    interior: []
  };

  const [images, setImageList] = useState(initialState);
  const [imageChunks, setImageChunks] = useState([]);
  const [chunkSize, setChunkSize] = useState(1);

  const updateImageList = (imageList) => {
    setImageList(imageList);
  }

  const updateChunkSize = (size) => {
    setChunkSize(size);
  }

  const updateImageChunks = (cs) => {
    setImageChunks(cs)
  }

  useEffect(() => {
    if (images[activeTab].length && activeTab) {
      let imageChunks = createChunks(images[activeTab], chunkSize);
      updateImageChunks(imageChunks);
    }

  }, [activeTab])

  return (
    <ImageGalleryContext.Provider value={{ images, imageChunks,chunkSize, updateImageList, updateChunkSize, updateImageChunks }}>
      {props.children}
    </ImageGalleryContext.Provider>
  )
}

export default ImageGalleryContextProvider;