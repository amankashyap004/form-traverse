import React from "react";

const CardDetails = () => {
   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4">Book Now or Save Quote</span>
            <span className="text-base font-semibold my-2">
               You may book now by entering your card details or leave blank and save quote for
               later.
            </span>
         </div>
      </section>
   );
};

export default CardDetails;
