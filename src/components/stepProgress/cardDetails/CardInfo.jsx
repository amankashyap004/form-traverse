import React from "react";
import CustomizeInput from "../../CustomizeInput";

const CardInfo = () => {
   return (
      <form>
         <div className="grid grid-cols-3 w-full my-3">
            <CustomizeInput type="text" placeholder="1234 1234 1234" name="cardNumber" />
            <CustomizeInput type="text" placeholder="00/00" name="cardDate" />
            <CustomizeInput type="text" placeholder="CVV" name="cardCvv" />
         </div>
      </form>
   );
};

export default CardInfo;
