import React, { useState, useEffect } from "react";
import CustomDropdown from "../CustomDropdown";
import MultiSelectDropdown from "../MultiSelectDropdown";

const ServiceDetails = () => {
   const [selectedOptionLabel, setSelectedOptionLabel] = useState("");

   const handleDropdownChange = (option) => {
      setSelectedOptionLabel(option.label);
   };

   useEffect(() => {
      setSelectedOptionLabel(dropdownOptions[0].label);
   }, []);

   const dropdownOptions = [
      {
         value: "option1",
         label: "Deep Cleaning (for homes that have not been cleaned in 3+ weeks)",
      },
      { value: "option2", label: "Regular Cleaning (for homes cleaned in last 3 weeks)" },
      { value: "option3", label: "Moving Cleanup (to clean home for new tenants)" },
      { value: "option4", label: "Post Construction Cleaning" },
      { value: "option5", label: "Vacation Rental Cleaning" },
   ];

   const dropdownMultiSelectOptions = [
      { value: "option1", label: "Miami Area Service", price: "$60" },
      { value: "option2", label: "Los Angeles Service", price: "$50" },
      { value: "option3", label: "San Francisco Service", price: "$75" },
      { value: "option4", label: "Seattle Service", price: "$50" },
      {
         value: "option5",
         label: "Residents 15+ miles from city center (select 1 per 15 miles)",
         price: "$20",
      },
      { value: "option6", label: "Additional Bathrooms (2 included by default)", price: "$20" },
      { value: "option7", label: "Additional Bedrooms", price: "$15" },
      { value: "option8", label: "Additional Sq. Footage (1 = 500 sq ft.)", price: "$35" },
      { value: "option9", label: "**Services within 24 hours**", price: "$75" },
      { value: "option10", label: "**Weekend Service**", price: "$50" },
   ];

   return (
      <section>
         <h1 className="text-4xl font-extrabold my-4">Your Booking Details</h1>
         <h3 className="text-lg font-bold my-2">
            Choose service type, home size and other details
         </h3>
         <form>
            <div className="mb-4">
               <CustomDropdown options={dropdownOptions} onChange={handleDropdownChange} />
               <p>Selected Option: {selectedOptionLabel}</p>
            </div>
            <div className="mb-4">
               <MultiSelectDropdown options={dropdownMultiSelectOptions} />
            </div>
         </form>
      </section>
   );
};

export default ServiceDetails;
