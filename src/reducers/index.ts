export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});

const initialState = {
  isDarkMode: false,
};

const rootReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default rootReducer;
