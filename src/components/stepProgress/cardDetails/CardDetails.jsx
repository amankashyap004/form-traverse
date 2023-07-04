import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import CardInfo from "./CardInfo";

const CardDetails = () => {
   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4">Book Now or Save Quote</span>
            <span className="text-base font-semibold my-2">
               You may book now by entering your card details or leave blank and save quote for
               later.
            </span>
         </div>
         <div>
            <CardInfo />
         </div>
         <div className=" flex justify-start items-center my-4">
            <div className="mr-2">
               <VerifiedUserIcon sx={{ fontSize: 35 }} />
            </div>
            <span className="text-xl text-slate-500 my-4">
               Guaranteed <span className="text-black font-semibold">safe & secure</span> checkout
            </span>
            <div className="flex justify-center items-center bg-slate-900 text-slate-300 text-xs rounded-md px-3 py-1 mx-2">
               <PriceCheckIcon fontSize="small" />
               <span className="mx-1 uppercase">Payment</span>
            </div>
         </div>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-lg font-extrabold my-1">
               BEFORE CLICKING BOOK NOW PLEASE REVIEW THESE TERMS CAREFULLY.{" "}
            </span>
            <span className="text-base my-1 text-slate-500">
               By clicking <span className="text-black font-semibold">BOOK NOW</span>, I agree that
               my booking reflects the actual size/condition of the above property/home. Pro
               Housekeepers RESERVES the right to ADJUST pricing to include any extra costs. I also
               understand that there will be a non-refundable $75 fee and possible cancellation for
               insect/rodent issues, hoarding, and/or having other workers present during service.
            </span>
            <span className="text-base my-1 text-slate-500">
               <span className="text-black font-semibold">I AGREE TO REVIEW ALL WORK</span> WHILE
               THE SERVICE IS BEING DONE AT THE
            </span>
            <span className="text-base my-1 text-slate-500">
               <span className="text-black font-semibold">I UNDERSTAND</span> THAT MAKING ANY CLAIMS
               ABOUT THE SERVICE AFTER WE'VE LEFT THE PROPERTY IS UNACCEPTABLE AND NO REFUNDS,
               CREDITS OR ADDITIONAL SERVICES WILL BE PROVIDED.
            </span>
         </div>
      </section>
   );
};

export default CardDetails;
