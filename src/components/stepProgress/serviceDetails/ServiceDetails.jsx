import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CustomDropdown from "../../CustomDropdown";
import MultiSelectDropdown from "../../MultiSelectDropdown";
import HouseDetails from "./HouseDetails";
import ExtraServiceDetails from "./ExtraServiceDetails";
import data from "../../../data.json";
import { setSelectedOptionData, setMultiOptions } from "../../../store/actions/actions";

const ServiceDetails = () => {
   const dispatch = useDispatch();
   const dropdownOptions = data.dropdownOptions;

   const handleDropdownChange = (option) => {
      dispatch(setSelectedOptionData(option));
   };

   useEffect(() => {
      dispatch(setSelectedOptionData(dropdownOptions[0]));
   }, []);

   const dropdownMultiSelectOptions = data.dropdownMultiSelectOptions;
   const [selectedMultiOptions, setSelectedMultiOptions] = useState([]);

   const handleSelectedOptionsChange = (selectedMultiOptions) => {
      setSelectedMultiOptions(selectedMultiOptions);
      dispatch(setMultiOptions(selectedMultiOptions));
   };

   return (
      <section>
         <h1 className="text-4xl font-extrabold my-4">Your Booking Details</h1>
         <h3 className="text-lg font-bold my-2">
            Choose service type, home size and other details
         </h3>
         <form>
            <div className="mb-4">
               <CustomDropdown options={dropdownOptions} onChange={handleDropdownChange} />
            </div>
            <div className="mb-4">
               <HouseDetails />
            </div>
            <div className="mb-4">
               <MultiSelectDropdown
                  options={dropdownMultiSelectOptions}
                  onChange={handleSelectedOptionsChange}
               />
            </div>
            <div className="mb-4">
               <ExtraServiceDetails />
            </div>
         </form>
      </section>
   );
};

export default ServiceDetails;
