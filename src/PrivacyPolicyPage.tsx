import React from "react";

const PrivacyPolicyPage : React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center px-2 pt-8 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-4" style={{fontFamily: 'Arial'}}>Privacy Policy</h1>
      <hr className="border-gray-700 mb-8 w-full max-w-12xl mx-auto" />
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-white text-lg md:text-xl font-semibold text-center space-y-10">
          <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website. By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
          <p>
          We may collect personal information such as your name, email address, and browsing behavior. This information is used to improve your experience on our website and to provide you with relevant content and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage ; 