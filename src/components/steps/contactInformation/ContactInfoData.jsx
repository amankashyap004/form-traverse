import React from "react";
import { useSelector } from "react-redux";

import { getInfoFormData } from "../../../store/selectors/selectors";

const ContactInfoData = () => {
   const infoFormData = useSelector(getInfoFormData);
   console.log(infoFormData);
   return (
      <section>
         <div>
            <span>{infoFormData.firstName}</span>
         </div>
      </section>
   );
};

export default ContactInfoData;
