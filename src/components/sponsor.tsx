const Sponsor = () => {
  return (
    <div className="w-full h-[94vh] flex flex-col items-center justify-center">
      <div className="w-[95%] h-[80vh] ">
        <div className='w-full h-[100%] bg-[url("/sponsor.jpg")] bg-cover bg-center pt-20 px-4 md:px-16 rounded-xl flex flex-col justify-center '>
          <div className="w-full lg:w-1/2 space-y-4  flex flex-col justify-center items-start ">
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-6xl text-[#FAF2E8]">
              Become a Sponsor
            </h2>
            <p className="text-[#FAF2E8] text-base sm:text-lg md:text-[20px] tracking-wider ">
              We are relying on your strategic sponsorship to spread the gospel
              through activities where we give faith-based books, resources,
              branded merch, and gifts to 100+ schools yearly, offering brand
              exposure and lead generation for our sponsors. Join us to be part
              of this global movement!
            </p>
            <button className="bg-[#FF6000] text-white px-4 py-2 mt-2 sm:mt-4 rounded-full">
             Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
