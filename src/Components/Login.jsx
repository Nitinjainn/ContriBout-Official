import React from 'react';
import img from '../Images/loginimg.png';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4fc]">
      <div className="flex w-4/5 max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 bg-[#136613] text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-center font-bold mb-4">Welcome Back!</h1>
          <div className="mt-4 h-[70px] w-[400px] flex gap-5">
            <img src={img} alt="Login illustration"/>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-[#1e3a8a] text-2xl mb-4">Log In</h2>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <input type="email" placeholder="Email address" id="email" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <input type="password" placeholder="Password" id="password" className="w-full p-3 border border-gray-300 rounded-lg text-lg" />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-3" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full p-3 bg-[#1c9125] text-white rounded-lg text-lg hover:bg-[#22741f] transition-all duration-300 ">
              Log in
            </button>
            <p className="text-sm text-center text-gray-600 mt-6">
              Don't have an account? 
              <a href="/Signup" className="text-[#1e3a8a]"> Sign up </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
