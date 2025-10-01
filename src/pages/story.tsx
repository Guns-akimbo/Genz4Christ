import Footer from "../components/footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FaStar, FaUser, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { reviews } from "../utils";

const Story = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    rating: 0,
  });

  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (ratingValue: number) => {
    setRating(ratingValue);
    setFormData((prev) => ({
      ...prev,
      rating: ratingValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Thank you for sharing your story!");
    setFormData({ name: "", email: "", story: "", rating: 0 });
    setRating(0);
  };

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <FaStar
          key={index}
          className={`${
            starValue <= (interactive ? hoverRating || rating : rating)
              ? "text-yellow-400"
              : "text-gray-300"
          } ${
            interactive ? "cursor-pointer hover:text-yellow-400" : ""
          } transition-colors`}
          onClick={interactive ? () => handleRatingClick(starValue) : undefined}
          onMouseEnter={
            interactive ? () => setHoverRating(starValue) : undefined
          }
          onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
          size={interactive ? 24 : 16}
        />
      );
    });
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Share Your <span className="text-[#FF6000]">Gen-Z Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your story matters. Share how Gen-Z for Christ has impacted your
              life and inspire others to discover the joy, freedom, and
              transformation that comes from living authentically in Christ.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Stories from Our Community
            </h2>

            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {reviews
                          .slice(
                            slideIndex * reviewsPerSlide,
                            (slideIndex + 1) * reviewsPerSlide
                          )
                          .map((review) => (
                            <div
                              key={review.id}
                              className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl hover:border-[#FF6000]/20 transition-all duration-300"
                            >
                              <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-[#FF6000] rounded-full flex items-center justify-center text-white mr-4">
                                  <FaUser size={20} />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-800">
                                    {review.name}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    {review.date}
                                  </p>
                                </div>
                              </div>

                              <div className="flex mb-4">
                                {renderStars(review.rating)}
                              </div>

                              <p className="text-gray-700 leading-relaxed">
                                {review.story}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
                aria-label="Previous reviews"
              >
                <FaChevronLeft className="text-[#FF6000]" size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
                aria-label="Next reviews"
              >
                <FaChevronRight className="text-[#FF6000]" size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? "bg-[#FF6000]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Reviews Counter */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  {currentSlide + 1} of {totalSlides} • {reviews.length} total
                  reviews
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Share Your Story
            </h2>

            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Rate Your Experience *
                </label>
                <div className="flex items-center space-x-1">
                  {renderStars(rating, true)}
                  <span className="ml-2 text-gray-600">
                    {rating > 0 ? `${rating} out of 5 stars` : "Click to rate"}
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="story"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Story *
                </label>
                <textarea
                  id="story"
                  name="story"
                  value={formData.story}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6000] focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Share how Gen-Z for Christ has impacted your life. How has your faith journey changed? What would you tell other young people?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#FF6000] hover:bg-[#e55400] text-white font-bold px-4 py-2 rounded-full text-sm cursor-pointer shadow hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Share My Story
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Story;
