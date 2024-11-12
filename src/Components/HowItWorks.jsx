import React, { useState } from 'react';

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          How ContriBout Works
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8">
          Inspired by village committees, ContriBout brings this community-driven funding concept online. Our goal is to
          support financial growth while offering opportunities to lend and invest.
        </p>
        <button
          onClick={openModal}
          className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-green-600 rounded-full shadow hover:bg-green-800 transition-transform transform hover:scale-105"
        >
          Learn More
        </button>
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black/60 backdrop-blur-md">
          <div className="bg-white max-w-lg w-full mx-4 sm:mx-8 lg:mx-12 p-6 sm:p-8 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">How ContriBout Empowers Communities</h2>
            <p className="text-sm sm:text-base text-gray-700">
              ContriBout uses an online version of village funding circles to help members grow financially. Here’s how:
            </p>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-600 mt-4 text-sm sm:text-base">
              <li>
                <strong>Monthly Committees:</strong> Members contribute small monthly amounts, with funds distributed to a rotating member
                each cycle, earning them interest.
              </li>
              <li>
                <strong>Investing for Growth:</strong> We accept investor funds at competitive market rates, which we then lend to those in
                need at a lower rate, creating a positive impact.
              </li>
              <li>
                <strong>Low-Cost Loans:</strong> ContriBout provides loans to those in need, supported by donations and interest earned, ensuring
                accessible funding for everyone.
              </li>
              <li>
                <strong>Donation Fund:</strong> Contributions help extend low-interest loans and direct support to underserved communities.
              </li>
              <li>
                <strong>Transparency and Growth:</strong> All transactions are visible to members, creating a reliable platform for community support.
              </li>
            </ul>
            <button
              onClick={closeModal}
              className="mt-4 sm:mt-6 px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
