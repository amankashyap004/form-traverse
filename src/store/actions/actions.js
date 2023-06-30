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

export const setSelectedTimingData = (selectedTimeData) => {
   return {
      type: "SET_SELECTED_TIME_DATA",
      payload: selectedTimeData,
   };
};
