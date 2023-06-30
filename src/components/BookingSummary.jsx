import React from "react";
import { useSelector } from "react-redux";
import SelectedMultiOptions from "./steps/SelectedMultiOptions";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import {
   getSelectedOptionLabel,
   getSelectedBoxData,
   getSelectedTimingData,
} from "../store/selectors/selectors";

const BookingSummary = () => {
   const selectedOptionLabel = useSelector(getSelectedOptionLabel);
   const selectedBoxData = useSelector(getSelectedBoxData);
   const selectedTimeData = useSelector(getSelectedTimingData);

   return (
      <section className="w-[90%]">
         <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4">Booking summary</h1>
         <div className="flex justify-start items-start flex-col py-4">
            <div className="flex justify-start items-center py-1">
               <HouseOutlinedIcon sx={{ fontSize: 40 }} />
               <p className="ml-2 text-base font-semibold">{selectedOptionLabel}</p>
            </div>
            <div className="flex justify-start items-center py-1">
               <CottageOutlinedIcon sx={{ fontSize: 35 }} />
               <p className="ml-2 text-base font-semibold">{selectedBoxData}</p>
            </div>
            <div className="flex justify-start items-center py-1">
               <p className="ml-2 text-base font-semibold">{selectedTimeData}</p>
            </div>
         </div>
         <div className="pb-4 w-full">
            <SelectedMultiOptions />
         </div>
      </section>
   );
};

export default BookingSummary;
