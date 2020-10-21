/*
Maintaing the Active Tab, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from "react";

export const GalleryTabContext = createContext();
export const tabs = ["exterior", "interior"];

const GalleryTabContextProvider = (props) => {
  const initialState = "exterior";

  const [activeTab, setActiveTab] = useState(initialState);

  const updateActiveTab = (imageIndex) => {
    setActiveTab(tabs[imageIndex]);
  };

  useEffect(() => {
    return () => {
      updateActiveTab(initialState)
    }
  }, []);

  return (
    <GalleryTabContext.Provider value={{ activeTab, updateActiveTab }}>
      {props.children}
    </GalleryTabContext.Provider>
  );
};

export default GalleryTabContextProvider;
