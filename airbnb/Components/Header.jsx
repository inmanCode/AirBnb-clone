import React from 'react';
import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='relative flex items-center justify-center h-10 cursor-pointer'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='flex items-center justify-center h-10 rounded-full md:border-2 py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your search'
          className='pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400 focus:outline-none '
        />
        <SearchIcon className='hidden h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer md:inline-flex md:mx-2' />
      </div>
      {/* Right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex item-center space-x-2 border-2 p-2 rounded-full cursor-pointer '>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;
