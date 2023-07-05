import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomDropdown from "../../CustomDropdown";
import CustomDatePicker from "../../CustomDatePicker";
import {
   setSelectedDateData,
   setSelectedTimingData,
   setServiceFrequencyData,
} from "../../../store/actions/actions";
import data from "../../../data.json";

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
      dispatch(setServiceFrequencyData(option));
   };

   // useEffect(() => {
   //    dispatch(setServiceFrequencyData(serviceFrequencyData[0]));
   // }, []);

   return (
      <section className="flex justify-center items-center w-full sm:flex-col">
         {/* Select Date */}
         <div className="mb-4 w-1/3 mr-3 sm:w-full sm:mr-0">
            <CustomDatePicker onDateSelect={handleDateSelect} />
         </div>
         {/* Timing */}
         <div className="mb-4 w-1/3 mr-3 sm:w-full sm:mr-0">
            <CustomDropdown
               options={timingData}
               onChange={handleDropdownChangeTiming}
               defaultValue="Select time"
            />
         </div>
         {/* Service Frequency */}
         <div className="mb-4 w-1/3 sm:w-full sm:mr-0">
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
