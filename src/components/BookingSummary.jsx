import React from "react";
import { useSelector } from "react-redux";
import SelectedMultiOptions from "./steps/SelectedMultiOptions";
import { getSelectedOptionLabel } from "../store/selectors/selectors";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

const BookingSummary = () => {
   const selectedOptionLabel = useSelector(getSelectedOptionLabel);
   return (
      <section className="w-[90%]">
         <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4">Booking summary</h1>
         <div className="flex justify-start items-center py-4">
            <HouseOutlinedIcon sx={{ fontSize: 40 }} />
            <p className="ml-2 text-base font-semibold">{selectedOptionLabel}</p>
         </div>
         <div className="pb-4 w-full">
            <SelectedMultiOptions />
         </div>
      </section>
   );
};

export default BookingSummary;
