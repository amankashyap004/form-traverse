import React from "react";

const BasicBtn = ({ contained }) => {
   return (
      <button className="px-8 py-4 font-bold text-lg rounded-full bg-blue-950 text-white hover:underline sm:py-3 sm:text-base">
         {contained}
      </button>
   );
};

export default BasicBtn;
