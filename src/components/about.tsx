

const teamMembers = [
  {
    name: "Peace Akintola",
    role: "Project Director",
    description:
      "She passionately drives projects forward by coordinating tasks, managing timelines, and ensuring goals are achieved efficiently.",
    image: "/team1.jpg", // replace with actual image path
  },
  {
    name: "Emma Udoh",
    role: "Head of Content Creation",
    description:
      "My goal is to create content that inspires. We believe in telling stories that connect with people and push them to act.",
    image: "/team2.jpg",
  },
  {
    name: "Chucks Okoye",
    role: "Head of Design Division",
    description:
      "Design is not just visuals, it’s about experience. I ensure every project looks stunning and functions beautifully.",
    image: "/team3.jpg",
  },
  {
    name: "Edison Udoh",
    role: "Head of Content Division",
    description:
      "With a deep passion for content, I make sure our ideas are transformed into engaging and impactful work.",
    image: "/team4.jpg",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-800 px-6 md:px-20 py-16">
      {/* About Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          About <span className="text-orange-500">Us</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We are driven by a passion to raise young ambassadors who will be
          committed to impactful service.
        </p>
      </div>

      {/* Meet The Team */}
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-8">
          Meet The Team
        </h3>
        <div className="grid gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />

              {/* Text */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {member.name}{" "}
                  <span className="block text-sm text-orange-500">
                    {member.role}
                  </span>
                </h4>
                <p className="mt-3 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
