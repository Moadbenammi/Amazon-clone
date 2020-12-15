//Setup data layer :
//we need to track the basket:
import React, { useContext, createContext, useReducer } from "react";

//This is the data layer :
export const StateContext = createContext();

//Build a provider :
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//This how we use it inside a component
export const useStateValue = () => useContext(StateContext);
