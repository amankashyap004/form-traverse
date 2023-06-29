import React from "react";
import { useSelector } from "react-redux";

const SelectedMultiOptions = () => {
   const selectedMultiOptions = useSelector((state) => state.selectedMultiOptions);

   return (
      <div>
         {selectedMultiOptions.length > 0 && (
            <div className="flex justify-start items-center flex-col max-h-48 overflow-y-auto my-2 p-2 border-y border-slate-400">
               {selectedMultiOptions.map((option) => (
                  <div key={option.value} className="flex justify-between items-center w-full my-1">
                     <span>{option.label}</span>
                     <span className="font-black">{option.price}</span>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectedMultiOptions;
