import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faCheckCircle, faUsers, faChartLine, faImage, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; 

const StartFundraising = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4fc]">
      <div className="w-full h-full bg-white p-8 overflow-auto shadow-xl rounded-xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#1e3a8a]">
            Start Your Fundraising Journey
          </h1>
          <p className="text-lg text-gray-700 text-center mt-4">
            Fundraising is a powerful way to bring communities together. 
            Whether you are raising funds for a cause, project, or individual need, 
            our platform makes it easy to get started and achieve your goals.
          </p>

          {/* Fundraising Process Section */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faHandsHelping} className="mr-3 text-xl" />
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
              <li>Define your goal: Explain what you're raising funds for.</li>
              <li>Create a compelling campaign: Add a title, description, and image.</li>
              <li>Share with your network: Use social media or email to get the word out.</li>
              <li>Track your progress: Monitor donations and encourage your supporters.</li>
              <li>Withdraw funds: Once you reach your goal, you can withdraw the funds easily.</li>
            </ol>
          </div>

          {/* Fundraising Form */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-xl" />
              Create Your Fundraiser
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-lg text-gray-600">Campaign Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#1c9125]"
                  placeholder="Enter your campaign title"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-lg text-gray-600">Campaign Description</label>
                <textarea
                  id="description"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#1c9125]"
                  placeholder="Describe the purpose of your fundraiser"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="goal" className="block text-lg text-gray-600">Funding Goal</label>
                <input
                  type="number"
                  id="goal"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#1c9125]"
                  placeholder="Enter your fundraising goal"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block text-lg text-gray-600">Campaign Image</label>
                <input
                  type="file"
                  id="image"
                  className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#1c9125]"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-[#1c9125] text-white rounded-lg text-lg hover:bg-[#22741f] transition-all duration-300"
              >
                Create Fundraiser
              </button>
            </form>
          </div>

          {/* Fund Utilization Section */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faChartLine} className="mr-3 text-xl" />
              How Funds Are Used
            </h2>
            <p className="text-lg text-gray-700">
              The funds raised will be directly used for the stated cause. Our platform ensures 
              that all donations go directly to the fundraising goal, and transparency is maintained.
            </p>
          </div>

          {/* Donor Benefits Section */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faUsers} className="mr-3 text-xl" />
              Donor Benefits
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Support meaningful causes</li>
              <li>Receive updates and reports on the fundraiser's progress</li>
              <li>Tax benefits for eligible donations</li>
              <li>Impactful engagement with the community</li>
            </ul>
          </div>

          {/* Success Stories Section */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-xl" />
              Success Stories
            </h2>
            <div className="space-y-4">
              <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a8a]">John's Medical Fundraiser</h3>
                <p className="text-lg text-gray-700">
                  "Thanks to the support of the community, I was able to raise funds for my surgery. It was an emotional journey, and I will be forever grateful."
                </p>
              </div>

              <div className="bg-[#f3f4f6] p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#1e3a8a]">Animal Shelter Fund</h3>
                <p className="text-lg text-gray-700">
                  "We raised enough funds to provide medical care, food, and shelter for abandoned animals. The response was overwhelming!"
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 mt-8">
            <h2 className="text-2xl font-semibold text-[#1e3a8a] flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-3 text-xl" />
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>
                <strong>How long does it take to create a fundraiser?</strong>
                <p>It only takes a few minutes to set up your campaign and start receiving donations.</p>
              </li>
              <li>
                <strong>What fees are involved?</strong>
                <p>Our platform charges a small fee for processing payments, but it’s transparent and clearly listed during the setup.</p>
              </li>
              <li>
                <strong>Can I withdraw funds anytime?</strong>
                <p>Yes! Once your campaign reaches the funding goal, you can withdraw funds at your convenience.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFundraising;
