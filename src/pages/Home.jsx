import React from "react";
import BasicBtn from "../components/BasicBtn";

const Home = () => {
   return (
      <main className="flex justify-between items-center m-4">
         <section className="flex justify-center items-center flex-col p-4 w-1/2">
            <div className="pb-4">
               <p className="text-lg font-bold text-slate-700 ">
                  Unlock the door to a seamless online experience with Form Traverse, where form
                  filling becomes a journey of simplicity and efficiency.
               </p>
            </div>
            <div className="mt-8">
               <BasicBtn contained="BOOKING CLEANING" />
            </div>
         </section>
         <div className="p-4 w-1/2">
            <p className="text-base font-semibold text-slate-500 text-justify">
               Form Traverse is a modern and intuitive multi-step form system I have built using
               React. With Form Traverse, I aim to enhance the user experience of form filling by
               breaking down lengthy or complex forms into manageable sections. By dividing the form
               into multiple pages, users can comfortably complete one page at a time and seamlessly
               navigate to the next. My solution not only simplifies the form-filling process but
               also provides a clear and structured user interface, ensuring that users can easily
               track their progress. With Form Traverse, I strive to make form submission a breeze,
               offering an efficient and user-friendly experience for all.
            </p>
         </div>
      </main>
   );
};

export default Home;
