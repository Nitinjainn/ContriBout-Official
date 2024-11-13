import React, { useState } from 'react';

const DonationPage = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showWhyDonateModal, setShowWhyDonateModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage(`Thank you, ${donorName}, for your contribution of $${donationAmount}!`);
    setShowConfirmationModal(true);
  };

  const closeModal = () => setShowConfirmationModal(false);
  const toggleWhyDonateModal = () => setShowWhyDonateModal(!showWhyDonateModal);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 p-10">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">InvestCycle</h1>
        <p className="text-gray-600 mb-5">
          It is a platform where travelers can pool resources monthly, helping each other achieve travel goals through shared contributions and support.
        </p>
        
        {/* Custom Donation Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom Contribution</h2>
          <form id="donation-form" onSubmit={handleSubmit}>
            <label htmlFor="amount" className="font-bold text-gray-600 block mb-2">Contribution Amount ($)</label>
            <input
              type="number"
              id="donation-amount"
              placeholder="Enter amount (in USD)"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            
            <label htmlFor="name" className="font-bold text-gray-600 block mb-2">Full Name</label>
            <input
              type="text"
              id="donor-name"
              placeholder="Your full name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            
            <label htmlFor="email" className="font-bold text-gray-600 block mb-2">Email</label>
            <input
              type="email"
              id="donor-email"
              placeholder="Your email address"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            
            <button
              type="submit"
              className="w-full p-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition-colors"
            >
              Contribute Now!
            </button>
          </form>
          <a href="#" onClick={toggleWhyDonateModal} className="text-green-700 font-bold mt-4 inline-block">Why Contri?</a>
        </div>
        
        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-5">
            <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
              <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
              <p className="text-green-600 my-4">{confirmationMessage}</p>
              <button onClick={closeModal} className="bg-green-700 text-white py-2 px-6 rounded mt-4">Close</button>
            </div>
          </div>
        )}

        {/* Why Donate Modal */}
        {showWhyDonateModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-5">
            <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
              <h2 className="text-2xl font-semibold text-gray-800">Your Contri matters alot...</h2>
              <p className="text-gray-600 mt-4 mb-6">
              Contributing helps create a community where travelers can experience the world together. By joining, you support a platform that offers seamless payments, unforgettable experiences, and instant connections, making travel safer, more enjoyable, easy on pockets and accessible for everyone. Your involvement ensures that like-minded adventurers can explore, share, and build memories without barriers—anywhere in the world!
              </p>
              <button onClick={toggleWhyDonateModal} className="bg-green-700 text-white py-2 px-6 rounded">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
