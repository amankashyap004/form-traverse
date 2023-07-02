import React from "react";

const CustomizeInput = ({ type, placeholder, value, onChange, name }) => {
   return (
      <div className="w-[full-2] mr-2 my-2 ">
         <input
            className="px-4 py-3 border border-slate-400 rounded-lg w-full text-black appearance-none outline-none"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
         />
      </div>
   );
};

export default CustomizeInput;
