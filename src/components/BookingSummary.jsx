import React from "react";
import { useSelector } from "react-redux";
import SelectedMultiOptions from "./steps/SelectedMultiOptions";
import { getSelectedOptionLabel } from "../store/selectors/selectors";

const BookingSummary = () => {
   const selectedOptionLabel = useSelector(getSelectedOptionLabel);
   return (
      <section>
         <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4 w-full">
            Booking summary
         </h1>
         <div className="py-4">Booking summary contain</div>
         <div>
            <p>Selected Option: {selectedOptionLabel}</p>
         </div>
         <div className="pb-4 w-full">
            <SelectedMultiOptions />
         </div>
      </section>
   );
};

export default BookingSummary;
