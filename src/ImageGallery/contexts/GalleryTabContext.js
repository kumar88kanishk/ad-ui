/*
Maintaing the Active Tab, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from "react";

export const GalleryTabContext = createContext();

const GalleryTabContextProvider = (props) => {
  const initialState = "exterior";

  const [activeTab, setActiveTab] = useState(initialState);
  const [tabs, setTabs] = useState([]);

  const updateTabs = (list) => {
    setTabs(list);
  }
  const updateActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <GalleryTabContext.Provider value={{ activeTab, updateActiveTab, updateTabs, tabs }}>
      {props.children}
    </GalleryTabContext.Provider>
  );
};

export default GalleryTabContextProvider;
