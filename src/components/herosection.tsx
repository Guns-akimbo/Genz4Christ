const HeroSection = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center mt-9 px-4">
      {/* Background Image */}
      <div className="w-[95%] h-[90vh] rounded-xl relative bg-[url('/genzhome2.jpg')] bg-cover bg-center flex items-center">
        
        {/* Orange Overlay with Text */}
        <div className="bg-orange-500/95 text-white p-8 md:p-12 rounded-lg max-w-xl ml-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Be the Gen-Z that will change the world
          </h1>
          <p className="text-base md:text-lg mb-6">
            Join a Global movement of young people unashamed of the gospel, driven by a passion to know God and make God known in their lives, career, & across the nations.
          </p>
          <a
            href="#"
            className="underline font-semibold hover:text-gray-200 transition"
          >
            Find Out More
          </a>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

