import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../CustomDropdown";
import {
   setSelectedTimingData,
   setSelectedServiceFrequencyData,
} from "../../store/actions/actions";
import data from "../../data.json";

const serviceFrequencyData = [
   {
      value: "option1",
      label: "One Time Cleaning",
   },
   {
      value: "option2",
      label: "Weekly Cleaning (20%)",
   },
];

const ExtraServiceDetails = () => {
   const dispatch = useDispatch();
   const timingData = data.timingData;

   const handleDropdownChangeTiming = (option) => {
      dispatch(setSelectedTimingData(option.label));
   };

   const handleDropdownServiceFrequency = (option) => {
      dispatch(setSelectedServiceFrequencyData(option.label));
   };

   return (
      <section className="flex justify-center items-center w-full">
         {/* Date */}
         <div className="mb-4 w-1/3 mr-3"></div>
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
