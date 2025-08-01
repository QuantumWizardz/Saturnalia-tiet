import React from 'react';

export const HomeHeading= ({heading}:{heading:string}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-md relative">
        <img
          src="../../src/assets/homepage/button_bg.png"
          alt="Home Button"
          className="object-cover"
        />
        <div className='absolute inset-0 flex items-center justify-center text-white text-3xl tracking-wider' style={{fontFamily: "Henny Penny"}}>
          {heading}
        </div>
      </div>
    </div>
  );
};

