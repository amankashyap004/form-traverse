import React from "react";
import SelectedMultiOptions from "./steps/SelectedMultiOptions";

const BookingSummary = () => {
   return (
      <section>
         <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4 w-full">
            Booking summary
         </h1>
         <div className="py-4">Booking summary contain</div>
         <div className="pb-4 w-full">
            <SelectedMultiOptions />
         </div>
      </section>
   );
};

export default BookingSummary;
