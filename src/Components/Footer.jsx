import React from 'react';
import headerImage from '../assets/Foot_Head.png';

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-3/5'>
          <img src={headerImage} alt="Footer Header" />
        </div>
        <div className='basis-2/5 flex gap-4'>
          <div className='basis-1/2'>
            <h4 className='mb-5 text-red-600 capitalize'>Socials</h4>
            <a 
              href="https://www.instagram.com/f1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='block mt-6 text-zinc-600 capitalize hover:text-red-600'
            >
              Instagram
            </a>
            <a 
              href="https://www.instagram.com/f1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='block mt-6 text-zinc-600 capitalize hover:text-red-600'
            >
              Twitter (X)
            </a>
            <a 
              href="https://www.linkedin.com/company/formula-one-management-ltd/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='block mt-6 text-zinc-600 capitalize hover:text-red-600'
            >
              LinkedIn
            </a>
          </div>
          <div className='basis-1/2'>
            {["Home", "Race-Day", "Teams", "Drivers"].map((item, index) => (
              <a 
                key={index} 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className='block mt-6 text-zinc-600 capitalize hover:text-red-600'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
