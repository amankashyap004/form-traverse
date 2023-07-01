import React from "react";

const Button = ({ contained, disabled, onClick }) => {
   return (
      <button
         className={`px-20 py-3 font-semibold text-base rounded-full bg-blue-950 text-white uppercase cursor-pointer ${
            disabled ? "opacity-50 text-slate-500" : ""
         }`}
         disabled={disabled}
         onClick={onClick}
      >
         {contained}
      </button>
   );
};

export default Button;
