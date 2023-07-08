import React from "react";

const features = [
   {
      title: "Modern and Intuitive",
      description:
         "Form Traverse offers a modern and intuitive multi-step form system built using React.",
   },
   {
      title: "Enhanced User Experience",
      description:
         "With Form Traverse, the aim is to enhance the user experience of form filling by breaking down lengthy or complex forms into manageable sections.",
   },
   {
      title: "Multi-step Approach",
      description:
         "The form is divided into multiple pages, allowing users to comfortably complete one page at a time.",
   },
   {
      title: "Seamless Navigation",
      description:
         "Users can seamlessly navigate to the next page, ensuring a smooth and uninterrupted form-filling process.",
   },
   {
      title: "Clear Progress Tracking",
      description:
         "Form Traverse provides a clear and structured user interface, allowing users to easily track their progress throughout the form.",
   },
   {
      title: "Simplified Form Submission",
      description:
         "With Form Traverse, the form submission process is simplified, making it easier and more efficient for users.",
   },
   {
      title: "User-Friendly Experience",
      description:
         "The focus of Form Traverse is on providing an efficient and user-friendly experience for all users, regardless of their familiarity with online forms.",
   },
];

const FeatureList = () => {
   return (
      <div>
         <h2 className="text-lg font-bold text-slate-700 sm:text-base mb-4">
            Features of Form Traverse
         </h2>
         <ul className="list-disc ml-6 sm:ml-3">
            {features.map((feature) => (
               <li key={feature.title} className="mb-2 text-slate-600">
                  <p className="text-base font-semibold sm:text-sm">
                     <span>{feature.title}</span>:
                     <span className="text-slate-500 ml-1">{feature.description}</span>
                  </p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default FeatureList;
