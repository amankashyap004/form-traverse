import React from "react";

const Button = ({ contained, disabled, onClick, extraStyle }) => {
   return (
      <button
         className={`px-16 py-3 font-semibold text-base rounded-full uppercase cursor-pointer sm:px-6 sm:text-sm ${
            disabled ? "opacity-30 text-slate-500" : ""
         } ${extraStyle ? extraStyle : ""}`}
         disabled={disabled}
         onClick={onClick}
      >
         {contained}
      </button>
   );
};

export default Button;
