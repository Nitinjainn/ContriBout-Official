import React from 'react';
import img from '../Images/img.png';


const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4fc]">
      <div className="flex w-4/5 max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 bg-[#2b7914] text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-xl text-center font-bold mb-4">Bringing communities together</h1>          <p className="text-m text-center mb-4">Unlock community-driven lending with trust and ease</p>
          <div className="mt-4 h-[300px] w-[300px] flex gap-5">
            <img src= {img} alt="Community" className="object-cover" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-[#1e3a8a] text-2xl mb-4">Sign up now</h2>
          <form>
            {/* Name Inputs */}
            <div className="flex gap-4 mb-4">
              <input type="text" placeholder="First name" id="fname" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
              <input type="text" placeholder="Last name" id="lname" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input type="email" placeholder="Email address" id="remail" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <input type="tel" placeholder="Phone number" id="rphone" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input type="password" placeholder="Password" id="rpassword" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Terms and Consent Checkboxes */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="mr-3" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                By creating an account, I agree to the 
                <a href="#" className="text-[#1e3a8a]"> Terms of use </a> and 
                <a href="#" className="text-[#1e3a8a]"> Privacy Policy </a>.
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="consent" className="mr-3" />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I consent to receive SMS messages and emails for updates and promotions.
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full p-3 bg-[#46a720] text-black rounded-lg text-lg hover:bg-[#184d14] transition-all duration-300 hover:text-gray-100"> Sign up</button>
            <p className="text-sm text-center text-gray-600 mt-6">
              Already have an account? 
              <a href='/Login' className="text-[#1e3a8a] "> Login </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
