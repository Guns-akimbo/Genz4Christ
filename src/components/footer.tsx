import { HiCheckCircle } from "react-icons/hi";
import { footerLinks } from "../utils";

const Footer = () => {
  return (
    <div className="w-full bg-white text-black px-6 py-10 border-t-4 border-gray-800 mt-7" >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-4 text-black">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-[#e68f2d] rounded-full"></div>
            <div className="w-3 h-3 bg-[#c2beba] rounded-full"></div>
          </div>
          <h2 className="font-bold text-lg text-[#FF6000]">Gen Z for Christ</h2>
          <p>
            Email: <span className="">hello@genz.com</span>
          </p>
          <p>
            Phone Number: <span className="">+1 (201) 895–3801</span>
          </p>
        </div>

        <div className="space-y-4 text-left md:text-right w-full md:w-auto">
          <h3 className="text-lg font-semibold text-[#FF6000]">
            Be Part of the Movement
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button className="bg-[#FF6000] text-white px-4 py-2 rounded-full font-semibold">
              Contact us
            </button>
            <button className="border border-gray-400 text-black px-4 py-2 rounded-full font-semibold">
            Become a Sponsor
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[black] my-6"></div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between items-start md:items-center">
        <p className="text-sm flex items-center gap-2 text-black">
          <HiCheckCircle className="text-lg text-[#FF6000]" /> Giving Youth
          Everywhere the Opportunity to be Followers of Jesus Christ
        </p>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link, index) => (
            <p
              key={index}
              className="flex items-center gap-2 text-sm border px-3 py-1 rounded-2xl cursor-pointer text-[black]"
            >
              <link.icon />
              {link.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
