import logo from '../../../public/images/logo.png';
import burger from '../../../public/svgs/burger.svg';
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
      <nav className="px-[1.88rem] py-[2rem] flex justify-between items-center">
        <button>
          <img src={burger} alt="burger" onClick={() => setIsMenuOpen(true)} />
        </button>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;
