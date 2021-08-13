import React from 'react';
import Image from 'next/image';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [numOfGuest, setNumOfGuest] = React.useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center justify-center h-10 cursor-pointer'
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          type='text'
          placeholder={'Start to Search...' || placeholder}
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
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              value={numOfGuest}
              onChange={(e) => setNumOfGuest(e.currentTarget.value)}
              min={1}
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex '>
            <button
              onClick={() => setSearchInput('')}
              className='flex-grow text-gray-400'
            >
              Cancel
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    numOfGuest,
                  },
                })
              }
              className='flex-grow text-red-400'
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
