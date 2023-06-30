const initialState = {
   selectedOptionLabel: "",
   selectedBoxData: "",
   selectedMultiOptions: [],
   selectedTimeData: "",
   selectedServiceFrequency: "",
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
      case "SET_SELECTED_SERVICE_FREQUENCY_DATA":
         return {
            ...state,
            selectedServiceFrequency: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;
