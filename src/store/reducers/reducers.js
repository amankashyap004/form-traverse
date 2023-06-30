const initialState = {
   selectedOptionLabel: "",
   selectedBoxData: "",
   selectedMultiOptions: [],
   selectedTimeData: "",
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_MULTI_OPTIONS":
         return {
            ...state,
            selectedMultiOptions: action.payload,
         };
      case "SET_SELECTED_BOX_DATA":
         return {
            ...state,
            selectedBoxData: action.payload,
         };
      case "SET_SELECTED_OPTION_LABEL":
         return {
            ...state,
            selectedOptionLabel: action.payload,
         };
      case "SET_SELECTED_TIME_DATA":
         return {
            ...state,
            selectedTimeData: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;
