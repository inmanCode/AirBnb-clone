import Head from 'next/head';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import SmallCard from '../Components/SmallCard';
import MediumCard from '../Components/MediumCard';
import LargeCard from '../Components/LargeCard';
export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Hero />
      <main className='max-w-7xl mx-auto p-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* export data from server - API */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          src='https://links.papareact.com/4cj'
          title='the Greatest Outdoors'
          description='Wishlists curated by AirBnb'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (response) => response.json()
  );
  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (response) => response.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
