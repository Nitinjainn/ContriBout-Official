import React from 'react';

const FullScreenFundraisingBanner = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center px-4 py-10">
      <div
        className="w-full max-w-screen-xl h-[85vh] text-center bg-cover bg-center bg-no-repeat shadow-2xl rounded-2xl relative overflow-hidden border border-gray-200"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/silhouette-two-hands-man-woman-reaching-towards-each-other-sky-sunset-giving-helping-hand_158483-1540.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background blur overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-md mb-4">
            Fund <span className="text-green-500">Help Others</span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-100 leading-relaxed mb-8 max-w-2xl drop-shadow-sm">
            Join us in making a difference. Start funding today to support those in need and create a brighter tomorrow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-black shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all"
            >
              Start Fundraising
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-100 px-8 py-4 text-lg font-semibold text-gray-100 hover:bg-gray-100 hover:text-black transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenFundraisingBanner;
