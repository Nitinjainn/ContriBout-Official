import React, { useState } from 'react';

const CreateCommunity = ({ isOpen, closeCommunityForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Community created successfully!");
    closeCommunityForm();
  };

  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl transform transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Create Your Travel Community</h2>
        <form onSubmit={handleSubmit}>
          {/* Community Name */}
          <label className="block text-gray-700 font-semibold mb-2">Community Name</label>
          <input
            type="text"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the name of the community"
            required
          />

          {/* Select Country */}
          <label className="block text-gray-700 font-semibold mb-2">Select Country</label>
          <select
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a country</option>
            <option value="usa">United States</option>
            <option value="france">France</option>
            <option value="japan">Japan</option>
            <option value="brazil">Brazil</option>
            <option value="australia">Australia</option>
            {/* Add more options as needed */}
          </select>

          {/* Enter Location */}
          <label className="block text-gray-700 font-semibold mb-2">Location (City/Region)</label>
          <input
            type="text"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the location"
            required
          />

          {/* Number of Participants */}
          <label className="block text-gray-700 font-semibold mb-2">Maximum Number of Participants</label>
          <input
            type="number"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter the number of participants"
            min="1"
            required
          />

          {/* Additional Notes */}
          <label className="block text-gray-700 font-semibold mb-2">Additional Notes (Optional)</label>
          <textarea
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter any additional information or details"
          ></textarea>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={closeCommunityForm}
              className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;
