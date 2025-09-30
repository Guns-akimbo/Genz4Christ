"use client";

import { FaFacebook, FaTiktok, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 md:px-12 py-10 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="text-[#FF6000] text-2xl font-semibold leading-snug">
            Giving Youth Everywhere the Opportunity to be Followers of Jesus Christ
          </h3>

          {/* Logo Image */}
          <img
            src="/Logo.svg"
            alt="Gen-Z for Christ Logo"
            className="w-16 h-auto"
          />

          <p className="font-bold">Gen-Z for Christ</p>
          <a href="#" className="text-sm hover:underline">privacy policy</a>
        </div>

        {/* Middle Section */}
        <div className="space-y-6 text-sm">
          <Link to="/aboutUs" className="hover:underline block">Who we are</Link>
          <Link to="/" className="hover:underline block">Get Involved</Link>
          <Link to="/" className="hover:underline block">Share your Gen-Z Story</Link>
          <Link to="/" className="hover:underline block">Contact us</Link>
          <a href="/#vision" className="hover:underline block">Vision</a>
          <a href="/#mission" className="hover:underline block">Mission</a>
          <a href="/#sponsor" className="hover:underline block">Become a Sponsor</a>
        </div>

        {/* Right Section */}
        <div className="space-y-4 text-sm">
          <a href="mailto:hello@genz.com" className="hover:underline block">
            Email: <span className="font-medium">hello@genz.com</span>
          </a>
          <a href="tel:+12018953801" className="hover:underline block">
            Phone number: <span className="font-medium">+1 (201) 895 3801</span>
          </a>
          <a href="#" className="hover:underline block">Share your Gen-Z Story</a>
          <p>
            Location: <span className="font-medium">Lekki Lagos, Nigeria</span>
          </p>

          <h3 className="text-[#FF6000] font-semibold pt-2">Be Part of the Movement</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#" className="flex items-center gap-2 border px-3 py-1 rounded-2xl cursor-pointer">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 border px-3 py-1 rounded-2xl cursor-pointer">
              <FaTiktok /> TikTok
            </a>
            <a href="#" className="flex items-center gap-2 border px-3 py-1 rounded-2xl cursor-pointer">
              <FaYoutube /> YouTube
            </a>
            <a href="#" className="flex items-center gap-2 border px-3 py-1 rounded-2xl cursor-pointer">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 border px-3 py-1 rounded-2xl cursor-pointer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10">
        <div className="bg-[#FF6000] text-white flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 rounded-lg">
          <p className="text-sm font-medium">
            Stay up to date on all things Gen-Z for Christ with the eNewsletter
          </p>
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full md:w-1/3">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 flex-1 outline-none text-black"
            />
            <a
              href="#"
              className="bg-[#FF6000] px-4 py-2 font-bold text-white hover:opacity-90"
            >
              →
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-600">
        © 2025 Gen-Z for Christ
      </div>
    </footer>
  );
};

export default Footer;
