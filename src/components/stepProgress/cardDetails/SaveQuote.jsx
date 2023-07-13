import React from "react";
import { useSelector } from "react-redux";
import Button from "../../Button";
import { getSelectedOptionData, getSelectedBoxData } from "../../../store/selectors/selectors";

const SaveQuote = () => {
   const selectedOptionData = useSelector(getSelectedOptionData);
   const selectedBoxData = useSelector(getSelectedBoxData);

   const handleSaveQuote = () => {
      console.log("Save Quote");
      console.log(selectedOptionData.label + selectedOptionData.price);
      console.log(selectedBoxData.label + selectedBoxData.price);
   };

   return (
      <Button
         extraStyle="bg-blue-950 ml-4 text-white sm:ml-2"
         contained="Save Quote"
         onClick={handleSaveQuote}
      />
   );
};

export default SaveQuote;
