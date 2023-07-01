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
      if (selectedServiceFrequencyOffer === "20%") {
         total = total * 0.8;
      } else if (selectedServiceFrequencyOffer === "15%") {
         total = total * 0.85;
      } else if (selectedServiceFrequencyOffer === "10%") {
         total = total * 0.9;
      } else if (selectedServiceFrequencyOffer === "2.5%") {
         total = total * 0.975;
      } else if (selectedServiceFrequencyOffer === "$5") {
         total = total - 5;
      } else {
         total = total;
      }
      return total;
   };

   return (
      <div className="flex justify-between items-center py-4 border-t border-slate-400 bottom-1 w-full">
         <span className="text-2xl font-black">TODAY's TOTAL</span>
         <span className="text-2xl font-black">${totalPrice()}</span>
         <span className="text-2xl font-black">${calculateTotalPrice()}</span>
      </div>
   );
};

export default TotalPrice;
