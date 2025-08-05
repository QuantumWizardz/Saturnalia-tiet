import React from 'react';
import { HomeHeading } from './hero-heading';

export const AboutUsSection = () => {
  return (
    <div className="w-full py-5 flex justify-between items-center">
      <div className='w-xs relative'>
        <img src="../../src/assets/homepage/about_design.png" alt="About Us Background" className="object-cover" />
      </div>
      <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-8'>
        <div className='flex flex-col items-center justify-center w-full h-full p-8 space-y-8'>
          <HomeHeading heading='About Us'/>
          <h1 className='w-sm text-xl font-bold tracking-wide text-black p-4 ml-10' style={{ fontFamily: "Irish Grover" }}>
            Witnessing over 20,000 students from across India, Saturnalia is an extravagant festival featuring exceptional technical and cultural events. With the theme "Beyond Boundaries," TIET's Annual Techno-Cultural Fest embodies the spirit of exploration, innovation, and diversity, leaving a lasting impact on all participants.
          </h1>
          <button
            className="flex items-center justify-center rounded-[1.27375rem] bg-[#EFAC60] text-[#C35153] font-bold text-base px-16 py-4 shadow-[7.133px_7.133px_25.475px_5.095px_#D25650] hover:bg-[#e29b4f] hover:shadow-[5px_5px_20px_3px_#c84540] transition-all duration-300"
            style={{ fontFamily: "Cinzel" }}
          >
            DOWNLOAD NOW
          </button>
        </div>
        <div className='w-[350px] h-md ml-10 mt-10'>
          <img src="../../src/assets/homepage/about_us_img.png" alt="About Us Background" className="object-cover" />
        </div>
      </div>
      <div className='w-xs relative'>
        <img src="../../src/assets/homepage/about_design_1.png" alt="About Us Background" className="object-cover" />
      </div>
    </div>
  );
}


