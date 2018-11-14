import { MODAL_VISIBLE } from "../actions/modalActions";
import { AnyAction } from "redux";

const initial: State = {
  visible: false
};

export interface State {
  visible: boolean;
}

const modalReducer = (state = initial, action: AnyAction): State => {
  switch (action.type) {
    case MODAL_VISIBLE:
      return { ...state, visible: action.value };
    default:
      return state;
  }
};

export default modalReducer;
