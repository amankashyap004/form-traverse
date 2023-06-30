import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../CustomDropdown";
import { setSelectedTimingData } from "../../store/actions/actions";

const timingData = [
   {
      value: "option1",
      label: "09:00 AM",
   },
   {
      value: "option2",
      label: "10:00 AM",
   },
];

const ExtraServiceDetails = () => {
   const dispatch = useDispatch();
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
