import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomDropdown = ({ options, defaultValue, onChange }) => {
   const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);
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
            <span className="truncate font-semibold">
               {selectedOption && selectedOption !== defaultValue ? (
                  selectedOption.label
               ) : (
                  <span className="text-slate-400">{defaultValue}</span>
               )}
            </span>
            <div
               className={`ml-4 transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            >
               <ExpandMoreIcon />
            </div>
         </div>
         {dropdownOpen && (
            <div className="absolute z-10 px-4 py-3 bg-white border border-gray-300 rounded-md shadow w-full max-h-60 overflow-y-auto">
               {options.map((option) => (
                  <div
                     key={option.value}
                     className="p-2 hover:text-blue-500 cursor-pointer sm:p-1"
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
