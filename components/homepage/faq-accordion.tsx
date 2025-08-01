import React, { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-4xl py-6 px-6 bg-white/60 rounded-3xl cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="text-2xl text-black capitalize" style={{ fontFamily: 'Inknut Antiqua' }}>
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
  );
};

