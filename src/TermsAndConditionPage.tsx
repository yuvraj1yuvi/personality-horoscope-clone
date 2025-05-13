import React from "react";

const TermsAndConditionsPage  : React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center px-2 pt-8 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-4" style={{fontFamily: 'Arial'}}>Privacy Policy</h1>
      <hr className="border-gray-700 mb-8 w-full max-w-12xl mx-auto" />
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-white text-lg md:text-xl font-semibold text-center space-y-10">
          <p>
          By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our website.
          </p>
          <p>
          We reserve the right to modify these terms at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms. Please review this page periodically for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage  ; 