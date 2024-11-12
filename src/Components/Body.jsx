import React, { useState } from 'react';

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will reach out to you soon.");
    setIsModalOpen(false); // Close the modal after submitting
  };

  return (
    <div className={`relative w-full h-screen flex justify-center items-center px-4 py-10 ${isModalOpen ? 'overflow-hidden' : ''}`}>
      <div
        className={`w-full max-w-screen-xl h-[85vh] text-center bg-cover bg-center bg-no-repeat shadow-2xl rounded-2xl relative overflow-hidden border border-gray-200 transition-all duration-500 ${isModalOpen ? 'blur-sm' : ''}`}
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/silhouette-two-hands-man-woman-reaching-towards-each-other-sky-sunset-giving-helping-hand_158483-1540.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl"></div>

        {/* "Need Money Urgently" Button at the top right */}
        <div className="absolute top-4 right-4 z-20">
          <a
            onClick={openModal}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-transform duration-200 transform hover:scale-105 hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:shadow-red-500 cursor-pointer"
          >
            <i className="fas fa-exclamation-circle text-white"></i> Need Money Urgently?
          </a>
        </div>

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
              className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-black shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all cursor-pointer"
            >
              Start Fundraising
            </a>
            <a
              href="#"
              className="rounded-full border border-gray-100 px-8 py-4 text-lg font-semibold text-gray-100 hover:bg-gray-100 hover:text-black transition-all cursor-pointer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Modal Form with Smooth Transition */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out">
          <div className={`bg-white rounded-lg p-8 shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Urgent Funding Request</h2>
            <form onSubmit={handleSubmit}>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />

              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />

              <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
              <input
                type="tel"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your contact number"
                required
              />

              <label className="block text-gray-700 font-semibold mb-2">Amount Needed</label>
              <input
                type="number"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter amount"
                required
              />

              {/* Reason for Urgent Money - Dropdown */}
              <label className="block text-gray-700 font-semibold mb-2">Reason for Urgent Money</label>
              <select
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select a reason</option>
                <option value="medical">Medical Emergency</option>
                <option value="education">Education</option>
                <option value="hospitality">Hospitality</option>
                <option value="debt">Debt Repayment</option>
                <option value="other">Other</option>
              </select>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-all"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
