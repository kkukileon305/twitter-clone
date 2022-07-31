import { useState } from 'react';
import NotiList from '../components/notifications/NotiList';
import { useAppSelector } from '../store/hooks';

const notiData = [
  {
    type: 'like',
    notiUsers: ['닉네임1'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'mention',
    notiUsers: ['닉네임1'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'like',
    notiUsers: ['닉네임1', '닉네임2'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'like',
    notiUsers: ['닉네임1', '닉네임2', '닉3'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'like',
    notiUsers: ['닉네임1'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'mention',
    notiUsers: ['닉네임1', '닉네임2'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'like',
    notiUsers: ['닉네임1', '닉네임2'],
    tweet: '트윗 작게 보여줌',
  },
  {
    type: 'like',
    notiUsers: ['닉네임1', '닉네임2', '닉3'],
    tweet: '트윗 작게 보여줌',
  },
];

const NotiPage = () => {
  const [mention, setMention] = useState(false);
  const isScrollUp = useAppSelector(({ isScrollUp }) => isScrollUp);

  return (
    <div className='mt-[118px] bm:mt-[106px] mb-[200px] w-full bm:border-r-[1px]'>
      <ul className={`flex border-b-[1px] fixed top-[65px] max-w-[600px] w-full bm:w-4/5 bm:top-[53px] duration-200 ${isScrollUp ? '-translate-y-[65px] bm:translate-y-0' : 'translate-y-[0px]'} border-r-[1px] bg-white/70 backdrop-blur-md`}>
        <li className='w-1/2 flex justify-center' onClick={() => setMention(false)}>
          <p className={`px-4 py-3 border-b-4 text-md ${mention ? 'border-transparent' : 'border-blue-500 font-bold'}`}>전체</p>
        </li>
        <li className='w-1/2 flex justify-center' onClick={() => setMention(true)}>
          <p className={`px-4 py-3 border-b-4 text-md ${!mention ? 'border-transparent' : 'border-blue-500 font-bold'}`}>멘션</p>
        </li>
      </ul>
      <ul>
        {mention //
          ? notiData.filter((e) => e.type === 'mention').map((e, i) => <NotiList data={e} key={i} />)
          : notiData.map((e, i) => <NotiList data={e} key={i} />)}
      </ul>
    </div>
  );
};

export default NotiPage;
