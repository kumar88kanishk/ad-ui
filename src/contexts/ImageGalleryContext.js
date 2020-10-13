
/*
Maintaing the Image Gallery, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from 'react';

export const ImageGalleryContext = createContext();

const ImageGalleryContextProvider = (props) => {

  const initialState = {
    exterior: [],
    interior: []
  };

  const [images, setImageList] = useState(initialState);

  const updateImageList = (imagesList) => {
    setImageList(imagesList)
  }

  useEffect(() => {
    return () => {
      updateImageList(initialState)
    }
  }, []);

  return (
    <ImageGalleryContext.Provider value={{ images, updateImageList }}>
      {props.children}
    </ImageGalleryContext.Provider>
  )
}

export default ImageGalleryContextProvider;