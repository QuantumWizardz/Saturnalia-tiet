import { EventCard } from './event-card';
import { AboutUsSection } from './about-us-section';
import { FaqSection } from './faq-section';
import { HomeHeading } from './hero-heading';
import { FooterSection } from './footer-section';
import {Lanyard} from "../lanyard/Lanyard";

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
          <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} fov={20} transparent={true} />
        </div>
      </div>

      <div className='w-full relative bg-green-500'>
        <img
          src="../../src/assets/homepage/bg_1.png"
          alt="bg_2"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bottom-full text-white text-4xl">
          <div className='flex flex-col space-y-12'>
            <div className='h-full flex flex-col items-center justify-center mt-[5rem]'>
              <HomeHeading heading='Featured Events'/>
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
            <div className='h-full mt-[8rem]'>
              <AboutUsSection />
            </div>
            <div className='h-full mt-[4rem]'>
              <FaqSection />
            </div>
            <div>
              <FooterSection />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

