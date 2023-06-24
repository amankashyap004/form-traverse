import React from "react";

const BasicBtn = ({ contained }) => {
   return (
      <button className="px-8 py-4 font-bold text-lg rounded-full bg-blue-950 text-white hover:underline">
         {contained}
      </button>
   );
};

export default BasicBtn;
