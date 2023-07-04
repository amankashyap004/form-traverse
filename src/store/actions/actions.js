export const setSelectedOptionData = (selectedOptionData) => {
   return {
      type: "SET_SELECTED_OPTION_DATA",
      payload: selectedOptionData,
   };
};

export const setSelectedBoxData = (data) => {
   return {
      type: "SET_SELECTED_BOX_DATA",
      payload: data,
   };
};

export const setSelectedBoxPrice = (price) => {
   return {
      type: "SET_SELECTED_BOX_PRICE",
      payload: price,
   };
};

export const setMultiOptions = (multiOptions) => {
   return {
      type: "SET_MULTI_OPTIONS",
      payload: multiOptions,
   };
};

export const setSelectedDateData = (selectedDateData) => {
   return {
      type: "SET_SELECTED_DATE_DATA",
      payload: selectedDateData,
   };
};

export const setSelectedTimingData = (selectedTimeData) => {
   return {
      type: "SET_SELECTED_TIME_DATA",
      payload: selectedTimeData,
   };
};

export const setSelectedServiceFrequencyData = (selectedServiceFrequency) => {
   return {
      type: "SET_SELECTED_SERVICE_FREQUENCY_DATA",
      payload: selectedServiceFrequency,
   };
};

export const setSelectedServiceFrequencyOffer = (selectedServiceFrequencyOffer) => {
   return {
      type: "SET_SELECTED_SERVICE_FREQUENCY_OFFER",
      payload: selectedServiceFrequencyOffer,
   };
};

export const setInfoFormData = (infoFormData) => {
   return {
      type: "SET_INFO_FORM_DATA",
      payload: infoFormData,
   };
};

export const setServiceFormData = (serviceFormData) => {
   return {
      type: "SET_SERVICE_FORM_DATA",
      payload: serviceFormData,
   };
};

export const setCardInfoData = (cardInfoData) => {
   return {
      type: "SET_CARD_INFO_DATA",
      payload: cardInfoData,
   };
};
