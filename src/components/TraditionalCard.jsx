const TraditionalCard = ({ to, from, message }) => {
  return (
    <div className="relative w-[350px] h-[500px] transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
      {/* Outer decorative border */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-3xl transform rotate-1"></div>

      {/* Inner decorative border */}
      <div className="absolute inset-1 bg-gradient-to-br from-amber-900 to-orange-950 rounded-3xl"></div>

      {/* Main card */}
      <div className="absolute inset-3 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative corner patterns */}
        <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-orange-600 rounded-full"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-red-600 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
          <div className="absolute bottom-2 right-2 w-20 h-20 border-4 border-orange-600 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-red-600 rounded-full"></div>
        </div>

        {/* Floating diyas animation */}
        <div className="absolute top-8 left-9 text-2xl">🪔</div>
        <div className="absolute top-6 right-8 text-2xl">✨</div>
        <div className="absolute bottom-8 right-9 text-2xl"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-8 py-6">
          <div className="mt-2">
            <h2 className="text-5xl font-display  bg-gradient-to-r from-orange-600 via-red-600 to-amber-700 bg-clip-text text-transparent py-5">
              Shubh Deepavali
            </h2>
            <div className="flex justify-center items-center gap-2 text-3xl">
              <span className="animate-bounce" style={{ animationDelay: "0s" }}>
                ✨
              </span>
              <span className="text-4xl">🪔</span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                ✨
              </span>
            </div>
          </div>

          <div className="my-4 w-full">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-3"></div>
            <p className="text-orange-900 text-xl font-display font-medium leading-relaxed px-2">
              {message ||
                "May your life shine bright like diyas and be filled with joy, prosperity, and endless happiness!"}
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mt-3"></div>
          </div>

          <div className="space-y-1">
            {to && (
              <p className="text-sm font-serif font-semibold text-orange-800 py-2">
                To: <span className="text-red-700">{to}</span>
              </p>
            )}
            {from && (
              <p className="text-sm font-serif font-semibold text-orange-800">
                From: <span className="text-red-700">{from}</span>
              </p>
            )}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600"></div>
      </div>
    </div>
  );
};

export default TraditionalCard;
