import React from "react";
import BasicBtn from "../components/BasicBtn";

const Home = () => {
   return (
      <main className="flex justify-start items-start flex-col m-4">
         <div className="w-1/2 p-4">
            <p className="text-lg font-bold text-slate-700 ">
               Unlock the door to a seamless online experience with Form Traverse, where form
               filling becomes a journey of simplicity and efficiency.
            </p>
         </div>
         <div className="m-8">
            <BasicBtn contained="BOOKING CLEANING" />
         </div>
      </main>
   );
};

export default Home;
