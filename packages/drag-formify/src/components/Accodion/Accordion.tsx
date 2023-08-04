import React, { useState } from "react";

interface AccordionProps {
  heading: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        isOpen
          ? "rounded-xl bg-indigo-50 dark:bg-indigo-900"
          : "rounded-md bg-white dark:bg-gray-800"
      }`}
    >
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left ${
            isOpen ? "text-indigo-800" : "text-indigo-500"
          } border border-b-0 border-gray-200 ${
            isOpen ? "rounded-t-xl" : "rounded-md"
          } focus:ring-4 ${
            isOpen ? "focus:ring-indigo-200" : "focus:ring-blue-200"
          } dark:focus:ring-blue-800 ${
            isOpen ? "dark:border-indigo-700" : "dark:border-gray-700"
          } dark:text-gray-400 ${
            isOpen ? "hover:bg-indigo-100" : "hover:bg-indigo-50"
          } dark:hover:bg-indigo-900 transition-all`}
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
          className={`p-2 ${
            isOpen
              ? "bg-indigo-200 dark:bg-indigo-800"
              : "bg-white dark:bg-gray-700"
          } border border-b-0 border-gray-200 dark:border-indigo-700 rounded-b-xl transition-all`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
