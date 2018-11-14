import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import { appState } from "./appState";

const initialState: appState = {
  numberInputReducer: {
    numberInput: null
  },
  promptReducer: {
    visible: false,
    msg: ""
  },
  customTextInputReducer: {
    customTextInput: "",
    result: ""
  },
  modalReducer: {
    visible: false
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);
