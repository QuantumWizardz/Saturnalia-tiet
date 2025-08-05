import { CalendarDays, Clock, MapPin } from 'lucide-react';

import image from '../../src/assets/homepage/event_test.png'
import card from '../../public/card.png'

export const EventCard = ()=>{
  return (
    <div className="w-full flex justify-center items-center"
    style={{
      backgroundImage: `url(${card})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '500px',
      //image on top of the inside card
      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      // borderRadius: '10px',
      padding: '20px',
      // margin: '10px',
    }}>
      <div className="w-[60%] h-[61%] bg-[#FE9755] flex flex-col items-center justify-center p-2 ml-[6px]">
        <img src={image} alt="Event" className="w-full h-[120px] object-cover rounded-md mb-2" />
        <h2 className="text-lg font-bold text-center mb-1">Event Title</h2>
        {/* <p className="text-gray-600 text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
        <div className="flex flex-col items-center justify-between w-full gap-1">
          <div className="flex items-center text-sm">
        <CalendarDays className="text-white mr-1 h-4 w-4" />
        <span className="text-white">Date</span>
          </div>
          <div className="flex items-center text-sm">
        <Clock className="text-white mr-1 h-4 w-4" />
        <span className="text-white">Time</span>
          </div>
          <div className="flex items-center text-sm">
        <MapPin className="text-white mr-1 h-4 w-4" />
        <span className="text-white">Location</span>
          </div>
        </div>
        <button className="bg-[#EFAC60] text-[#fff] font-bold text-sm px-5 py-1.5 rounded-md shadow hover:bg-[#e29b4f] transition duration-300 mt-2">
          Register Now
        </button>
      </div>
    </div>
  );
};
