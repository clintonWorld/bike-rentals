import { createContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";

// Define the initial state
const INITIAL_STATE = {
  price: "",
  location: "",
  all: "",
  showModal: false,
  updatedArray: [],
  search:"" ,
};

// Create the context with the initial state
export const FilterContext = createContext(INITIAL_STATE);

// Define the provider component
export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);

  return (
    <FilterContext.Provider
      value={{
        price: state.price,
        location: state.location,
        all: state.all,
        dispatch,
        modal: state.showModal,
        search: state.search,
        updatedArray:state.updatedArray
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
