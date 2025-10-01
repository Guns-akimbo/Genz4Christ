import Footer from "../components/footer";
import Header from "../components/Header";
import { opportunities } from "../utils";


const GetInvolved = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen px-6 py-16 text-black mt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FF6000]">
            Be the Fire. Be the Movement.
          </h1>
          <p className="text-lg md:text-xl">
            There’s a place for you at GenZ for Christ. Let’s grow, serve, and
            lead together.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg  hover:scale-105 transition-transform border border-amber-50 shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-4xl font-bold mb-2 text-[#FF6000]">
            Ready to take the next step?
          </h3>
          <a
            href="https://whatsapp.com/channel/0029Vb9lh5c96H4axCdAIo3G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6000] text-white px-6 py-2 rounded-md font-semibold  transition mt-6"
          >
            Get Involved
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetInvolved;
