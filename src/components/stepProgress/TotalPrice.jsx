import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
   getSelectedOptionData,
   getSelectedBoxData,
   getServiceFrequencyData,
} from "../../store/selectors/selectors";

const TotalPrice = ({ totalPriceOfSelectedMultiOptions }) => {
   const selectedOptionData = useSelector(getSelectedOptionData);
   const selectedOptionDataPrice = selectedOptionData.price;
   const [parsedSelectedOptionPrice, setParsedSelectedOptionPrice] = useState(0);

   useEffect(() => {
      if (selectedOptionDataPrice) {
         setParsedSelectedOptionPrice(parseInt(selectedOptionDataPrice.toString().slice(1)));
      }
   }, [selectedOptionDataPrice]);

   const selectedBoxData = useSelector(getSelectedBoxData);
   const selectedBoxPrice = selectedBoxData.price;
   const [parsedSelectedBoxPrice, setParsedSelectedBoxPrice] = useState(0);

   useEffect(() => {
      if (selectedBoxPrice) {
         setParsedSelectedBoxPrice(parseInt(selectedBoxPrice.toString().slice(1)));
      }
   }, [selectedBoxPrice]);

   const serviceFrequencyData = useSelector(getServiceFrequencyData);
   const serviceFrequencyOffer = serviceFrequencyData.offer;

   const totalPrice = () => {
      let total = 0;
      const price =
         parsedSelectedOptionPrice + parsedSelectedBoxPrice + totalPriceOfSelectedMultiOptions;
      total += price;
      return total;
   };

   const calculateTotalPrice = () => {
      let total = totalPrice();
      if (serviceFrequencyOffer !== "" && serviceFrequencyOffer !== undefined) {
         let discountType = serviceFrequencyOffer.includes("%") ? "PERCENT" : "DIRECT";
         let discountValue = 0;
         if (discountType === "PERCENT") {
            discountValue = serviceFrequencyOffer.replace("%", "");
            discountValue = parseFloat(discountValue);
            total = total - (total * discountValue) / 100;
         } else if (discountType === "DIRECT") {
            discountValue = serviceFrequencyOffer.replace("$", "");
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
