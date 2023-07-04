import React, { useState } from "react";
import CustomizeInput from "../../CustomizeInput";

const CardInfo = () => {
   const [formData, setFormData] = useState({
      cardNumber: "",
      cardDate: "",
      cardCvv: "",
   });

   const handleInputChange = (event) => {
      const { name, value } = event.target;

      const numericValue = value.replace(/\D/g, "");

      let updatedValue = numericValue;
      if (name === "cardNumber" && numericValue.length > 16) {
         updatedValue = numericValue.slice(0, 16);
      } else if (name === "cardDate" && numericValue.length > 4) {
         updatedValue = numericValue.slice(0, 4);
      } else if (name === "cardCvv" && numericValue.length > 3) {
         updatedValue = numericValue.slice(0, 3);
      }

      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: updatedValue,
      }));
   };
   //    console.log(formData);

   return (
      <form>
         <div className="grid grid-cols-3 w-full my-3">
            <CustomizeInput
               type="text"
               placeholder="1234 1234 1234"
               name="cardNumber"
               value={formData.cardNumber}
               onChange={handleInputChange}
            />
            <CustomizeInput
               type="text"
               placeholder="00/00"
               name="cardDate"
               value={formData.cardDate}
               onChange={handleInputChange}
            />
            <CustomizeInput
               type="text"
               placeholder="CVV"
               name="cardCvv"
               value={formData.cardCvv}
               onChange={handleInputChange}
            />
         </div>
      </form>
   );
};

export default CardInfo;
