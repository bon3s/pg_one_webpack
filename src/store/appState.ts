import { State as numberInputState } from "src/reducers/numberInputReducer";
import { State as promptState } from "src/reducers/promptReducer";
import { State as customTextInputState } from "src/reducers/customTextInputReducer";
import { State as modalState } from "src/reducers/modalReducer";

export interface AppState {
  readonly numberInputReducer: numberInputState;
  readonly promptReducer: promptState;
  readonly customTextInputReducer: customTextInputState;
  readonly modalReducer: modalState;
}
