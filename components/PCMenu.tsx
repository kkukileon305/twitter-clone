import Link from 'next/link';
import { AiOutlineHome, AiOutlineBell, AiOutlineMessage, AiOutlineTwitter } from 'react-icons/ai';
import { BsSearch, BsPencilFill } from 'react-icons/bs';
import { BsNewspaper, BsPerson, BsThreeDots } from 'react-icons/bs';

import { AiOutlineBook } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PcMenu = () => {
  const { pathname } = useRouter();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <div className='hidden bm:flex flex-col items-end h-full fixed left-0 top-0 w-[20%] lm:w-[10%] xl:w-[26%] border-r-[1px]'>
      <ul className='flex flex-col px-3 py-2 gap-5 items-center'>
        <li className='mb-1'>
          <div className='flex items-center justify-start gap-3'>
            <AiOutlineTwitter size={40} className='text-sky-600' />
            <p className={`hidden xl:block ${path === '/' ? 'font-bold' : ''} text-xl w-56`} />
          </div>
        </li>
        <li className=''>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <AiOutlineHome size={30} />
              <p className={`hidden xl:block ${path === '/' ? 'font-bold' : ''} text-xl w-56`}>홈</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href='/explore'>
            <a className='flex items-center gap-4'>
              <BsSearch size={30} />
              <p className={`hidden xl:block ${path === '/explore' ? 'font-bold' : ''} text-xl w-56`}>탐색하기</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href='/notifications'>
            <a className='flex items-center gap-4'>
              <AiOutlineBell size={30} />
              <p className={`hidden xl:block ${path === '/notifications' ? 'font-bold' : ''} text-xl w-56`}>알림</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <AiOutlineMessage size={30} />
              <p className={`hidden xl:block text-xl w-56`}>쪽지</p>
            </a>
          </Link>
        </li>
        <li className='hidden tall:block'>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <AiOutlineBook size={30} />
              <p className={`hidden xl:block text-xl w-56`}>북마크</p>
            </a>
          </Link>
        </li>
        <li className='hidden tall:block'>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <BsNewspaper size={30} />
              <p className={`hidden xl:block text-xl w-56`}>리스트</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <BsPerson size={30} />
              <p className={`hidden xl:block text-xl w-56`}>프로필</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href='/'>
            <a className='flex items-center gap-4'>
              <BsThreeDots size={30} className='' />
              <p className={`hidden xl:block text-xl w-56`}>더보기</p>
            </a>
          </Link>
        </li>
        <li className=''>
          <div className='shadow-md flex justify-center items-center p-4 rounded-full bg-sky-500 '>
            <BsPencilFill color='white' size={20} className='xl:hidden' />
            <div className='hidden xl:flex w-[270px] justify-center bg-sky-500 font-bold text-white text-xl rounded-full'>트윗하기</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PcMenu;
