import Image from 'next/image';
import Link from 'next/link';
import TrendList from '../components/explore/Trend';
import { AiFillMessage } from 'react-icons/ai';
import Twit from '../components/main/Twit';
import { BsThreeDots } from 'react-icons/bs';
import data from '../tweetData.json';

const Explore = () => {
  return (
    <>
      <div className='mt-[65px] bm:mt-[53px] w-full mb-[200px] bm:border-r-[1px]'>
        <div className='w-full aspect-video relative overflow-hidden'>
          <Image src='/img/mask.jpg' alt='mask' layout='fill' />
          <div className='bg-gradient-to-t from-black/60 via-black/40 to-black/0 absolute left-0 bottom-0 w-full h-full'></div>
          <div className='absolute left-4 bottom-4'>
            <p className='text-white text-sm'>이슈 · 실시간</p>
            <h2 className='text-white text-2xl font-extrabold'>코로나19 현황</h2>
          </div>
        </div>
        <h2 className='p-4 font-bold text-xl'>나를 위한 트렌드</h2>
        <ul>
          {Array.from(new Array(5)).map((e, i) => (
            <TrendList key={i} />
          ))}
        </ul>
        <div className='p-4 border-b-[1px]'>
          <Link href='/'>
            <a className='text-blue-500'>더 보기</a>
          </Link>
        </div>
        <div className='p-4 flex items-center gap-4 relative'>
          <AiFillMessage size={20} className='text-blue-400' />
          <h2 className='font-bold text-xl '>핫 트렌드</h2>
          <BsThreeDots size={20} className='absolute right-4' />
        </div>
        <ul>
          {data.map((e, i) => (
            <Twit key={i} tweetData={e} />
          ))}
        </ul>
        <div className='p-4 flex items-center justify-between'>
          <AiFillMessage size={30} className='text-blue-400' />
          <h2 className='w-1/2 font-bold text-md'>핫 트렌드</h2>
          <div className='font-bold text-white text-sm px-4 py-2 bg-black rounded-full'>팔로우</div>
        </div>
      </div>
    </>
  );
};

export default Explore;
