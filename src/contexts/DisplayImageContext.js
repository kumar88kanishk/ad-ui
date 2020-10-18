
/*
Maintaing the Active Image, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from 'react';

export const DisplayImageContext = createContext();

const DisplayImageContextProvider = (props) => {

  const intialState = 0;

  const [activeImage, setActiveImage] = useState(intialState);

  const updateActiveImage = (imageIndex) => {
    setActiveImage(imageIndex)
  };

  const setToInitialState = () => {
    setActiveImage(intialState)
  };

  useEffect(() => {
    return () => {
      updateActiveImage(intialState)
    }
  }, []);

  return (
    <DisplayImageContext.Provider value={{ activeImage, updateActiveImage, setToInitialState }}>
      {props.children}
    </DisplayImageContext.Provider>
  )
}

export default DisplayImageContextProvider;