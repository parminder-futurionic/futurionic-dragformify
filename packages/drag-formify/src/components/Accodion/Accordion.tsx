import React, { useState } from "react";

interface AccordionProps {
  heading: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`flex flex-col gap-0  
        bg-white  dark:bg-gray-800
      `}
    >
      <h2 className="w-full">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 
          font-semibold  bg-base-200 text-left text-gray-500 border border-b-0
          border-gray-200 
          focus:ring-4 focus:ring-gray-200
           dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all`}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div
          className={`p-1 w-full border border-b-1 border-gray-200 dark:border-gray-700 transition-all`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
