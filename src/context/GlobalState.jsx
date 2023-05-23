import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

const initialState = {
  transactions: [],
};

export const useMyContext = () => {
  const data = useContext(Context);
  return data;
};

export const GlobalProvider = ({ children }) => {
  const [value, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(value));
  }, [value]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const contextValue = { value, dispatch, addTransaction, deleteTransaction };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
