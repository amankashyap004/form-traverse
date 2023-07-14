const initialState = {
   selectedOptionData: [],
   selectedBoxData: [],
   selectedMultiOptions: [],
   selectedDateData: "",
   selectedTimeData: "",
   serviceFrequencyData: [],
   infoFormData: [],
   serviceFormData: [],
   cardInfoData: [],
   totalPrices: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_SELECTED_OPTION_DATA":
         return {
            ...state,
            selectedOptionData: action.payload,
         };
      case "SET_SELECTED_BOX_DATA":
         return {
            ...state,
            selectedBoxData: action.payload,
         };
      case "SET_MULTI_OPTIONS":
         return {
            ...state,
            selectedMultiOptions: action.payload,
         };
      case "SET_SELECTED_DATE_DATA":
         return {
            ...state,
            selectedDateData: action.payload,
         };
      case "SET_SELECTED_TIME_DATA":
         return {
            ...state,
            selectedTimeData: action.payload,
         };
      case "SET_SERVICE_FREQUENCY_DATA":
         return {
            ...state,
            serviceFrequencyData: action.payload,
         };
      case "SET_INFO_FORM_DATA":
         return {
            ...state,
            infoFormData: action.payload,
         };
      case "SET_SERVICE_FORM_DATA":
         return {
            ...state,
            serviceFormData: action.payload,
         };
      case "SET_CARD_INFO_DATA":
         return {
            ...state,
            cardInfoData: action.payload,
         };
      case "UPDATE_TOTAL_PRICES":
         return {
            ...state,
            totalPrices: action.totalPrices,
         };
      default:
         return state;
   }
};

export default reducer;
