import React, { useState } from "react";

const CustomDropdown = ({ options, onChange }) => {
   const [selectedOption, setSelectedOption] = useState(null);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
      onChange(option);
   };

   return (
      <div className="relative inline-block w-full">
         <div
            className="flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-md cursor-pointer w-full"
            onClick={() => setDropdownOpen(!dropdownOpen)}
         >
            <span className="truncate">
               {selectedOption ? selectedOption.label : "Choose an option"}
            </span>
            <div
               className={`ml-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            >
               !
            </div>
         </div>
         {dropdownOpen && (
            <div className="absolute z-10 px-4 py-3 overflow-y-auto bg-white border border-gray-300 rounded-md shadow w-full ">
               {options.map((option) => (
                  <div
                     key={option.value}
                     className="p-2 hover:text-blue-500 cursor-pointer"
                     onClick={() => handleOptionClick(option)}
                  >
                     {option.label}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default CustomDropdown;
