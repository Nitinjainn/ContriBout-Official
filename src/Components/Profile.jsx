import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main Street, Cityville',
    email: 'john.doe@example.com',
    accountNo: '123456789012',
    previousLoans: [], // No loans by default
    currentLoan: null,
    image: null // Default icon shown when no image is present
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-white p-5 md:p-8 max-w-4xl mx-auto my-10 shadow-lg rounded-xl border border-green-300">
      {/* Profile Picture and Name Section */}
      <div className="flex flex-col md:flex-row items-center mb-6 md:mb-8">
        <div className="relative mb-4 md:mb-0">
          {profile.image ? (
            <img
              src={profile.image}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-green-400 shadow-lg object-cover"
            />
          ) : (
            <div className="w-28 h-28 rounded-full border-4 border-green-400 shadow-lg bg-green-100 flex items-center justify-center">
              <i className="fas fa-user text-5xl text-green-500"></i>
            </div>
          )}
        </div>
        <div className="text-center md:text-left md:ml-6">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="text-3xl font-extrabold text-green-700 border-b-2 border-green-300 focus:outline-none focus:border-green-500 transition duration-200"
            />
          ) : (
            <h2 className="text-3xl font-extrabold text-green-700">{profile.name}</h2>
          )}
          <p className="text-md text-green-600 font-light italic mt-1">Customer Profile</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-4">
        {['phone', 'address', 'email', 'accountNo'].map((field) => (
          <div key={field} className="bg-white p-3 rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow">
            <label className="block text-green-700 font-medium capitalize mb-1">
              {field.replace('accountNo', 'Account No')}
            </label>
            {isEditing ? (
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleInputChange}
                className="w-full border border-green-300 rounded px-3 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            ) : (
              <p className="text-gray-800">{profile[field]}</p>
            )}
          </div>
        ))}

        {/* Current Loan Details */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
          <label className="block text-green-700 font-medium mb-2">Current Loan</label>
          {profile.currentLoan ? (
            <p className="text-gray-800">{profile.currentLoan}</p>
          ) : (
            <p className="text-gray-500">No current loan issued.</p>
          )}
        </div>

        {/* Previous Loan Details */}
        <div className="bg-white p-3 rounded-lg shadow-sm border border-green-200">
          <label className="block text-green-700 font-medium mb-2">Previous Loan Details</label>
          {profile.previousLoans.length > 0 ? (
            <ul className="mt-1 space-y-1">
              {profile.previousLoans.map((loan, index) => (
                <li key={index} className="text-gray-700">
                  <strong className="text-green-600">{loan.loanType}:</strong> {loan.amount} - <em>{loan.status}</em>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No previous loans issued.</p>
          )}
        </div>

        {/* Edit Button */}
        <button
          onClick={toggleEdit}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-full shadow-lg transition duration-300"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
