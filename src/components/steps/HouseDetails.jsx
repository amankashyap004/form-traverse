import React, { useState } from "react";
import BasicBox from "../BasicBox";

const dataOfHouseDetails = [
   {
      key: "1",
      icon: "",
      title: "1be / 1ba",
      paragraph: "< 1000 sq. ft.",
      label: "La Petite - 1 to 2 Bedroom Condo (under 1000 sq. ft.)",
   },
   {
      key: "2",
      icon: "",
      title: "2be / 2ba",
      paragraph: "> 1000 sq. ft.",
      label: "La Petite II - 2 Bedroom 2 Bath Home/Condo (1001-1500 sq. ft.)",
   },
   {
      key: "3",
      icon: "",
      title: "3be / 2ba",
      paragraph: "< 1800 sq. ft.",
      label: "Le Milieu - 3 Bedroom 2 Bath Home (under 1800 sq. ft.)",
   },
];

const HouseDetails = () => {
   const [selectedBox, setSelectedBox] = useState(null);

   const handleBoxClick = (data) => {
      setSelectedBox(data);
   };

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
