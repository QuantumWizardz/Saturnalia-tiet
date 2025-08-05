import React, { useState } from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-4xl py-6 px-6 bg-[#DBA879] flex items-center justify-between rounded-3xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex-1">
        <h1 className="text-2xl w-full text-black capitalize" style={{ fontFamily: 'Inknut Antiqua' }}>
          {question}
        </h1>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-base text-black capitalize">{answer}</p>
        </div>
      </div>
      <div className="flex items-center justify-end ml-4">
        {isOpen ? (
          <IoIosArrowUp className="text-black h-6 w-6 transition-transform duration-300" />
        ) : (
          <FaGreaterThan className="text-black h-6 w-6 transition-transform duration-300" />
        )}
      </div>
    </div>
  );
}
