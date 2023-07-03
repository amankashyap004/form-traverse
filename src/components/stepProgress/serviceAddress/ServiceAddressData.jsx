import React from "react";
import { useSelector } from "react-redux";
import { getServiceFormData } from "../../../store/selectors/selectors";

const ServiceAddressData = () => {
   const serviceFormData = useSelector(getServiceFormData);

   const isEmpty = Object.values(serviceFormData).every(
      (value) => value === "" || value === "State"
   );

   if (isEmpty) {
      return null;
   }

   return (
      <section className="flex justify-start items-start flex-col text-base font-semibold py-4 border-b border-slate-400">
         <div className="flex justify-start items-start flex-col">
            <span>{serviceFormData.streetAddress}</span>
            <span>{serviceFormData.aptSuite}</span>
            <span>{serviceFormData.city}</span>
            <span>{serviceFormData.selectedOption}</span>
            <span>{serviceFormData.zip}</span>
         </div>
      </section>
   );
};

export default ServiceAddressData;
