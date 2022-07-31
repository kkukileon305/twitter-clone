import { BsThreeDots } from 'react-icons/bs';

export type TwitProps = {
  tweetData: {
    displayName: string;
    profileURL: string;
    uid: string;
    duration: string;
    twit: string;
    imageList?: string[];
  };
};

const Twit = ({ tweetData }: TwitProps) => {
  return (
    <li className='p-4 flex gap-2 border-b-[1px] border-slate-300'>
      <div className='w-16'>
        <div className='bg-red-200 rounded-full w-14 h-14 relative overflow-hidden'>Image</div>
      </div>
      <div className='w-[calc(100%-72px)] relative'>
        <BsThreeDots size={20} className='absolute right-0' />
        <div className='flex'>
          <h4 className='font-bold'>{tweetData.displayName}</h4>
          <p className='text-slate-400 mr-2'>@{tweetData.uid}</p>
          <p className='text-slate-400'>{tweetData.duration}시간</p>
        </div>
        <p className='break-all'>{tweetData.twit}</p>
        {tweetData.imageList && (
          <div className={`my-4 flex flex-wrap gap-0.5 rounded-xl relative overflow-hidden ${tweetData.imageList.length ? 'block' : 'hidden'}`}>
            {tweetData.imageList.map((e, i) => (
              <div
                key={i} //
                className={`bg-slate-400 ${tweetData.imageList?.length === 1 ? 'w-full' : 'w-[calc(50%-1px)]'} `}
                style={{ aspectRatio: tweetData.imageList?.length === 1 ? '9/16' : tweetData.imageList?.length === 2 ? '9/11' : '16/9' }}
              >
                Image
              </div>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default Twit;
