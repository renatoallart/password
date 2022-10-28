import { useReducer, createContext, useContext, useState } from "react";
import { lowerCase, numbers, upperCase, symbol } from "../data/chars";
import { handleLengthLoop } from "../helpers/utils";

const PasswordContext = createContext();

export function usePasswordContext() {
  return useContext(PasswordContext);
}

const INITIAL_STATE = {
  length: "",
  upperCase: false,
  symbol: false,
  number: false,
};

export const ACTIONS_MAP = {
  number: "number",
  checkbox: "checkbox",
};

function formReducer(state, { type, field, payload }) {
  switch (type) {
    case ACTIONS_MAP.number:
      return {
        ...state,
        [field]: payload,
      };
    case ACTIONS_MAP.checkbox:
      return { ...state, [field]: payload };
    default:
      return state;
  }
}

export function PasswordProvider({ children }) {
  const [formData, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [password, setPassword] = useState("Create a Strong Password");
  const [checkClipboard, setCheckClipboard] = useState(false);

  function handleClipboard() {
    navigator.clipboard.writeText(password);
    setCheckClipboard(true);
  }

  function handleForm(event) {
    const { name, value, type, checked } = event.target;
    dispatch({
      type,
      field: name,
      payload: type === ACTIONS_MAP.checkbox ? checked : value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    randomPassword();
    console.log(formData);
    setCheckClipboard(false);
  }

  function randomPassword() {
    if (formData.length === 0) return "";
    if (formData.symbol && formData.upperCase && formData.number) {
      console.log("all");
      const concatArray = lowerCase
        .concat(symbol)
        .concat(upperCase)
        .concat(numbers);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
    if (formData.symbol && formData.upperCase) {
      console.log("symbol and Upper");
      const concatArray = lowerCase.concat(symbol).concat(upperCase);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
    if (formData.symbol && formData.number) {
      console.log("symbol and number");
      const concatArray = lowerCase.concat(symbol).concat(numbers);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
    if (formData.number) {
      console.log("number");
      const concatArray = lowerCase.concat(numbers);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
    if (formData.symbol) {
      console.log("symbol");
      const concatArray = lowerCase.concat(symbol);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
    if (formData.upperCase) {
      console.log("Upper");
      const concatArray = lowerCase.concat(upperCase);
      return setPassword(
        handleLengthLoop(concatArray, parseInt(formData.length))
      );
    }
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        formData,
        checkClipboard,
        handleForm,
        handleOnSubmit,
        handleClipboard,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}
