const Subheader = () => {
  return (
    <div className="w-full max-w-[1696px] px-4 h-[68px] flex flex-col justify-center md:border-b mb-12 bg-[#FAFAFA]">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <h1 className="text-[40px] font-normal leading-[44px] tracking-[-0.02em] text-[#8977F3]">
          1.0
        </h1>
        <p className="font-normal text-[40px] leading-[44px] tracking-[-0.02em] text-center flex-1 text-[#8977F3]">
          Наши услуги
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden text-left">
        <h1 className="text-2xl font-semibold text-[#8977F3] pt-4 ">1.0</h1>
        <hr className="border-gray-300 my-2" />
        <p className="text-2xl font-semibold text-[#8977F3]">Наши услуги</p>
      </div>
    </div>
  );
};

export default Subheader;
