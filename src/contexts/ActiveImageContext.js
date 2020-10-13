
/*
Maintaing the Active Image, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from 'react';

export const ActiveImageContext = createContext();

const ActiveImageContextProvider = (props) => {

  const intialState = {
    exterior: 0,
    interior: 0
  };

  const [activeImage, setActiveImage] = useState(intialState);

  const updateActiveImage = (activeTab, imageIndex) => {
    setActiveImage({ ...activeImage, ...{ [activeTab]: imageIndex } })
  };

  useEffect(() => {
    return () => {
      updateActiveImage(intialState)
    }
  }, []);

  return (
    <ActiveImageContext.Provider value={{ activeImage, updateActiveImage }}>
      {props.children}
    </ActiveImageContext.Provider>
  )
}

export default ActiveImageContextProvider;