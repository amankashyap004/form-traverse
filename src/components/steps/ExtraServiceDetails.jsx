import React from "react";
import { useDispatch } from "react-redux";
import CustomDropdown from "../CustomDropdown";
import CustomDatePicker from "../CustomDatePicker";
import {
   setSelectedDateData,
   setSelectedTimingData,
   setSelectedServiceFrequencyData,
   setSelectedServiceFrequencyOffer,
} from "../../store/actions/actions";
import data from "../../data.json";

const ExtraServiceDetails = () => {
   const dispatch = useDispatch();
   const timingData = data.timingData;
   const serviceFrequencyData = data.serviceFrequencyData;

   const handleDateSelect = (date) => {
      dispatch(setSelectedDateData(date));
   };

   const handleDropdownChangeTiming = (option) => {
      dispatch(setSelectedTimingData(option.label));
   };

   const handleDropdownServiceFrequency = (option) => {
      dispatch(setSelectedServiceFrequencyData(option.label));
      dispatch(setSelectedServiceFrequencyOffer(option.offer));
   };

   return (
      <section className="flex justify-center items-center w-full">
         {/* Select Date */}
         <div className="mb-4 w-1/3 mr-3">
            <CustomDatePicker onDateSelect={handleDateSelect} />
         </div>
         {/* Timing */}
         <div className="mb-4 w-1/3 mr-3">
            <CustomDropdown
               options={timingData}
               onChange={handleDropdownChangeTiming}
               defaultValue="Select time"
            />
         </div>
         {/* Service Frequency */}
         <div className="mb-4 w-1/3">
            <CustomDropdown
               options={serviceFrequencyData}
               onChange={handleDropdownServiceFrequency}
               defaultValue="Service Frequency"
            />
         </div>
      </section>
   );
};

export default ExtraServiceDetails;
