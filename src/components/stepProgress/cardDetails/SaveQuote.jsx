import React from "react";
import Button from "../../Button";

const SaveQuote = () => {
   const handleSaveQuote = () => {
      console.log("Save Quote");
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
