import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDropdown from "../CustomDropdown";
import MultiSelectDropdown from "../MultiSelectDropdown";
import { getSelectedOptionLabel } from "../../store/selectors/selectors";
import HouseDetails from "./HouseDetails";
import ExtraServiceDetails from "./ExtraServiceDetails";
import data from "../../data.json";
import {
   setMultiOptions,
   setSelectedOptionLabel,
   setSelectedOptionPrice,
} from "../../store/actions/actions";

const ServiceDetails = () => {
   const dispatch = useDispatch();
   const dropdownOptions = data.dropdownOptions;

   const selectedOptionLabel = useSelector(getSelectedOptionLabel);

   const handleDropdownChange = (option) => {
      dispatch(setSelectedOptionLabel(option.label));
      dispatch(setSelectedOptionPrice(option.price));
   };

   useEffect(() => {
      dispatch(setSelectedOptionLabel(dropdownOptions[0].label));
      dispatch(setSelectedOptionPrice(dropdownOptions[0].price));
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
