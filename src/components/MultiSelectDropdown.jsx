import React, { useState } from "react";

const MultiSelectDropdown = ({ options, onChange }) => {
   const [selectedOptions, setSelectedOptions] = useState([]);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const handleOptionClick = (option) => {
      const updatedOptions = [...selectedOptions];
      const optionIndex = updatedOptions.findIndex(
         (selectedOption) => selectedOption.value === option.value
      );

      if (optionIndex > -1) {
         // Remove the option if it already exists
         updatedOptions.splice(optionIndex, 1);
      } else {
         // Add the option if it doesn't exist
         updatedOptions.push(option);
      }

      setSelectedOptions(updatedOptions);
      onChange(updatedOptions);
   };

   const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
   };

   return (
      <div className="relative w-full">
         <div
            className="border border-slate-400 rounded-md cursor-pointer w-full flex justify-start items-start flex-wrap"
            onClick={toggleDropdown}
         >
            <div className="p-2 flex justify-start items-start flex-wrap">
               {selectedOptions.length > 0 ? (
                  selectedOptions.map((option) => (
                     <div
                        key={option.value}
                        className="flex justify-center items-center px-2 py-1 m-1 bg-blue-800 text-white rounded-md"
                        onClick={() => handleOptionClick(option)}
                     >
                        <span className="font-bold text-lg cursor-pointer ml-2 mr-3">&times;</span>
                        <span>{option.label}</span>
                     </div>
                  ))
               ) : (
                  <div className="p-1 text-gray-500">Select options</div>
               )}
            </div>
         </div>
         {dropdownOpen && (
            <div className="absolute z-10 px-2 py-1 bg-white border border-slate-400 rounded-md shadow w-full max-h-48 overflow-y-auto">
               {options.map((option) => (
                  <div
                     key={option.value}
                     className={`flex justify-between items-center pl-2 pr-4 py-1 font-medium text-base hover:text-blue-500 cursor-pointer w-full ${
                        selectedOptions.some(
                           (selectedOption) => selectedOption.value === option.value
                        ) && "text-blue-500"
                     }`}
                     onClick={() => handleOptionClick(option)}
                  >
                     <span>{option.label}</span>
                     <span>{option.price}</span>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default MultiSelectDropdown;
