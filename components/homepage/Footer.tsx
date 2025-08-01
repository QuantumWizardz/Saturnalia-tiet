import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

// --- Golden Lines: z-0 (TOP LAYER) ---
const GoldenLines: React.FC = () => (
  <div className="absolute w-full top-0 left-0 pointer-events-none" style={{ zIndex: 0 }}>
    <svg width="100%" height="290" viewBox="0 0 1920 290" fill="none" className="w-full" aria-hidden="true">
      {[...Array(9)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={32 + i * 32}
          x2="1920"
          y2={32 + i * 32}
          stroke="#fcbf81"
          strokeWidth="2"
          opacity="0.7"
        />
      ))}
    </svg>
  </div>
);

// --- WaveDivider: z-[-1] (BELOW GOLDEN LINES) ---
const WaveDivider: React.FC = () => (
  <svg
    width="100%"
    height="420"
    viewBox="0 0 1440 340"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 w-full pointer-events-none select-none"
    style={{ zIndex: 1, display: 'block' }}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="
        M0,150
        Q360,300 950,120
        T1460,180
        L1430,440
        L0,600
        Z
      "
      fill="#35365f"
      stroke="#E8CBA8"
      strokeWidth="4"
    />
  </svg>
);

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#home", label: "Home" },
  { href: "#faqs", label: "FAQs" },
  { href: "#events", label: "Events" },
];

export const Footer: React.FC = () => (
  <div
    className="relative w-full overflow-hidden"
    style={{
      background: '#154B81',
      padding: 0,
      margin: 0,
      minHeight: '420px'
    }}
  >
    <GoldenLines />
    <WaveDivider />
    <div
      className="absolute w-full top-0 left-0 flex flex-col items-center text-white"
      style={{
        zIndex: 10, // content always above both lines & wave
        height: '100%',
        minHeight: 340,
        justifyContent: 'center',
      }}
    >
      <div
        className="
          max-w-7xl w-full
          grid grid-cols-3
          gap-x-20
          px-10
          pt-[132px]
          pb-[44px]
          items-end
          text-white
        "
      >
        <div className="flex flex-row gap-9 font-bold text-[18px] uppercase justify-center  text-white">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#fcbf81] transition text-white"
              tabIndex={0}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center text-center self-end text-white">
          <button className="bg-[#3a6ea5] rounded-full px-8 py-2 text-lg font-bold shadow hover:bg-[#5b90c7] transition mb-1 text-white">
            Contact Us
          </button>
          <address className="not-italic flex flex-col gap-1 opacity-90 text-[15px] items-center text-white">
            <span className="flex items-center gap-1 justify-center">
              <FiPhone className="text-base" aria-hidden="true" /> +91 XXXXX XXXXX
            </span>
            <span className="flex items-center gap-1 justify-center">
              <FiMail className="text-base" aria-hidden="true" /> email@address.com
            </span>
          </address>
        </div>

        <div className="flex flex-col items-center text-center  self-end text-white">
          <img
            src="src\assets\homepage\sat_logo.png"
            alt="Saturnalia 2025 Logo"
            className="w-[180px] md:w-[300px] mb-[5px] select-none"
            draggable={false}
          />
            <span className="flex justify-center items-center w-full text-2xl gap-2 opacity-100 select-none text-white">
              Made with<span className="inline-block text-3xl text-red-500 mx-1" aria-label="love">❤️</span>by SAT Team</span>
        </div>
      </div>

     
    </div>
  </div>
);

export default Footer;
