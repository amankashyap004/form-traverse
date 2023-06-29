import React, { useState } from "react";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

const BasicBox = ({ icon, title, paragraph, isSelected }) => {
   return (
      <div
         className={`flex justify-center items-center flex-col w-28 py-2 mr-2 rounded-lg border border-slate-400 cursor-pointer ${
            isSelected ? "bg-slate-300" : ""
         }`}
         onClick={() => isSelected}
      >
         <div>{icon ? icon : <HomeWorkOutlinedIcon sx={{ fontSize: 40 }} />}</div>
         <span className="font-bold text-base">{title}</span>
         <span className="text-xs font-semibold text-slate-500">{paragraph}</span>
      </div>
   );
};

export default BasicBox;
