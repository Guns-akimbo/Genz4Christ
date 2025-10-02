const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center  py-24 px-4">
      {/* Header Section */}
      <div className="bg-orange-500 text-white text-center px-6 py-6 rounded-xl max-w-3xl w-full mb-10">
        <h1 className="text-3xl md:text-6xl font-bold">Contact Us</h1>
        <p className="mt-2 text-sm md:text-xl md:text-base">
          Whether it’s a prayer request, a testimony, or a question—reach out. You’re not alone
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Left Side (Cards) */}
        <div className="flex flex-col gap-6 md:col-span-1">
          {/* Who we are */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900">Who we are</h2>
            <p className="text-sm text-gray-600 mt-2">
              Gen-Z 4 Christ is a movement dedicated to transforming the lives of teenagers and youths.
            </p>
          </div>

          {/* Become a Sponsor */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900">Become a Sponsor</h2>
            <p className="text-sm text-gray-600 mt-2">
              Join us to be part of this global movement!
            </p>
          </div>

          {/* Share Your Gen-Z Story */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-orange-500">Share Your Gen-Z Story</h2>
            <p className="text-sm text-gray-600 mt-2">
              It’s time to share your story and be who you’re meant to be.
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="md:col-span-2 bg-white shadow-md rounded-xl p-8">
          <h2 className="text-xl font-semibold text-orange-500 mb-4">Send a message</h2>
          <p className="text-sm text-gray-600 mb-6">
            We would love to hear from you. Please reach out with any questions or prayer requests you may have.
          </p>

          <form className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Interested In & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Interested in</option>
                <option>Prayer</option>
                <option>Sponsorship</option>
                <option>Testimony</option>
                <option>General Inquiry</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={4}
              className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              → Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
