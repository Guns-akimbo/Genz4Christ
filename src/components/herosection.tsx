"use client";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center mt-9 px-4">
      {/* Background Image */}
      <div className="w-[95%] h-[90vh] rounded-xl relative bg-[url('/genzhome2.jpg')] bg-cover bg-center flex items-center">
        
        {/* Orange Overlay with Text */}
        <div className="bg-orange-500/80 text-white px-6 py-8 md:pl-20 md:pt-12 md:pb-12 md:pr-12 rounded-lg max-w-full md:max-w-2xl h-auto md:h-[70vh]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 leading-snug">
            Be the Gen-Z that will change the world
          </h1>

          <p className="text-base sm:text-lg md:text-2xl leading-relaxed mb-6 md:mb-10">
            Join a Global movement of young people unashamed of the gospel, driven by a passion to know God and make God known in their lives, career, & across the nations.
          </p>

          <link
            to="aboutUs"
            className="underline text-base sm:text-lg md:text-xl font-semibold hover:text-gray-200 transition"
          >
            Find Out More
          </link>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;

