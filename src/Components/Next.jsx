export default function FundraiserStats() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="relative w-full max-w-6xl flex items-center justify-center sm:space-x-10 space-x-0 flex-col md:flex-row">

        {/* Left Side Images with subtle hover effect */}
        <div className="absolute md:static left-0 flex flex-col items-center space-y-4 md:space-y-8 md:ml-8">
          <div className="relative group">
            <img
              src="https://agronicfood.com/wp-content/uploads/2020/02/0-4.png.webp"
              alt="Fundraiser participant 1"
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fundraiser Hero
            </p>
          </div>
          <div className="relative group mt-4 md:mt-6">
            <img
              src="https://foodforthepoor.org/wp-content/uploads/Natalie-in-Puerto-Escondido.jpg"
              alt="Fundraiser participant 2"
              className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fundraiser Supporter
            </p>
          </div>
        </div>

        {/* Center Content in a Box Without Border */}
        <div className="text-center px-6 mt-16 md:mt-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600">
            Be The Part Of Fundraisers With Over
          </h3>
          <p className="text-5xl sm:text-7xl md:text-8xl font-bold text-black mt-4">
            217,924+
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mt-2">
            People From Around The World Joined
          </p>
          <button className="mt-8 px-8 py-3 sm:px-10 sm:py-5 bg-green-500 text-white text-lg sm:text-2xl font-semibold rounded-md hover:bg-green-600 transition-all">
            Join Fundraisers Now!
          </button>
        </div>

        {/* Right Side Images with subtle hover effect */}
        <div className="absolute md:static right-0 flex flex-col items-center space-y-4 md:space-y-8 md:mr-8 mt-16 md:mt-0">
          <div className="relative group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbwJGOMGVo30XtTSjpFhu-ySwNlQqNvJi-g&s"
              alt="Fundraiser participant 3"
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-60 md:h-60 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fundraiser Leader
            </p>
          </div>
          <div className="relative group mt-4 md:mt-6">
            <img
              src="https://bonyan.ngo/wp-content/uploads/2023/03/Ways-To-Help-The-Poor-And-Needy.jpg.webp"
              alt="Fundraiser participant 4"
              className="w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:scale-105"
            />
            <p className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
              Join the Cause
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
