import { PROMPT_VISIBLE } from "../actions/promptActions";
import { AnyAction } from "redux";

const initial: State = {
  visible: false,
  msg: ""
};

export interface State {
  visible: boolean;
  msg: string;
}

const promptReducer = (state = initial, action: AnyAction): State => {
  switch (action.type) {
    case PROMPT_VISIBLE:
      return { ...state, visible: action.value, msg: action.msg };
    default:
      return state;
  }
};

export default promptReducer;
