import React, { useState } from "react";
import ServiceDetails from "./ServiceDetails";
import ContactInformation from "./contactInformation/ContactInformation";
import ServiceAddress from "./serviceAddress/ServiceAddress";

import Button from "../Button";

const StepProgress = () => {
   const [activeStep, setActiveStep] = useState(1);

   const handleClick = (step) => {
      setActiveStep(step);
   };

   return (
      <section className="flex justify-start items-start flex-col relative w-full">
         <div className="h-0.5 bg-slate-200 w-[10rem] top-4 left-2 absolute"></div>
         <div className="flex justify-center items-center absolute mb-4">
            <StepNumberIndicator step={1} activeStep={activeStep} onClick={handleClick} />
            <StepNumberIndicator step={2} activeStep={activeStep} onClick={handleClick} />
            <StepNumberIndicator step={3} activeStep={activeStep} onClick={handleClick} />
            <StepNumberIndicator step={4} activeStep={activeStep} onClick={handleClick} />
         </div>
         <div className="mt-14 text-slate-500 text-sm">
            <StepParagraph activeStep={activeStep} />
         </div>
         <div className="mt-4 w-full">
            <ServiceDetails />
            <ContactInformation />
            <ServiceAddress />
         </div>
         <div className="mt-4 w-full">
            <Button contained="Next Step" disabled={false} />
         </div>
      </section>
   );
};

const StepNumberIndicator = ({ step, activeStep, onClick }) => {
   const isActive = step === activeStep;

   const handleClick = () => {
      onClick(step);
   };

   return (
      <div
         className={`${
            isActive ? "bg-yellow-400 text-black" : "text-slate-500 bg-slate-200"
         } flex justify-center items-center text-sm mr-6 cursor-pointer w-8 h-8 rounded-full`}
         onClick={handleClick}
      >
         {step}
      </div>
   );
};

const StepParagraph = ({ activeStep }) => {
   const paragraphs = [
      "Step 1 - Select Service Details",
      "Step 2 - Add Contact Information",
      "Step 3 - Add Service Address",
      "Step 4 - Save Quote or Book Now",
   ];

   return <p>{paragraphs[activeStep - 1]}</p>;
};

export default StepProgress;
