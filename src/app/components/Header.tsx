import Image from "next/image";

const Header = () => {
  return (
    <header
      className="px-4 flex justify-between items-center  w-full h-[60px]  border-b background: bg-[#F0F0F0];
 md:bg-[#FAFAFA]"
    >
      <div className="flex items-center gap-4">
        <Image
          src="/logo-big.jpg"
          alt="STEMPS Logo"
          width={28}
          height={28}
          priority
          className="rounded-[4px]"
        />
        <div className="text-[16px] font-normal leading-[24px] tracking-[0.02em] text-left font-ppneuemontreal">
          STEMPS
        </div>
      </div>
      <nav className="hidden md:flex space-x-4 gap-6 left-6">
        <a href="#" className="hover:underline">
          О школе
        </a>
        <a href="#" className="hover:underline">
          Курсы
        </a>
        <a href="#" className="hover:underline">
          Библиотека
        </a>
      </nav>
      <button className="block md:hidden">Menu</button>
    </header>
  );
};

export default Header;
