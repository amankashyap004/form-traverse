import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicBtn from "../components/BasicBtn";
import FormPage from "./FormPage";
import FeatureList from "../components/FeatureList";

const Home = () => {
   const [isFormPage, setIsFormPage] = useState(false);

   return (
      <main>
         <section className="flex justify-between items-start m-4 sm:flex-col">
            <section className="flex justify-center items-center flex-col p-4 w-1/2 sm:w-full sm:p-2">
               <div className="pb-4 sm:pb-2">
                  <p className="text-lg font-bold text-slate-700 sm:text-base">
                     Unlock the door to a seamless online experience with Form Traverse, where form
                     filling becomes a journey of simplicity and efficiency.{" "}
                     <Link to={"/about"} className="text-blue-900 hover:underline">
                        For more information
                     </Link>{" "}
                  </p>
               </div>
               <div className="mt-8 sm:mt-2" onClick={() => setIsFormPage(!isFormPage)}>
                  <BasicBtn contained="BOOKING CLEANING" />
               </div>
            </section>
            <div className="p-4 w-1/2 sm:w-full sm:p-2">
               <FeatureList />
            </div>
         </section>
         {isFormPage ? <FormPage isFormPage={isFormPage} setIsFormPage={setIsFormPage} /> : ""}
      </main>
   );
};

export default Home;
