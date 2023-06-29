export const setMultiOptions = (multiOptions) => {
   return {
      type: "SET_MULTI_OPTIONS",
      payload: multiOptions,
   };
};

export const setSelectedOptionLabel = (selectedOptionLabel) => {
   return {
      type: "SET_SELECTED_OPTION_LABEL",
      payload: selectedOptionLabel,
   };
};
