export const SET_CUSTOM_TEXT_INPUT = "SET_CUSTOM_TEXT_INPUT";
export const SET_RESULT = "SET_RESULT";

export const setCustomTextInput = (value: string) => ({
  type: SET_CUSTOM_TEXT_INPUT,
  value
});

export const setResult = (value: string) => ({
  type: SET_RESULT,
  value
});
