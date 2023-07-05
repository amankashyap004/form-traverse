import React, { useState } from "react";
import ServiceDetails from "./serviceDetails/ServiceDetails";
import ContactInformation from "./contactInformation/ContactInformation";
import ServiceAddress from "./serviceAddress/ServiceAddress";
import CardDetails from "./cardDetails/CardDetails";
import Button from "../Button";

const StepProgress = () => {
   const [activeStep, setActiveStep] = useState(1);

   const handleNextStep = () => {
      if (activeStep < 4) {
         setActiveStep(activeStep + 1);
      }
   };

   const handlePreviousStep = () => {
      if (activeStep > 1) {
         setActiveStep(activeStep - 1);
      }
   };

   const handleSaveQuote = () => {
      console.log("Save Quote");
   };

   const handleBookNow = () => {
      console.log("Book Now");
   };

   return (
      <section className="flex justify-start items-start flex-col relative w-full">
         <div className="h-0.5 bg-slate-200 w-[10rem] top-4 left-2 absolute"></div>
         <div className="flex justify-center items-center absolute mb-4">
            <StepNumberIndicator step={1} activeStep={activeStep} />
            <StepNumberIndicator step={2} activeStep={activeStep} />
            <StepNumberIndicator step={3} activeStep={activeStep} />
            <StepNumberIndicator step={4} activeStep={activeStep} />
         </div>
         <div className="mt-14 text-slate-500 text-sm">
            <StepParagraph activeStep={activeStep} />
         </div>
         <div className="mt-4 w-full sm:mt-1">
            {activeStep === 1 && <ServiceDetails />}
            {activeStep === 2 && <ContactInformation />}
            {activeStep === 3 && <ServiceAddress />}
            {activeStep === 4 && <CardDetails />}
         </div>
         <div className="flex justify-between items-center mt-4 w-full">
            <Button
               extraStyle={"bg-yellow-400 text-slate-900"}
               contained="Back"
               disabled={activeStep === 1}
               onClick={handlePreviousStep}
            />
            {activeStep !== 4 && (
               <Button
                  extraStyle={"bg-blue-800 text-white"}
                  contained="Next Step"
                  disabled={activeStep === 4}
                  onClick={handleNextStep}
               />
            )}
            {activeStep === 4 && (
               <div className="flex justify-end items-center w-full">
                  <Button
                     extraStyle="bg-blue-950 ml-4 text-white sm:ml-2"
                     contained="Save Quote"
                     disabled={activeStep !== 4}
                     onClick={handleSaveQuote}
                  />
                  <Button
                     extraStyle={"bg-green-700 ml-4 text-white sm:ml-2"}
                     contained="Book Now"
                     disabled={activeStep !== 4}
                     onClick={handleBookNow}
                  />
               </div>
            )}
         </div>
      </section>
   );
};

const StepNumberIndicator = ({ step, activeStep }) => {
   const isActive = step === activeStep;

   return (
      <div
         className={`${
            isActive ? "bg-yellow-400 text-black" : "text-slate-500 bg-slate-200"
         } flex justify-center items-center text-sm mr-6 cursor-pointer w-8 h-8 rounded-full`}
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
