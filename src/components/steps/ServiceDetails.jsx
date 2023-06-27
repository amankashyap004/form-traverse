import React, { useState, useEffect } from "react";
import CustomDropdown from "../CustomDropdown";

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

   return (
      <section>
         <h1 className="text-4xl font-extrabold my-4">Your Booking Details</h1>
         <h3 className="text-lg font-bold my-2">
            Choose service type, home size and other details
         </h3>
         <form>
            <CustomDropdown options={dropdownOptions} onChange={handleDropdownChange} />
            <p>Selected Option: {selectedOptionLabel}</p>
         </form>
      </section>
   );
};

export default ServiceDetails;
