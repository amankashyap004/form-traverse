const initialState = {
   selectedMultiOptions: [],
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_MULTI_OPTIONS":
         return {
            ...state,
            selectedMultiOptions: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;
