import React from "react";

const Button = ({ contained, disabled }) => {
   return (
      <button
         className={`px-20 py-3 font-semibold text-base rounded-full bg-blue-950 text-white uppercase cursor-pointer ${
            disabled ? "opacity-50 text-slate-500" : ""
         }`}
         disabled={disabled}
      >
         {contained}
      </button>
   );
};

export default Button;
