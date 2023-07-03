import React from "react";
import { useSelector } from "react-redux";
import { getInfoFormData } from "../../../store/selectors/selectors";

const ContactInfoData = () => {
   const infoFormData = useSelector(getInfoFormData);

   const isEmpty = Object.values(infoFormData).every((value) => value === "");

   if (isEmpty) {
      return null;
   }

   return (
      <section className="flex justify-start items-start flex-col text-base font-semibold py-4 border-b border-slate-400">
         <div className="flex justify-start items-center">
            <span className="mr-2">{infoFormData.firstName}</span>
            <span>{infoFormData.lastName}</span>
         </div>
         <span>{infoFormData.phoneNumber}</span>
         <span>{infoFormData.email}</span>
      </section>
   );
};

export default ContactInfoData;
