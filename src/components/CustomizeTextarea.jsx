import React from "react";

const CustomizeTextarea = ({ placeholder, value, onChange, name }) => {
   return (
      <div className="w-full mr-2 my-2">
         <textarea
            className="px-4 py-3 border border-slate-400 rounded-lg w-full text-black appearance-none outline-none"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
         ></textarea>
      </div>
   );
};

export default CustomizeTextarea;
