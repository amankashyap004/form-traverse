import React from "react";

const About = () => {
   return (
      <section className="container mx-auto py-8 px-32 md:px-20 sm:p-4">
         <div>
            <h1 className="text-2xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
               Welcome to my form filling application! This project is a clone of the website{" "}
               <a
                  href="https://prohousekeepers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
               >
                  prohousekeepers.com
               </a>{" "}
               and serves as a demonstration of my skills and expertise in web development,
               specifically using technologies like React, Redux, and Tailwind CSS.
            </p>
            <p className="mb-4">
               My main goal with this project was to learn and showcase the process of form
               traversal, as well as the implementation of various features like multi-step forms
               and state management with Redux. Through this project, I've gained a deeper
               understanding of React's component-based architecture and the power of Tailwind CSS
               for rapid UI development.
            </p>
            <p className="mb-4">
               I believe that practical projects like this provide valuable hands-on experience and
               help solidify the concepts learned during the learning process. This project has
               allowed me to apply my knowledge in a real-world scenario and further enhance my
               skills as a web developer.
            </p>
            <p>
               Thank you for visiting and exploring this project. I hope you find it informative and
               useful in understanding the implementation of complex forms and the technologies
               involved. Feel free to reach out to me if you have any questions or feedback.
            </p>
         </div>
      </section>
   );
};

export default About;
