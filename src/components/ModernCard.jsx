import React from "react";

const ModernCard = ({ to, from, message }) => {
  return (
    <div className="relative w-[350px] h-[470px] bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-100 opacity-90"></div>

      {/* Decorative Golden Line/Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400"></div>

      {/* Center Content */}
      <div className="relative flex flex-col justify-between items-center text-center h-full px-8 py-10">
        {/* Top Message Block */}
        <div className="w-full">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#9d783e] mb-2 font-serif tracking-tight leading-snug">
            Happy Diwali
          </h1>

          {/* Abstract Diya/Flame */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mx-auto text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1"
            />
          </svg>
        </div>

        {/* Custom Message */}
        <div className="flex-grow flex py-10 justify-center w-full h-[80%]">
          <p className="text-[#402e0b] text-base font-serif tracking-tight leading-snug max-w-sm italic">
            {message ||
              "May the brilliance of the festival illuminate your life with happiness, prosperity, and endless celebrations."}
          </p>
        </div>

        {/* To/From Section */}
        <div className="w-full space-y-3 text-sm font-semibold text-gray-700 mb-5">
          {to && (
            <p className="text-sm font-serif font-semibold text-yellow-800 mb-3">
              To: <span className="text-black">{to}</span>
            </p>
          )}
          {from && (
            <p className="text-sm font-serif font-semibold text-yellow-800">
              From: <span className="text-black">{from}</span>
            </p>
          )}
        </div>
      </div>

      {/* Bottom Footer Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-amber-200 to-transparent flex justify-center items-end pb-2">
        <div className="text-xl text-yellow-600 animate-pulse">🌟</div>
      </div>
    </div>
  );
};

export default ModernCard;
