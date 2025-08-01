import React from 'react';
import { LogoSection } from './logo-section';
import { HomeHeading } from './home-button';
import { EventCard } from './event-card';
import { AboutUsSection } from './about-us-section';

export const HeroSection = () => {
  return (
    <div>

      <div className='w-full relative z-10'>
        <img
          src="../../src/assets/homepage/hero_section.png"
          alt="Hero"
          className="w-full block object-cover"
        />
        <div className="absolute inset-0  text-white text-4xl">
          <LogoSection />
        </div>
      </div>

      <div className='w-full relative -mt-40'>
        <img
          src="../../src/assets/homepage/bg_2.png"
          alt="bg_2"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-white text-4xl">
          <div className='h-full flex flex-col items-center justify-center'>
            <HomeHeading/>
            <div className='w-fullinst-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full relative bg-green-500'>
        <img
          src="../../src/assets/homepage/bg_1.png"
          alt="bg_2"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bottom-full  text-white text-4xl">
          <div className='h-full mt-[32rem]'>
            <AboutUsSection />
          </div>
        </div>
      </div>

    </div>
  );
};

