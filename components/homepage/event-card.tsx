import React from 'react';
import card from '../../src/assets/homepage/event_card_bg.png'
export const EventCard = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-[220px] h-[300px] relative">
        <img
          src={card} // Adjust path as per your folder structure
          alt="Event Card Background"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold">
          <h1 className="text-2xl font-[cursive] tracking-wide">Mahrey</h1>
          <p className="text-sm mt-2 tracking-widest">EVENT NAME</p>
        </div>
      </div>
    </div>
  );
};
