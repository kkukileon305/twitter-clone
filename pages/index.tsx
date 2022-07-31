import type { NextPage } from 'next';
import Twit from '../components/main/Twit';
import data from '../tweetData.json';

const Home: NextPage = () => {
  return (
    <>
      <ul className='mt-[65px] bm:mt-[53px] mb-[54px] w-full bm:border-r-[1px]'>
        {data.map((e, i) => (
          <Twit key={i} tweetData={e} />
        ))}
      </ul>
    </>
  );
};

export default Home;
