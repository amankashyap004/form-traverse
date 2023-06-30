import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../CustomDropdown";
import { setSelectedTimingData } from "../../store/actions/actions";
import data from "../../data.json";

const ExtraServiceDetails = () => {
   const dispatch = useDispatch();
   const timingData = data.timingData;

   const handleDropdownChange = (option) => {
      dispatch(setSelectedTimingData(option.label));
   };

   return (
      <section className="flex justify-center items-center w-full">
         <div className="mb-4 w-1/3 mr-3"></div>
         <div className="mb-4 w-1/3 mr-3">
            <CustomDropdown
               options={timingData}
               onChange={handleDropdownChange}
               defaultValue="Select time"
            />
         </div>
         <div className="mb-4 w-1/3"></div>
      </section>
   );
};

export default ExtraServiceDetails;
