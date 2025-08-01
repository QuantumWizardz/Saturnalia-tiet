import { CalendarDays, Clock, MapPin } from 'lucide-react';
import card from '../../src/assets/homepage/event_card_bg.png'
import image from '../../src/assets/homepage/event_test.png'

export const EventCard = ()=>{
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-[600px] h-[600px] relative">
        <img src={image} alt='test' className='absolute top-28 left-30  object-cover z-0'/>

        <img
          src={card} // Adjust path as per your folder structure
          alt="Event Card Background"
          className="absolute object-cover w-full h-full z-10"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold space-y-2 mt-35">
          <h1 className="text-2xl font-[cursive] tracking-wide" style={{fontFamily: "Hidayatullah"}}>Event Name</h1>
          <p className='text-[0.6rem] font-light w-3xs text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="pt-4 flex flex-row items-start justify-center space-x-8">

            <div className="flex flex-col items-center space-y-4">
              <CalendarDays strokeWidth={1.5} />
              <Clock strokeWidth={1.5} />
              <MapPin strokeWidth={1.5} />
            </div>

            <div className="flex flex-col items-start space-y-4 mt-1">
              <p className="text-sm font-medium">31st Feb 2025</p>
              <p className="text-sm font-medium">8:00 am</p>
              <p className="text-sm font-medium">Venue</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
