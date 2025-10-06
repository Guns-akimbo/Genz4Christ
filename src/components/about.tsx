const teamMembers = [
  {
    name: "Peace Akintola",
    role: "Project Director",
    description:
      "My passion is to lead and inspire a generation to live boldly for Christ, empowering young people to stand firm in their faith and transform the world around them.",
    image: "/peacefounder.png",
  },
  {
    name: "Emma Udoh",
    role: "Head of Content Division",
    description:
      "My goal is to create content that speaks life and truth, helping young people see Christianity as a vibrant, everyday lifestyle rooted in purpose and love for Christ.",
    image: "/founder4.png",
  },
  {
    name: "Charles Olatuyi",
    role: "Head of Design Division",
    description:
      "Through design, I aim to visually express the beauty of a Christ-centered life, making faith tangible and inspiring young people to live creatively for God.",
    image: "/founder2.png",
  },
  {
    name: "Peace Olaitan",
    role: "Operations Manager",
    description:
      "I’m committed to organizing and equipping our team to bring our vision to life, ensuring that every detail serves our mission of guiding young people to Christ.",
    image: "/founder3 (1).png",
  },
];

const AboutUs = () => {
  return (
    <section className="w-full bg-white text-gray-800 px-6 md:px-20 py-16">
      {/* About Us Section */}
      <div className="text-center mb-12 pt-8">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-900">
          About <span className="text-orange-500">Us</span>
        </h2>
        <p className="mt-3 text-xl md:text-2xl text-gray-900 max-w-2xl mx-auto">
          We are driven by a passion to raise young ambassadors who will be
          committed to impactful service.
        </p>
      </div>

      {/* Meet The Team */}
      <div>
        <h3 className="text-xl md:text-4xl font-semibold text-orange-600 mb-8">
          Meet The Team
        </h3>
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-68 h-68 object-cover rounded-lg shadow-md"
                />

                {/* Text */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                    <span className="block text-sm text-orange-500">
                      {member.role}
                    </span>
                  </h4>
                  <p className="mt-3 text-gray-900">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
