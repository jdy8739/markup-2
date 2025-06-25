import logo from '../../../public/images/logo.png';
import burger from '../../../public/svgs/burger.svg';
import cart from '../../../public/svgs/cart.svg';
import search from '../../../public/svgs/search.svg';
import Input from '../atoms/input/Input';
import Menu from './Menu';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollYCache = useRef(0);

  useEffect(() => {
    const main = document.querySelector('main')!;

    if (isMenuOpen) {
      setTimeout(() => {
        scrollYCache.current = window.scrollY;

        main.style.overflow = 'hidden';
        main.style.height = '100dvh';
      }, 300);
    } else {
      main.style.overflow = 'auto';
      main.style.height = '';

      window.scrollTo(0, scrollYCache.current);
      scrollYCache.current = 0;
    }
  }, [isMenuOpen]);

  return (
    <header
      className="
        w-full
        h-[6.25rem]
        fixed top-0 z-1
        bg-linear-to-l
      from-[#30313E]
      to-[#515157]
      "
    >
      <div
        className="
          opacity-20
        bg-[#30313E]
          w-full
          h-full
          absolute
          z-[-1]"
      />
      <nav
        className="
        px-[1.88rem]
        py-[2rem]
        flex
        justify-between
        items-center
        gap-[3.44rem]
        md:px-[4.5rem]
        lg:gap-[7.19rem]
        lg:px-[7.5rem]
        "
      >
        <div className="flex gap-[1.38rem]">
          <button className="lg:hidden">
            <img src={burger} alt="burger" onClick={() => setIsMenuOpen(true)} />
          </button>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="hidden lg:not-odd:block w-[32.81rem]">
          <ul
            className="
              flex
              justify-between
              [&>li]:font-bold
              [&>li]:text-[1.13rem]
              [&>li]:text-[#A6A6A6]
              [&>li]:tracking-[0.1em]
              [&>li:first-child]:text-[#DD2F30]
              "
          >
            <li>HOME</li>
            <li>LISTING</li>
            <li>CAR DETAILS</li>
            <li>PAGES</li>
          </ul>
        </div>
        <div className="flex gap-[1.44rem] flex-1 max-w-[18.19rem]">
          <div className="w-[1.81rem] h-[1.56rem]">
            <img src={cart} alt="cart" className="w-full h-full" />
          </div>
          <div className="flex-1">
            <Input
              id="search"
              placeholder="Search Here..."
              className="w-full"
              icon={<img src={search} alt="search" className=" pb-[7px]" />}
            />
          </div>
        </div>
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
