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

      let formattedValue = "";
      if (name === "cardDate") {
         if (numericValue.length > 2) {
            formattedValue = numericValue.substr(0, 2) + "/" + numericValue.substr(2, 2);
         } else {
            formattedValue = numericValue;
         }
      } else {
         for (let i = 0; i < numericValue.length; i += 4) {
            if (i !== 0) {
               formattedValue += " ";
            }
            formattedValue += numericValue.substr(i, 4);
         }
      }

      let updatedValue = formattedValue;
      if (name === "cardNumber" && formattedValue.length > 19) {
         updatedValue = formattedValue.slice(0, 19);
      } else if (name === "cardDate" && formattedValue.length > 5) {
         updatedValue = formattedValue.slice(0, 5);
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
               placeholder="MM/YY"
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
