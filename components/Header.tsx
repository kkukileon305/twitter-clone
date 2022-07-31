import { useRouter } from 'next/router';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMenu } from '../store/menuSlice';
import { BiSearch } from 'react-icons/bi';
import { setScroll } from '../store/scrollSlice';

const titleName: { [pathName: string]: ReactNode } = {
  '/': <h2 className='font-bold text-xl'>홈</h2>,
  '/explore': (
    <div className='w-5/6 bg-slate-200 py-0.5 h-full px-4 bm:ml-4 rounded-full overflow-hidden flex items-center gap-3'>
      <BiSearch size={24} className='text-slate-600' />
      <input type='text' className='w-full bg-transparent focus:outline-none' placeholder='클론 트위터 검색' />
    </div>
  ),
  '/notifications': <h2 className='font-bold text-xl'>알림</h2>,
  '/messages': <h2 className='font-bold text-xl'>쪽지</h2>,
};

const Header = () => {
  const isScrollUp = useAppSelector(({ isScrollUp }) => isScrollUp);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [path, setPath] = useState('/');

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const scrollHandler = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    if (scrollY > prevScrollY) {
      dispatch(setScroll(true));
    } else if (scrollY < prevScrollY) {
      dispatch(setScroll(false));
    }
    setPrevScrollY(scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <header
      className={`fixed ${
        router.pathname !== '/notifications' ? '' : isScrollUp ? '-translate-y-[65px] bm:translate-y-0' : 'translate-y-[0px]'
      } duration-200 z-10 w-full h-[65px] bm:h-[53px] bm:w-4/5 bm:max-w-[600px] bm:border-r-[1px] left-0 bm:left-[20%] lm:left-[10%] xl:left-[26%] 2xl:left-[30%] top-0 p-2 border-b-[1px] flex gap-2 backdrop-blur-md bg-white/70 border-slate-300`}
    >
      <div className='w-16 bm:hidden'>
        <div className='bg-red-200 rounded-full w-10 h-10' onClick={() => dispatch(setMenu(true))}></div>
      </div>
      <div className='w-[calc(100%-72px)] bm:w-full flex justify-between items-center'>
        {titleName[path]}
        <AiOutlineStar size={24} />
      </div>
    </header>
  );
};

export default Header;
