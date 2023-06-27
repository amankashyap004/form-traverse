import React from "react";
import StepProgress from "./StepProgress";

const FormPageContain = () => {
   return (
      <section className="flex justify-start items-start w-full">
         <div className="w-[55%]">
            <StepProgress />
         </div>
         <div className="ml-6 px-8 border-l border-slate-400 w-[45%]">
            <h1 className="font-extrabold text-3xl border-b border-slate-400 pb-4 w-full">
               Booking summary
            </h1>
         </div>
      </section>
   );
};

export default FormPageContain;
