import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import StepProgress from "../components/stepProgress/StepProgress";
import BookingSummary from "../components/stepProgress/BookingSummary";

const FormPage = ({ isFormPage, setIsFormPage }) => {
   return (
      <>
         {isFormPage ? (
            <div className="flex justify-center items-start bg-white shadow-md w-[92%] h-full absolute top-0 left-14 p-8 max-h-full overflow-y-auto md:left-5 md:p-4 md:w-[95%] sm:left-0 sm:w-full">
               <section
                  className="absolute right-2 top-2 px-4 py-2 cursor-pointer md:top-1 md:right-1 md:p-2 sm:top-0 sm:right-0"
                  onClick={() => setIsFormPage(!isFormPage)}
               >
                  <CloseIcon style={{ fontSize: "30px" }} />
               </section>
               <section className="m-6 pb-6 w-[92%] md:w-[95%] md:m-0 md:p-2 sm:w-full sm:p-1">
                  <div className="flex justify-start items-start w-full md:flex-col">
                     <div className="w-[55%] md:w-full">
                        <StepProgress />
                     </div>
                     <div className="ml-8 px-8 border-l border-slate-400 w-[45%] md:w-full md:ml-0 md:p-0 md:mt-8 md:border-none">
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
