import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMultiOptions } from "../../../store/actions/actions";

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
                           <div className="p-1 ml-2 border border-slate-400 rounded-lg">
                              <span
                                 onClick={() => handleClick(option, "subtract")}
                                 className="px-2 font-extrabold text-xl cursor-pointer"
                              >
                                 {"-"}
                              </span>
                              <span>{option.quantity}</span>
                              <span
                                 onClick={() => handleClick(option, "add")}
                                 className="px-2 font-extrabold text-xl cursor-pointer"
                              >
                                 {"+"}
                              </span>
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
