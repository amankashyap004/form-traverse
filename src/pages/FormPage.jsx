import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import StepProgress from "../components/stepProgress/StepProgress";
import BookingSummary from "../components/stepProgress/BookingSummary";

const FormPage = ({ isFormPage, setIsFormPage }) => {
   return (
      <>
         {isFormPage ? (
            <div className="bg-white shadow-md w-[92%] h-full absolute top-0 mx-8 p-8 max-h-full overflow-y-auto">
               <section
                  className="absolute right-2 top-2 px-4 py-2 cursor-pointer"
                  onClick={() => setIsFormPage(!isFormPage)}
               >
                  <CloseIcon style={{ fontSize: "30px" }} />
               </section>
               <section className="ml-12 mt-8 absolute w-[92%]">
                  <div className="flex justify-start items-start w-full">
                     <div className="w-[55%]">
                        <StepProgress />
                     </div>
                     <div className="ml-6 px-8 border-l border-slate-400 w-[45%]">
                        <BookingSummary />
                     </div>
                  </div>
               </section>
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default FormPage;
