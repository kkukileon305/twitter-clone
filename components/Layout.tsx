import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import PcMenu from './PCMenu';
import SearchAside from './SearchAside';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Menu />
      <Header />
      <PcMenu />
      <div className='w-full max-w-[600px] bm:w-[80%] bm:ml-[20%] lm:ml-[10%] xl:ml-[26%] 2xl:ml-[30%]'>{children}</div>
      <SearchAside />
      <Footer />
    </>
  );
};

export default Layout;
