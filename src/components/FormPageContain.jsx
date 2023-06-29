import React from "react";
import StepProgress from "./steps/StepProgress";
import BookingSummary from "./BookingSummary";

const FormPageContain = () => {
   return (
      <section className="flex justify-start items-start w-full">
         <div className="w-[55%]">
            <StepProgress />
         </div>
         <div className="ml-6 px-8 border-l border-slate-400 w-[45%]">
            <BookingSummary />
         </div>
      </section>
   );
};

export default FormPageContain;
