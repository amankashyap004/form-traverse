const initialState = {
   selectedOptionLabel: "",
   selectedOptionPrice: 0,
   selectedBoxData: "",
   selectedBoxPrice: 0,
   selectedMultiOptions: [],
   selectedDateData: "",
   selectedTimeData: "",
   selectedServiceFrequency: "",
   selectedServiceFrequencyOffer: "",
   infoFormData: [],
   serviceFormData: [],
   cardInfoData: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_SELECTED_OPTION_LABEL":
         return {
            ...state,
            selectedOptionLabel: action.payload,
         };
      case "SET_SELECTED_OPTION_PRICE":
         return {
            ...state,
            selectedOptionPrice: action.payload,
         };
      case "SET_SELECTED_BOX_DATA":
         return {
            ...state,
            selectedBoxData: action.payload,
         };
      case "SET_SELECTED_BOX_PRICE":
         return {
            ...state,
            selectedBoxPrice: action.payload,
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
      case "SET_SELECTED_SERVICE_FREQUENCY_DATA":
         return {
            ...state,
            selectedServiceFrequency: action.payload,
         };
      case "SET_SELECTED_SERVICE_FREQUENCY_OFFER":
         return {
            ...state,
            selectedServiceFrequencyOffer: action.payload,
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
      default:
         return state;
   }
};

export default reducer;
