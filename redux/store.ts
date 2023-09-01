import { configureStore } from "@reduxjs/toolkit";

export const setLanguage = (language: string) => ({
  type: "SET_LANGUAGE",
  payload: language,
});

const initialState = {
  language: "KO",
};

const rootReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
