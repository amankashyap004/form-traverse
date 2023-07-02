import React from "react";

const CustomizeInput = ({ type, placeholder, value, onChange }) => {
   return (
      <div className="w-full mr-2 my-2 ">
         <input
            className="px-4 py-3 border border-slate-400 rounded-lg w-full text-black appearance-none outline-none"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
         />
      </div>
   );
};

export default CustomizeInput;
