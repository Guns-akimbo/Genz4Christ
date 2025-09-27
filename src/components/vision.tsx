const Vision = () => {
  return (
    <div className="w-full min-h-screen space-y-8 flex flex-col items-center justify-center py-8">
      <div className="w-[95%] max-w-7xl flex items-center justify-center flex-col space-y-8">
        <section className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20 p-4 items-center justify-center">
          <div className='w-full lg:w-2/4 h-64 lg:h-96 bg-[url("/vision.jpg")] bg-cover bg-center rounded-xl flex flex-col justify-center '></div>
          <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-center items-start text-center lg:text-left">
            <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#FF6000]">
              Vision
            </h2>
            <p className="text-black text-base md:text-lg tracking-wider leading-relaxed">
              Our vision is to impact up to 100 schools by 2026, winning over
              1000 young souls to christ who will pioneer a new generation of
              Gen-z's passionately consumed by the love of Christ and devoted to
              living for christ.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col lg:flex-row-reverse gap-8 lg:gap-20 p-4 items-center justify-center">
          <div className='w-full lg:w-2/4 h-64 lg:h-96 bg-[url("/mission.jpg")] bg-cover bg-center rounded-xl flex flex-col justify-center '></div>
          <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-center items-start text-center lg:text-left">
            <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#FF6000]">
              Mission
            </h2>
            <p className="text-black text-base md:text-lg tracking-wider leading-relaxed">
              To empower and equip teenagers with the Gospel, providing them
              with the tools and resources to embrace a life anchored in Christ.
              Through the distribution of "BEYOND THE STAIN" and our branded
              "Gen-Z for Christ" merch, we aim to ignite a fire within students,
              compelling them to boldly stand out and rise tall as beacons of
              Christ's love and grace in their respective fields.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
