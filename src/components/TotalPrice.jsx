import React from "react";
import { useSelector } from "react-redux";
import {
   getSelectedBoxPrice,
   getSelectedOptionPrice,
   getSelectedServiceFrequencyOffer,
} from "../store/selectors/selectors";

const TotalPrice = ({ totalPriceOfSelectedMultiOptions }) => {
   const selectedOptionPrice = useSelector(getSelectedOptionPrice);
   const parsedSelectedOptionPrice = parseInt(selectedOptionPrice.toString().slice(1));

   const selectedBoxPrice = useSelector(getSelectedBoxPrice);
   const parsedSelectedBoxPrice = parseInt(selectedBoxPrice.toString().slice(1));

   const selectedServiceFrequencyOffer = useSelector(getSelectedServiceFrequencyOffer);

   const totalPrice = () => {
      let total = 0;
      const price =
         parsedSelectedOptionPrice + parsedSelectedBoxPrice + totalPriceOfSelectedMultiOptions;
      total += price;
      return total;
   };

   const calculateTotalPrice = () => {
      let total = totalPrice();
      if (selectedServiceFrequencyOffer !== "") {
         let discountType = selectedServiceFrequencyOffer.includes("%") ? "PERCENT" : "DIRECT";
         let discountValue = 0;
         if (discountType === "PERCENT") {
            discountValue = selectedServiceFrequencyOffer.replace("%", "");
            discountValue = parseFloat(discountValue);
            total = total - (total * discountValue) / 100;
         } else if (discountType === "DIRECT") {
            discountValue = selectedServiceFrequencyOffer.replace("$", "");
            discountValue = parseFloat(discountValue);
            total = total - discountValue;
         }
         return Math.round(total);
      }
   };

   return (
      <div className="flex justify-between items-center flex-col py-4 border-t border-slate-400 bottom-1 w-full">
         <div className="flex justify-between items-center w-full">
            <span className="text-2xl font-black">TODAY's TOTAL</span>
            <span className="text-2xl font-black">${totalPrice()}</span>
         </div>
         {calculateTotalPrice() && (
            <div className="flex justify-between items-center w-full mt-2">
               <span className="text-2xl font-black">Price After 1st Clean</span>
               <span className="text-2xl font-black">${calculateTotalPrice()}</span>
            </div>
         )}
      </div>
   );
};

export default TotalPrice;
