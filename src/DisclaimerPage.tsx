import React from "react";

const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center px-2 pt-8 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-4" style={{fontFamily: 'Arial'}}>Disclaimer</h1>
      <hr className="border-gray-700 mb-8 w-full max-w-12xl mx-auto" />
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-white text-lg md:text-xl font-semibold text-center space-y-10">
          <p>
          The information provided on this website is for general informational purposes only. It is not intended as professional advice and should not be relied upon as such. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information provided.


          </p>
          <p>
          Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage arising from the use of this website or the information provided herein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage; 