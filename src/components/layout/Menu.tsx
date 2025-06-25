import xButton from '../../../public/svgs/X.svg';
import logo from '../../../public/images/logo.png';

const Menu = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (isMenuOpen: boolean) => void }) => {
  return (
    <aside
      className={`
        w-dvw
        h-dvh
        absolute
        top-0
        right-[-100%]
        bg-gradient-to-tl
        from-[50%]
        from-[#30313E]
        to-[#515157]
        z-1
        duration-300
        overflow-y-scroll
        ${isMenuOpen ? 'translate-x-[-100%]' : 'translate-x-0'}`}
    >
      <div className="sticky top-0 px-[2rem] md:px-[4.5rem] py-[2rem]">
        <div className="bg-[#4c4d5a] top-0 right-0 absolute w-full h-full z-[-1]" />
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              if (isMenuOpen) {
                const aside = document.querySelector('aside')!;

                aside.scrollTo(0, 0);

                setIsMenuOpen(false);
              }
            }}
          >
            <img src={xButton} alt="x" />
          </button>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="py-[6.25rem_3.75rem] px-[2rem] md:px-[4.5rem] flex flex-col justify-between gap-[12.50rem]">
        <div>
          <ul className="flex flex-col gap-[3.75rem]">
            <li>
              <h2 className="text-[2.13rem] font-bold text-[#DD2F30] tracking-[0.1rem]">HOME</h2>
              <div
                className="
                flex
                flex-col
                gap-[1rem]
                [&>a]:border-b-[0.01rem]
                [&>a]:border-[#A6A6A633]
                [&>a]:text-[1.19rem]
                [&>a]:leading-[3.44rem]"
              >
                <a className="text-white">Homepage 01</a>
                <a className="text-[#A6A6A6]">Homepage 02</a>
              </div>
            </li>
            <li>
              <h2 className="text-[2.13rem] font-bold text-white tracking-[0.1rem]">LISTING</h2>
            </li>
            <li>
              <h2 className="text-[2.13rem] font-bold text-white tracking-[0.1rem]">CAR DETAILS</h2>
            </li>
            <li>
              <h2 className="text-[2.13rem] font-bold text-white tracking-[0.1rem]">PAGE</h2>
              <div
                className="
                flex
                flex-col
                gap-[1rem]
                [&>a]:border-b-[0.01rem]
              [&>a]:border-[#A6A6A633]
                text-[1.19rem]
                leading-[3.44rem]
              text-[#A6A6A6]
                [&>a]:border-opacity-1
                "
              >
                <a>Shop</a>
                <a>Blog</a>
                <a>Blog Details</a>
                <a>About Us</a>
                <a>Contact Us</a>
                <a>404 Pages</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[0.9rem] font-bold text-center text-white">GET TO KNOW MORE ABOUT US</div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
