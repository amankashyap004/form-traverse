import React from "react";
import CustomDropdown from "../CustomDropdown";

const ServiceDetails = () => {
   const handleDropdownChange = (e) => {
      console.log("Selected value:", e.value);
   };

   const dropdownOptions = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
   ];

   return (
      <section>
         <h1 className="text-4xl font-extrabold my-4">Your Booking Details</h1>
         <h3 className="text-lg font-bold my-2">
            Choose service type, home size and other details
         </h3>
         <form>
            <CustomDropdown options={dropdownOptions} onChange={handleDropdownChange} />
         </form>
      </section>
   );
};

export default ServiceDetails;
