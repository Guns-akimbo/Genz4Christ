import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { PiTextAlignRight } from "react-icons/pi";
import { useNavigate } from "react-router";
import { navItems } from "../utils";

const Header = () => {
  const navigate = useNavigate();

  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    setmobileMenu((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setmobileMenu(false);
  };
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed  top-0 left-0 w-full h-16 z-50 flex justify-between  items-center text-black px-10 transition-all duration-500 ease-[cubic-bezier(.4,2,.3,1)] ${
        isSticky
          ? "shadow-xl backdrop-blur-lg bg-white border-b border-gray-700/50"
          : "bg-white"
      }`}
      style={{
        willChange: "transform, box-shadow, border-radius",
      }}
    >
      <div
        className="w-[60%] h-[60%] flex items-center cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img src="/Logo.svg" alt="" className="w-15" />
        <h3 className="text-[14px] text-[#FF6000] font-medium">
          Gen-Z for Christ
        </h3>
      </div>
      <div className="hidden md:flex w-[70%] h-[60%] items-center relative ">
        <ul className="flex justify-between text-base ">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigate(item.path)}
              className=" cursor-pointer px-4 "
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {mobileMenu ? <FiX size={24} /> : <PiTextAlignRight size={24} />}
      </div>
      {mobileMenu && (
        <ul className="absolute top-20 right-4 w-[75vw] bg-[#2b2a28] shadow-lg rounded p-6 flex flex-col gap-4 z-40 md:hidden">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer font-medium text-[#FAF2E8]"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
