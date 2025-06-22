const Menu = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (isMenuOpen: boolean) => void }) => {
  return (
    <aside
      className={`
        w-dvw
        h-dvh
        absolute
        top-0
        right-[-100%]
        bg-red-800
        z-1
        duration-300
        ${isMenuOpen ? 'translate-x-[-100%]' : 'translate-x-0'}`}
      onClick={() => {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }}
    >
      <div></div>
    </aside>
  );
};

export default Menu;
