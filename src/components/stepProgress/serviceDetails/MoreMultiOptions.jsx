import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMultiOptions } from "../../../store/actions/actions";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MoreMultiOptions = () => {
   const dispatch = useDispatch();
   const multiOptions = useSelector((state) => state.selectedMultiOptions);

   const handleClick = (option, action) => {
      const updatedOptions = multiOptions.map((selectedOption) => {
         if (selectedOption.value === option.value && selectedOption.quantity !== undefined) {
            let quantity = selectedOption.quantity;

            if (action === "add") {
               quantity++;
            } else if (action === "subtract") {
               if (quantity > 1) {
                  quantity--;
               }
            }

            return {
               ...selectedOption,
               quantity: quantity,
            };
         }
         return selectedOption;
      });

      dispatch(setMultiOptions(updatedOptions));
   };

   const shouldRenderComponent = multiOptions.some((option) => option.quantity !== undefined);

   return (
      <>
         {shouldRenderComponent && (
            <div>
               {multiOptions.map((option) => (
                  <div key={option.value}>
                     {option.quantity !== undefined && (
                        <div className="flex justify-start items-center p-2 text-base font-bold">
                           <span>{option.label}</span>
                           <div className="flex justify-center items-center p-1 ml-2 border border-slate-400 rounded-lg">
                              <KeyboardArrowLeftIcon
                                 className="cursor-pointer"
                                 onClick={() => handleClick(option, "subtract")}
                              />
                              <span>{option.quantity}</span>
                              <KeyboardArrowRightIcon
                                 className="cursor-pointer"
                                 onClick={() => handleClick(option, "add")}
                              />
                           </div>
                        </div>
                     )}
                  </div>
               ))}
            </div>
         )}
      </>
   );
};

export default MoreMultiOptions;
