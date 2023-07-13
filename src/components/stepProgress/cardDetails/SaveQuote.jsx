import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import Button from "../../Button";
import {
   getSelectedOptionData,
   getSelectedBoxData,
   getSelectedMultiOptions,
   getSelectedDateData,
   getSelectedTimingData,
   getServiceFrequencyData,
} from "../../../store/selectors/selectors";

const SaveQuote = () => {
   const selectedOptionData = useSelector(getSelectedOptionData);
   const selectedBoxData = useSelector(getSelectedBoxData);
   const selectedMultiOptions = useSelector(getSelectedMultiOptions);
   const selectedDateData = useSelector(getSelectedDateData);
   const selectedTimeData = useSelector(getSelectedTimingData);
   const serviceFrequencyData = useSelector(getServiceFrequencyData);

   const handleSaveQuote = () => {
      const doc = new jsPDF();

      const bookingSummary = "Booking Summary";
      const fontSize = 12;
      const { w: textWidth } = doc.getTextDimensions(bookingSummary, { fontSize });
      const pageWidth = doc.internal.pageSize.getWidth();
      const x = (pageWidth - textWidth) / 2;
      doc.text(bookingSummary, x, 10);

      doc.setFontSize(fontSize);

      doc.text("service Details", 10, 20);
      doc.text(selectedOptionData.label + selectedOptionData.price, 10, 30);
      doc.text(selectedBoxData.label + selectedBoxData.price, 10, 40);
      // console.log(selectedMultiOptions);
      doc.text(selectedDateData + "," + selectedTimeData, 10, 60);
      doc.text(serviceFrequencyData.label + serviceFrequencyData.offer, 10, 70);

      doc.save("save-quote.pdf");
   };

   return (
      <Button
         extraStyle="bg-blue-950 ml-4 text-white sm:ml-2"
         contained="Save Quote"
         onClick={handleSaveQuote}
      />
   );
};

export default SaveQuote;
