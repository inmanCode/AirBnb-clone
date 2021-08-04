import React from 'react';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p className='cursor-pointer hover:text-gray-400 '>How Airbnb works</p>
        <p className='cursor-pointer hover:text-gray-400 '>Newsroom</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb 2021</p>
        <p className='cursor-pointer hover:text-gray-400 '>Investors</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb Plus</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb Luxe</p>
        <p className='cursor-pointer hover:text-gray-400 '>HotelTonight</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb for Work</p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Made possible by Hosts
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>Careers</p>
        <p className='cursor-pointer hover:text-gray-400 '>Founders' Letter</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p className='cursor-pointer hover:text-gray-400 '>
          Diversity & Belonging
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Against Discrimination
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>Accessibility</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb Associates</p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Frontline Stays
        </p>{' '}
        <p className='cursor-pointer hover:text-gray-400 '>Guest Referrals</p>
        <p className='cursor-pointer hover:text-gray-400 '>Gift cards</p>
        <p className='cursor-pointer hover:text-gray-400 '>Airbnb.org</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p className='cursor-pointer hover:text-gray-400 '>Host your home</p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Host an Online Experience
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Host an Experience
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Responsible hosting
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>Resource Center</p>
        <p className='cursor-pointer hover:text-gray-400 '>Community Center</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p className='cursor-pointer hover:text-gray-400 '>
          Our COVID-19 Response
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>Help Center</p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Cancellation options
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>
          Neighborhood Support
        </p>
        <p className='cursor-pointer hover:text-gray-400 '>Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
