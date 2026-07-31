import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobilemenu, setmobilemenu] = useState(false);
  return (
    <nav
      className={`fixed top-0  w-full z-50 transition-all duration-300
        ${scrolled 
            ? " bg-slate-900/80 backdrop-blur-sm  border-b border-slate-800" 
            : " bg-slate-900/70 backdrop-blur-sm"} `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex space-x-1 items-center group cursor-pointer">
            <div>
              <img src={logo} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>
          {/* nav links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href=""
              className="text-gray-300 hover:text-white text-sm lg:text-base "
            >
              Features
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white text-sm lg:text-base "
            >
              Pricing
            </a>
            <a
              href=""
              className="text-gray-300 hover:text-white text-sm lg:text-base "
            >
              Testimonials
            </a>
          </div>
          <button
            className="md:hidden "
            onClick={() => setmobilemenu((prev) => !prev)}
          >
            {mobilemenu ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobilemenu && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top animate-in duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href=""
              className="block text-gray-300 hover:text-white text-sm lg:text-base "
              onClick={() => setmobilemenu(false)}
            >
              Features
            </a>
            <a
              href=""
              className="block text-gray-300 hover:text-white text-sm lg:text-base "
              onClick={() => setmobilemenu(false)}
            >
              Pricing
            </a>
            <a
              href=""
              className="block text-gray-300 hover:text-white text-sm lg:text-base "
              onClick={() => setmobilemenu(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
