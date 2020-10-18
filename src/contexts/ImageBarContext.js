/*
Maintaing the ImageBar, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from "react";

export const ImageBarContext = createContext();
export const imagesPerChunk = 2;
const ImageBarContextProvider = (props) => {
  const initialState = 0;

  const [chunkIndex, setChunkIndex] = useState(initialState);

  const updateChunkIndex = (chunkIndex) => {
    setChunkIndex(chunkIndex);
  };

  useEffect(() => {
    return () => {
      updateChunkIndex(initialState)
    }
  }, []);

  return (
    <ImageBarContext.Provider value={{ chunkIndex, imagesPerChunk, updateChunkIndex }}>
      {props.children}
    </ImageBarContext.Provider>
  );
};

export default ImageBarContextProvider;
