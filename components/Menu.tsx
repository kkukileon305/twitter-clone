import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { BsArrowLeftCircle, BsArrowUpRightSquare, BsNewspaper, BsPencilFill, BsPerson } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineUnorderedList, AiOutlineMessage, AiOutlineBook, AiOutlineThunderbolt, AiOutlineRocket, AiOutlineRightCircle } from 'react-icons/ai';
import { SiSimpleanalytics } from 'react-icons/si';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMenu } from '../store/menuSlice';

const Menu = () => {
  const menu = useAppSelector(({ menu }) => menu);
  const dispatch = useAppDispatch();

  const closeHandler: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    if ((target as HTMLElement).id === 'shadowBg' || (target as HTMLElement).id === 'close') {
      dispatch(setMenu(false));
    }
  };

  return (
    <div //
      className={`fixed top-0 left-0 h-full w-full z-20 duration-300 ${menu ? 'visible bg-black/40' : 'invisible bg-black/0'}`}
      onClick={closeHandler}
      id='shadowBg'
    >
      <aside className={`bg-white absolute w-72 h-full -left-72 top-0 duration-300 ${menu ? 'translate-x-72' : 'translate-x-0'}`}>
        <div className='flex justify-between p-4 border-b-[1px]'>
          <h2 className='font-bold'>계정 정보</h2>
          <BsArrowLeftCircle size={24} id='close' />
        </div>
        <div className='overflow-y-scroll h-[calc(100%-57px)]'>
          <div className='flex px-4 pt-4 justify-between items-start'>
            <div className='w-10 h-10 rounded-full bg-red-200'></div>
            <AiOutlinePlus size={24} className='border-2 rounded-full w-7 h-7 p-1' />
          </div>
          <h2 className='font-bold px-4'>displayName</h2>
          <p className='text-slate-600 px-4'>@uid</p>
          <div className='flex text-sm px-4 text-slate-500 my-1 gap-6'>
            <h4>
              <span className='font-bold text-black'>435</span> 팔로우 중
            </h4>
            <h4>
              <span className='font-bold text-black'>435</span> 팔로워
            </h4>
          </div>
          <ul className='w-full '>
            <li className='p-4 flex items-center gap-3'>
              <BsPerson size={18} />
              프로필
            </li>
            <li className='p-4 flex items-center gap-3'>
              <AiOutlineUnorderedList size={18} />
              리스트
            </li>
            <li className='p-4 flex items-center gap-3'>
              <AiOutlineMessage size={18} />
              토픽
            </li>
            <li className='p-4 flex items-center gap-3'>
              <AiOutlineBook size={18} />
              북마크
            </li>
            <li className='p-4 flex items-center gap-3'>
              <AiOutlineThunderbolt size={18} />
              모멘트
            </li>
            <li className='p-4 flex items-center gap-3 border-b-[1px]'>
              <BsNewspaper size={18} />
              뉴스레터
            </li>
            <li className='p-4 flex items-center gap-3'>
              <AiOutlineRocket size={18} />
              프로페셔널용 트위터
            </li>
            <li className='p-4 flex items-center gap-3'>
              <BsArrowUpRightSquare size={18} />
              트위터 광고
            </li>
            <li className='p-4 flex items-center gap-3 border-b-[1px]'>
              <SiSimpleanalytics size={18} />
              애널리틱스
            </li>
            <li className='p-4 flex items-center gap-3 relative'>
              <AiOutlineRightCircle size={18} />
              데이터 세이버
              <div className='absolute w-10 right-4 top-[calc(50%-20px)] h-10'>
                <div className='bg-slate-600 w-full h-4 absolute top-[calc(50%-8px)] right-0 rounded-full' />
                <div className='bg-white w-6 h-6 absolute top-[calc(50%-12px)] left-0 rounded-full shadow-md border-[1px] border-slate-300' />
              </div>
            </li>
            <li className='p-4 flex items-center gap-3 border-b-[1px]'>
              <BsPencilFill size={18} />
              화면
            </li>
          </ul>
          <div className='p-4 mb-10'>로그아웃</div>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
