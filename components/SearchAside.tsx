import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsSearch, BsThreeDots } from 'react-icons/bs';

const SearchAside = () => {
  const { pathname } = useRouter();
  const [path, setPath] = useState('/');

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <aside className='hidden lm:block fixed left-[calc(10%+600px)] lg:left-[calc(10%+600px)] xl:left-[calc(26%+600px)] top-0 w-[308.96px] lg:w-[370.2px] h-full white border-r-[1px]'>
      <div className={`py-1 border-b-[1px] px-5 bg-transparent ${path !== '/explore' ? '' : 'hidden'}`}>
        <div className='w-full h-[44px] pl-4 flex bg-slate-200 rounded-full items-center gap-4 overflow-hidden'>
          <BsSearch />
          <input className='w-full h-full bg-transparent focus:outline-none' type='text' placeholder='클론 트위터 검색' />
        </div>
      </div>
      <div className={`${path !== '/explore' ? 'h-[calc(100%-53px)]' : 'h-full'} px-5 py-3 overflow-y-scroll`}>
        <div className={`bg-slate-200 rounded-2xl px-5 py-3 ${path !== '/explore' ? '' : 'hidden'}`}>
          <h2 className='font-bold text-xl'>나를 위한 트렌드</h2>
          <ul className='mt-6'>
            {Array.from(new Array(10)).map((e, i) => (
              <li key={i} className='relative mt-5'>
                <BsThreeDots className='absolute right-0' />
                <p className='text-sm text-slate-600'>트렌드 타입</p>
                <h3 className='text-md font-bold'>트렌트 내용</h3>
                {i % 2 === 0 && <p className='text-sm text-slate-600 mt-1'>트렌드 수</p>}
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-slate-200 rounded-2xl px-5 py-3 mt-2'>
          <h2 className='font-bold text-xl'>팔로우 추천</h2>
          <ul className='mt-6'>
            {Array.from(new Array(4)).map((e, i) => (
              <li key={i} className='relative mt-5 flex gap-2'>
                <div className='w-12 h-12 border-2 bg-red-200 rounded-full relative'></div>
                <div>
                  <h2 className='font-bold'>닉네임</h2>
                  <p className='text-slate-600 text-sm'>@id</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className='flex flex-wrap mt-4 gap-x-3 gap-y-1 mb-20'>
          <li className='w-fit text-[13px] text-slate-500'>이용약관</li>
          <li className='w-fit text-[13px] text-slate-500'>개인정보 처리방침</li>
          <li className='w-fit text-[13px] text-slate-500'>쿠키 정책</li>
          <li className='w-fit text-[13px] text-slate-500'>접근성</li>
          <li className='w-fit text-[13px] text-slate-500'>광고 정보</li>
          <li className='w-fit text-[13px] text-slate-500'>더보기</li>
        </ul>
      </div>
    </aside>
  );
};

export default SearchAside;
