import React from "react";

const EmailVerification = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <div className="text-center">
        {/* Emoji */}
        <div className="text-6xl mb-4">😎</div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">Check your Email!</h1>

        {/* Email Description */}
        <p className="mb-4">
          We have sent an email to{" "}
          <span className="text-blue-500">ayushonlyarcade2@gmail.com</span>.
          Please click the link in the email to verify your account or enter the
          email activation code below.
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center gap-4 mb-4">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-2xl"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-2xl"
          />
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mb-4">
          Didn’t receive an email? Check your spam folder! Emails may take a
          couple minutes to arrive.
        </p>
        <p className="text-sm text-gray-400 mb-4">
          Already validated your account?{" "}
          <a href="#" className="text-blue-500 underline">
            Go to Log In
          </a>
        </p>

        {/* Submit Button */}
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 px-8 py-2 rounded text-white font-bold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
