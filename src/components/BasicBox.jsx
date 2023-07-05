import React from "react";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

const BasicBox = ({ data, isSelected, onClick }) => {
   const handleClick = () => {
      onClick(data);
   };

   return (
      <div
         className={`flex justify-center items-center flex-col w-28 py-2 mr-2 rounded-lg border border-slate-400 cursor-pointer sm:w-full sm:m-0 sm:p-2 ${
            isSelected ? "bg-slate-300" : ""
         }`}
         onClick={handleClick}
      >
         <div>{data.icon ? data.icon : <HomeWorkOutlinedIcon sx={{ fontSize: 40 }} />}</div>
         <span className="font-bold text-base">{data.title}</span>
         <span className="text-xs font-semibold text-slate-500">{data.paragraph}</span>
      </div>
   );
};

export default BasicBox;
