import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Map from '../Components/Map';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../Components/InfoCard';
const search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuest } = router.query;
  const formatedStartDate = format(new Date(startDate), 'dd MMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMM yy');
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuest}`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays --{range}-- for {numOfGuest} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancelation Flexibility</p>
            <p className='button'>type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );
  return {
    props: { searchResults },
  };
}
