import React, { useState } from "react";
import { useSelector } from "react-redux";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SelectedMultiOptions from "./serviceDetails/SelectedMultiOptions";
import ContactInfoData from "./contactInformation/ContactInfoData";
import ServiceAddressData from "./serviceAddress/ServiceAddressData";
import TotalPrice from "./TotalPrice";
import {
   getSelectedOptionLabel,
   getSelectedBoxData,
   getSelectedDateData,
   getSelectedTimingData,
   getSelectedServiceFrequencyData,
} from "../../store/selectors/selectors";

const BookingSummary = () => {
   const selectedOptionLabel = useSelector(getSelectedOptionLabel);
   const selectedBoxData = useSelector(getSelectedBoxData);
   const selectedDateData = useSelector(getSelectedDateData);
   const selectedTimeData = useSelector(getSelectedTimingData);
   const selectedServiceFrequency = useSelector(getSelectedServiceFrequencyData);

   const [totalPriceOfSelectedMultiOptions, setTotalPriceOfSelectedMultiOptions] = useState(0);

   const updateTotalPriceOfSelectedMultiOptions = (price) => {
      setTotalPriceOfSelectedMultiOptions(price);
   };

   return (
      <section className="w-[90%] h-full">
         <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4">Booking summary</h1>
         <div>
            <ContactInfoData />
         </div>
         <div>
            <ServiceAddressData />
         </div>
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
               <CalendarMonthIcon sx={{ fontSize: 35 }} />
               <p className="ml-2 text-base font-semibold">
                  {selectedDateData && selectedTimeData
                     ? `${selectedDateData}, ${selectedTimeData}`
                     : selectedDateData || selectedTimeData || "Choose service date"}
               </p>
            </div>
            <div className="flex justify-start items-center py-1">
               <CleaningServicesIcon sx={{ fontSize: 35 }} />
               <p className="ml-2 text-base font-semibold">
                  {selectedServiceFrequency ? selectedServiceFrequency : "Service frequency"}
               </p>
            </div>
         </div>
         <div className="pb-4 w-full">
            <SelectedMultiOptions
               updateTotalPriceOfSelectedMultiOptions={updateTotalPriceOfSelectedMultiOptions}
            />
         </div>
         <div className="w-full">
            <TotalPrice totalPriceOfSelectedMultiOptions={totalPriceOfSelectedMultiOptions} />
         </div>
      </section>
   );
};

export default BookingSummary;