import React, { useState } from "react";
import { Link } from "react-router-dom";
import BasicBtn from "../components/BasicBtn";
import FormPage from "./FormPage";

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
               <p className="text-base font-semibold text-slate-500 text-justify sm:text-sm">
                  Form Traverse is a modern and intuitive multi-step form system I have built using
                  React. With Form Traverse, I aim to enhance the user experience of form filling by
                  breaking down lengthy or complex forms into manageable sections. By dividing the
                  form into multiple pages, users can comfortably complete one page at a time and
                  seamlessly navigate to the next. My solution not only simplifies the form-filling
                  process but also provides a clear and structured user interface, ensuring that
                  users can easily track their progress. With Form Traverse, I strive to make form
                  submission a breeze, offering an efficient and user-friendly experience for all.
               </p>
            </div>
         </section>
         {isFormPage ? <FormPage isFormPage={isFormPage} setIsFormPage={setIsFormPage} /> : ""}
      </main>
   );
};

export default Home;
