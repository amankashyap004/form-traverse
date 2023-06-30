import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const CustomDatePicker = ({ onDateSelect }) => {
   const [selectedDate, setSelectedDate] = useState(null);
   const today = new Date();

   const handleDateChange = (date) => {
      setSelectedDate(date);
      onDateSelect(date ? moment(date).format("MM/DD/YYYY") : "");
   };
   return (
      <div>
         <DatePicker
            className="px-4 py-3 bg-white border border-gray-300 rounded-md cursor-pointer w-full"
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={today}
            placeholderText="Select date"
         />
      </div>
   );
};

export default CustomDatePicker;
