import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import StepProgress from "../components/StepProgress";

const FormPage = ({ isFormPage, setIsFormPage }) => {
   return (
      <>
         {isFormPage ? (
            <div className="bg-white shadow-md w-[92%] h-full absolute top-0 mx-8 p-8 ">
               <section
                  className="absolute right-2 top-2 px-4 py-2 cursor-pointer"
                  onClick={() => setIsFormPage(!isFormPage)}
               >
                  <CloseIcon style={{ fontSize: "30px" }} />
               </section>
               <section className="ml-12 mt-8 absolute">
                  <StepProgress />
               </section>
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default FormPage;
