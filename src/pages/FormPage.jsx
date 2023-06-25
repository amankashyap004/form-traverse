import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const FormPage = ({ isFormPage, setIsFormPage }) => {
   return (
      <>
         {isFormPage ? (
            <div className="bg-white shadow-md w-[92%] h-full absolute top-0 mx-8 ">
               <div
                  className="absolute right-2 top-2 px-4 py-2 cursor-pointer"
                  onClick={() => setIsFormPage(!isFormPage)}
               >
                  <CloseIcon style={{ fontSize: "30px" }} />
               </div>
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default FormPage;
