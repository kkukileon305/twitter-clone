import { BsThreeDots } from 'react-icons/bs';
const TrendList = () => {
  return (
    <li className='px-4 py-2 relative'>
      <BsThreeDots className='absolute top-[calc(50%-10px)] right-4' size={20} />
      <p className='text-slate-600 text-sm'>트렌드 종류</p>
      <h2 className='font-semibold'>트렌트 제목</h2>
    </li>
  );
};

export default TrendList;
