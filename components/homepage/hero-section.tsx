import { EventCard } from './event-card';
import { AboutUsSection } from './about-us-section';
import { FaqSection } from './faq-section';
import { HomeHeading } from './hero-heading';
import billboard2 from '../../public/billboard2.png';
import alladin from '../../public/alladin1.png'
// import {Lanyard} from "../lanyard/Lanyard";
import background from '../../public/mainBg.png';
import dates from '../../public/dates.png';
import bgPattern from '../../public/bg_pattern.png';
import StarsOverlay from './stars-bg';
import starURL from '../../src/assets/homepage/star.svg';
export const HeroSection = () => {
  return (
    <div>
      <img
        src={billboard2}
        alt="Billboard"
        style={{
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.8))',
        }}
        className="w-[40%] absolute top-[-10px] left-[50%] z-100 transform -translate-x-1/2 "
      />
      <div className='w-full relative z-10'>
        <img
          src="../../src/assets/homepage/hero_section.png"
          alt="Hero"
          className="w-full block object-cover"
        />
        <button
          style={{
            boxShadow: '6.3px 6.3px 5px 0px #4A2102',
            fontFamily: 'Koulen, sans-serif',
          }}
          className="absolute top-[70%] text-3xl left-1/2 transform -translate-x-1/2 bg-[#8B441F] text-white py-3 px-5 rounded-lg shadow-lg hover:bg-[#A65D2B] transition duration-300 ">
          REGISTER NOW
        </button>
        <img src={alladin} alt="Alladin" className="absolute bottom-[60%] right-[80%] w-[200px] opacity-80" />
      </div>

      <div style={{
        minHeight: '600px', // or any suitable height
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        marginTop: '-110px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8rem',
        backgroundPosition: 'center',
        zIndex: -1,
        backgroundRepeat: 'no-repeat',
        paddingBlock: '5rem',
      }}>

        <div className='w-full h-[80vh]' >
          <div className='h-full flex flex-col items-center justify-center mt-[2rem]'>
            <HomeHeading heading='Featured Events' />
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-2'>
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
            <div className='mt-8'>
              <img src={dates} alt="Event Dates" className="w-full object-cover" />
            </div>
          </div>
        </div>
        <div className='z-10'>
          <div className='h-[90vh]'>
            <AboutUsSection />
          </div>
          <div className='h-[80vh]' style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '10 0%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '2rem',
          }}>
          
            <StarsOverlay count={35} starURL={starURL} />
           
            <FaqSection   />
            
          </div>
        </div>
      </div>

    </div>
  );
};

