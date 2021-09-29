import React, { createContext, useContext, useReducer } from "react";

// Preparing the date layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allow us to pull information from the date layer
export const useStateValue = () => useContext(StateContext);
