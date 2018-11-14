import { SET_NUMBER_INPUT } from "../actions/numberInputActions";
import { AnyAction } from "redux";

const initial: State = {
  numberInput: null
};

export interface State {
  numberInput: number | null;
}

const numberInputReducer = (state = initial, action: AnyAction) => {
  switch (action.type) {
    case SET_NUMBER_INPUT:
      return { ...state, numberInput: Number(action.value) };
    default:
      return state;
  }
};

export default numberInputReducer;
