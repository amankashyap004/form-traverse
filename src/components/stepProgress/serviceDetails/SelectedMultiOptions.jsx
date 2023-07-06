import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SelectedMultiOptions = ({ updateTotalPriceOfSelectedMultiOptions }) => {
   const selectedMultiOptions = useSelector((state) => state.selectedMultiOptions);

   const totalPrice = () => {
      let total = 0;
      for (const option of selectedMultiOptions) {
         const price = parseInt(option.price.slice(1)); // Remove the "$" sign and parse as an integer
         const quantity = option.quantity ? parseInt(option.quantity) : 1;
         total += price * quantity;
      }
      return total;
   };

   useEffect(() => {
      updateTotalPriceOfSelectedMultiOptions(totalPrice());
   }, [selectedMultiOptions]);

   return (
      <div>
         {selectedMultiOptions.length > 0 && (
            <div className="flex justify-start items-center flex-col max-h-48 overflow-y-auto my-2 px-2 py-4 border-t border-slate-400">
               {selectedMultiOptions.map((option) => (
                  <div key={option.value} className="flex justify-between items-start w-full my-1">
                     <span className="text-base font-semibold">{option.label}</span>
                     <span className="font-black ml-3">
                        {parseInt(option.price.slice(1)) * (option.quantity || 1)}
                     </span>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default SelectedMultiOptions;
