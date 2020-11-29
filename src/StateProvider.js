// setup data layer

import react, { createContext, useContext, useReducer } from "react";


// This is the Data Layer 
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
// This is how we use it of a Component
export const useStateValue = () => useContext(StateContext);
