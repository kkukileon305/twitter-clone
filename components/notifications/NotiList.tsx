import { AiFillHeart } from 'react-icons/ai';

type NotiListProps = {
  data: {
    type: string;
    notiUsers: string[];
    tweet: string;
  };
};

const NotiList = ({ data: { type, notiUsers, tweet } }: NotiListProps) => {
  if (type === 'like') {
    return (
      <li className='flex gap-4 p-2 border-b-[1px]'>
        <div className='w-1/6 flex justify-end'>
          <AiFillHeart size={30} className='text-red-600' />
        </div>
        <div className='w-[calc(83.3333%-16px)]'>
          <ul className='flex gap-2'>
            {notiUsers.map((e, i) => (
              <li key={i} className='bg-red-200 rounded-full w-8 h-8'></li>
            ))}
          </ul>
          {notiUsers.length === 1 ? ( //
            <p className=''>
              <strong>{notiUsers[0]}</strong> 님이 내 트윗을 마음에 들어 합니다.
            </p>
          ) : notiUsers.length > 2 ? (
            <p className=''>
              <strong>{notiUsers[0]}</strong> 님 외 {notiUsers.length - 1} 명이 내 트윗을 마음에 들어 합니다.
            </p>
          ) : (
            <p className=''>
              <strong>{notiUsers[0]}</strong> 님과 <strong>{notiUsers[1]}</strong> 님이 내 트윗을 마음에 들어 합니다.
            </p>
          )}
          <p className='text-slate-600 my-2'>{tweet}</p>
        </div>
      </li>
    );
  } else if (type === 'mention') {
    return (
      <li className='flex gap-4 p-2 border-b-[1px]'>
        <div className='w-1/6 flex justify-end'>
          <div className='bg-sky-200 rounded-full w-12 h-12'></div>
        </div>
        <div className='w-[calc(83.3333%-16px)]'>
          <p className=''>
            <strong>{notiUsers[0]}</strong>
          </p>
          <p className='text-slate-600 my-2'>{tweet}</p>
        </div>
      </li>
    );
  } else {
    return <li></li>;
  }
};

export default NotiList;
