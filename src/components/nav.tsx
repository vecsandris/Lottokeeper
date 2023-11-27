function Nav() {
  return (
    <>
      <nav className="flex flex-col lg:flex-row items-center absolute gap-1 lg:gap-4 lg:top-0 lg:left-0 w-full bg-black lg:bg-transparent md:bg-transparent md:opacity-100 opacity-0 top-[-400px] transition-all duration-500 text-white pt-12 lg:pt-0 lg:px-12 text-2xl font-poppins">
        <img
          src="game.svg"
          alt="image"
          className="hidden lg:block h-24"
        />
        <div className="flex justify-end w-full gap-4">
        <a
          href="/games"
          className="lg:hover:text-customRed transition-all duration-300 p-2 lg:p-0"
        >
          Games
        </a>
        <a
          href="/player"
          className="lg:hover:text-customRed transition-all duration-300 p-2 lg:p-0"
        >
          Player
        </a>
        <a
          href="/admin"
          className="lg:hover:text-customRed transition-all duration-300 p-2 lg:p-0"
        >
          Admin
        </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;