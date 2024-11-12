import React, { useState } from 'react';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhyDonateOpen, setIsWhyDonateOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleWhyDonate = () => setIsWhyDonateOpen(!isWhyDonateOpen);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you for your donation of ₹${donationAmount}!`);
    setIsModalOpen(true); // Show confirmation modal
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Donate to Support a Cause
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Every contribution helps us reach more people in need. Join us in creating a positive impact today.
        </p>

        {/* Donation Amount Selection */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[500, 1000, 2500, 5000].map((amount) => (
            <button
              key={amount}
              onClick={() => setDonationAmount(amount)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              ₹{amount}
            </button>
          ))}
        </div>

        {/* Custom Donation Form */}
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Custom Donation</h2>
          <form onSubmit={handleDonationSubmit}>
            <label className="block text-gray-700 font-semibold mb-2">Donation Amount (₹)</label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-green-500"
              placeholder="Enter amount"
              required
            />

            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-green-500"
              placeholder="Your full name"
              required
            />

            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-green-500"
              placeholder="Your email address"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Donate Now
            </button>
          </form>

          {/* "Why Donate?" Link */}
          <button onClick={toggleWhyDonate} className="mt-6 block mx-auto text-gray-600 hover:text-blue-500 transition-all">
            Why Donate?
          </button>
        </div>
        
        {/* Impact of Donation */}
        <div className="mt-12 text-gray-700 text-left max-w-screen-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4">How Your Donation Helps</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>₹500 provides meals for a family for a day.</li>
            <li>₹1000 covers medical assistance for an individual in need.</li>
            <li>₹2500 helps fund educational resources for children.</li>
            <li>₹5000 sponsors housing support for a homeless family.</li>
          </ul>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-lg text-green-600 mb-6">{message}</p>
            <button
              onClick={closeModal}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why Donate Modal */}
      {isWhyDonateOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-lg max-w-lg p-6 text-center space-y-4">
            <h2 className="text-2xl font-bold">Why Your Donation Matters</h2>
            <p>
              Donations support vital causes that provide healthcare, education, and emergency relief to those in need.
              Your contribution helps make the world a better place, one step at a time.
            </p>
            <button
              onClick={toggleWhyDonate}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
