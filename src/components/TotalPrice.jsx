import React from "react";

const TotalPrice = ({ totalPriceOfSelectedMultiOptions }) => {
   return (
      <div className="flex justify-between items-center py-4 border-t border-slate-400 bottom-1 w-full">
         <span className="text-2xl font-black">TODAY's TOTAL</span>
         <span className="text-2xl font-black">${totalPriceOfSelectedMultiOptions}</span>
      </div>
   );
};

export default TotalPrice;
