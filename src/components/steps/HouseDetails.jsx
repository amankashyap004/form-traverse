import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicBox from "../BasicBox";
import { setSelectedBoxData } from "../../store/actions/actions";
import { getSelectedBoxData } from "../../store/selectors/selectors";
import data from "../../data.json";

const HouseDetails = () => {
   const dataOfHouseDetails = data.dataOfHouseDetails;
   const dispatch = useDispatch();
   const [selectedBox, setSelectedBox] = useState(dataOfHouseDetails[0]);

   const handleBoxClick = (data) => {
      setSelectedBox(data);
      dispatch(setSelectedBoxData(data.label));
   };

   useEffect(() => {
      dispatch(setSelectedBoxData(dataOfHouseDetails[0].label));
   }, []);

   return (
      <div className="flex justify-start items-center">
         {dataOfHouseDetails.map((data) => (
            <BasicBox
               key={data.key}
               data={data}
               isSelected={selectedBox === data}
               onClick={handleBoxClick}
            />
         ))}
      </div>
   );
};

export default HouseDetails;
