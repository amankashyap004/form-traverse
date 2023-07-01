import React from "react";
import { useSelector } from "react-redux";
import { getSelectedBoxPrice, getSelectedOptionPrice } from "../store/selectors/selectors";

const TotalPrice = ({ totalPriceOfSelectedMultiOptions }) => {
   const selectedOptionPrice = useSelector(getSelectedOptionPrice);
   const parsedSelectedOptionPrice = parseInt(selectedOptionPrice.toString().slice(1));

   const selectedBoxPrice = useSelector(getSelectedBoxPrice);
   const parsedSelectedBoxPrice = parseInt(selectedBoxPrice.toString().slice(1));

   const totalPrice = () => {
      let total = 0;
      const price =
         parsedSelectedOptionPrice + parsedSelectedBoxPrice + totalPriceOfSelectedMultiOptions;
      total += price;
      return total;
   };

   return (
      <div className="flex justify-between items-center py-4 border-t border-slate-400 bottom-1 w-full">
         <span className="text-2xl font-black">TODAY's TOTAL</span>
         <span className="text-2xl font-black">${totalPrice()}</span>
      </div>
   );
};

export default TotalPrice;
