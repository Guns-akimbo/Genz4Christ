const ShareYourStory = () => {
  return (
    <div className="w-full min-h-[90vh] bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
          You're not just another face in the crowd.{" "}
          <span className="text-[#FF6000]">
            You're here to make a difference.
          </span>
        </h1>

        {/* Supporting Text */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Join our community of young people living out their faith, changing
            lives and having fun while doing it.
          </p>

          <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            It's time to share your story and be who you're meant to be.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="pt-8">
          <button onClick={() => window.open("https://whatsapp.com/channel/0029Vb9lh5c96H4axCdAIo3G", "_blank")} className="bg-[#FF6000] cursor-pointer hover:bg-[#e55400] text-white font-bold text-lg md:text-xl px-12 py-4 md:px-16 md:py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            Join Community
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center space-x-4 pt-8 opacity-60">
          <div className="w-12 h-1 bg-[#FF6000] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FF6000] rounded-full"></div>
          <div className="w-12 h-1 bg-[#FF6000] rounded-full"></div>
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6000] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourStory;
