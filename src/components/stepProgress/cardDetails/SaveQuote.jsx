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
   getInfoFormData,
   getServiceFormData,
   getTotalPrices,
} from "../../../store/selectors/selectors";

const SaveQuote = () => {
   const selectedOptionData = useSelector(getSelectedOptionData);
   const selectedBoxData = useSelector(getSelectedBoxData);
   const selectedMultiOptions = useSelector(getSelectedMultiOptions);
   const selectedDateData = useSelector(getSelectedDateData);
   const selectedTimeData = useSelector(getSelectedTimingData);
   const serviceFrequencyData = useSelector(getServiceFrequencyData);
   const totalPrices = useSelector(getTotalPrices);

   const infoFormData = useSelector(getInfoFormData);
   const serviceFormData = useSelector(getServiceFormData);

   const handleSaveQuote = () => {
      const doc = new jsPDF();

      doc.setFont("helvetica", "bold");
      const bookingSummary = "Booking Summary";
      const { w: textWidth } = doc.getTextDimensions(bookingSummary, 16);
      const pageWidth = doc.internal.pageSize.getWidth();
      const x = (pageWidth - textWidth) / 2;
      doc.text(bookingSummary, x, 10);
      doc.setFont("helvetica", "normal");

      let yAxis = 20;
      doc.setDrawColor("#071952");

      // border line
      doc.line(10, yAxis, 10 + pageWidth - 20, yAxis);
      yAxis += 10;

      doc.setFontSize(14);
      // Contact Information
      doc.text("Contact Information", 10, yAxis);
      doc.setFontSize(10);

      const infoKeys = Object.keys(infoFormData);
      const infoLines = infoKeys.length;
      let yAxisInfo = yAxis + infoLines * 10 + 10;

      infoKeys.forEach((key, index) => {
         let infoText = "";
         if (key === "firstName" || key === "lastName") {
            infoText = `Name: ${infoFormData.firstName} ${infoFormData.lastName}`;
         } else if (key === "phoneNumber") {
            infoText = `Phone No.: ${infoFormData.phoneNumber}`;
         } else if (key === "email") {
            infoText = `Email: ${infoFormData.email}`;
         } else if (key === "textarea") {
            infoText = `Your Message: ${infoFormData.textarea}`;
         } else {
            infoText = `${key}: ${infoFormData[key]}`;
         }
         const infoY = yAxis + 10 + index * 10;
         doc.text(infoText, 10, infoY);
      });

      yAxis += yAxisInfo - yAxis;
      yAxis = 30;

      // doc.setLineWidth(0.1);
      // doc.line(100, 30, 100, 90);

      //  border line
      // doc.line(10, yAxis, 10 + pageWidth - 20, yAxis);
      // yAxis += 10;

      doc.setFontSize(14);
      // Service Address
      doc.text("Service Address", 110, yAxis);
      doc.setFontSize(10);

      const addressKeys = Object.keys(serviceFormData);
      const addressLines = addressKeys.length;
      let yAxisAddress = yAxis + addressLines * 10 + 10;

      addressKeys.forEach((key, index) => {
         let addressText = "";
         if (key === "streetAddress") {
            addressText = `Street: ${serviceFormData.streetAddress}`;
         } else if (key === "aptSuite") {
            addressText = `Apt/Suite: ${serviceFormData.aptSuite}`;
         } else if (key === "city") {
            addressText = `City: ${serviceFormData.city}`;
         } else if (key === "selectedOption") {
            addressText = `State: ${serviceFormData.selectedOption}`;
         } else if (key === "zip") {
            addressText = `Zip: ${serviceFormData.zip}`;
         } else if (key === "textarea") {
            addressText = `Your Message: ${serviceFormData.textarea}`;
         } else {
            addressText = `${key}: ${serviceFormData[key]}`;
         }
         const addressY = yAxis + 10 + index * 10;
         doc.text(addressText, 110, addressY);
      });

      yAxis += yAxisAddress - yAxis;

      // last border line
      doc.line(10, yAxis, 10 + pageWidth - 20, yAxis);
      yAxis += 10;

      doc.setFontSize(14);
      // Service Details
      doc.text("Service Details", 10, yAxis);
      doc.setFontSize(10);

      doc.text(selectedOptionData.label + selectedOptionData.price, 10, (yAxis += 10));
      doc.text(selectedBoxData.label + selectedBoxData.price, 10, (yAxis += 10));
      doc.text(selectedDateData + "," + selectedTimeData, 10, (yAxis += 10));
      doc.text(serviceFrequencyData.label, 10, (yAxis += 10));
      if (selectedMultiOptions.length > 0) {
         selectedMultiOptions.forEach((option) => {
            const optionText =
               option.label.toString() +
               option.price.toString() +
               (option.quantity ? ` x ${option.quantity.toString()}` : "");
            doc.text(optionText, 10, (yAxis += 10));
         });
      }
      yAxis += 10;

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
