/*
Maintaing the Active Image, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from "react";

export const ActiveTabContext = createContext();
export const tabs = ["exterior", "interior"];

const ActiveTabContextProvider = (props) => {
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
    <ActiveTabContext.Provider value={{ activeTab, updateActiveTab }}>
      {props.children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContextProvider;
