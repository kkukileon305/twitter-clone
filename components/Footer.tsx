import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHome, AiOutlineBell, AiOutlineMessage } from 'react-icons/ai';
import { BsSearch, BsPencilFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='fixed w-full bottom-0 border-t-[1px] z-10 bg-white border-slate-300 bm:hidden'>
      <div className='absolute right-4 -top-20 shadow-md flex justify-center items-center rounded-full bg-sky-500 w-16 h-16 '>
        <BsPencilFill color='white' size={24} />
      </div>
      <ul className='flex'>
        <li className='w-1/4 flex justify-center items-center py-3'>
          <Link href='/'>
            <a>
              <AiOutlineHome size={30} />
            </a>
          </Link>
        </li>
        <li className='w-1/4 flex justify-center items-center py-3'>
          <Link href='/explore'>
            <a>
              <BsSearch size={30} />
            </a>
          </Link>
        </li>
        <li className='w-1/4 flex justify-center items-center py-3'>
          <Link href='/notifications'>
            <a>
              <AiOutlineMessage size={30} />
            </a>
          </Link>
        </li>
        <li className='w-1/4 flex justify-center items-center py-3'>
          <Link href='/notifications'>
            <a>
              <AiOutlineBell size={30} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
