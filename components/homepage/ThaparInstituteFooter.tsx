import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/thaparinstitute/',
    icon: <FaInstagram />,
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/ThaparInstitute',
    icon: <FaFacebookF />,
    label: 'Facebook',
  },
  {
    href: 'https://www.youtube.com/c/ThaparInstituteofEngineeringTechnology',
    icon: <FaYoutube />,
    label: 'YouTube',
  },
  {
    href: 'https://twitter.com/thaparinst',
    icon: <FaTwitter />,
    label: 'Twitter',
  },
];

export const ThaparInstituteFooter: React.FC = () => {
  return (
    <footer
      className="w-full text-white"
      style={{ backgroundColor: '#1E4C82' }}
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Center logo and social icons */}
        <div className="flex flex-col items-center pt-10 pb-0"> {/* Changed from `py-10` to `pt-10 pb-0` */}
          
          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <img
              src="src/assets/homepage/thapar.png"
              alt="Thapar Institute Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="mt-2 flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <span className="text-l">{social.icon}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ThaparInstituteFooter;
