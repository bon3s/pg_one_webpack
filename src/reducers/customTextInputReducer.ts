import {
  SET_CUSTOM_TEXT_INPUT,
  SET_RESULT
} from "../actions/customTextInputActions";
import { AnyAction } from "redux";

export interface State {
  customTextInput: string;
  result: string;
}

const initial: State = {
  customTextInput: "",
  result: ""
};

const customTextInputReducer = (
  state: State = initial,
  action: AnyAction
): State => {
  switch (action.type) {
    case SET_CUSTOM_TEXT_INPUT:
      return { ...state, customTextInput: action.value };
    case SET_RESULT:
      return { ...state, result: action.value };
    default:
      return state;
  }
};

export default customTextInputReducer;
