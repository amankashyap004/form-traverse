export const setSelectedOptionLabel = (selectedOptionLabel) => {
   return {
      type: "SET_SELECTED_OPTION_LABEL",
      payload: selectedOptionLabel,
   };
};

export const setSelectedBoxData = (data) => {
   return {
      type: "SET_SELECTED_BOX_DATA",
      payload: data,
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
