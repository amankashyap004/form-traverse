const initialState = {
   selectedMultiOptions: [],
   selectedOptionLabel: "",
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_MULTI_OPTIONS":
         return {
            ...state,
            selectedMultiOptions: action.payload,
         };
      case "SET_SELECTED_OPTION_LABEL":
         return {
            ...state,
            selectedOptionLabel: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;
