import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center px-2 pt-8 pb-20">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-4" style={{fontFamily: 'Arial'}}>About Us</h1>
      <hr className="border-gray-700 mb-8 w-full max-w-12xl mx-auto" />
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-white text-lg md:text-xl font-semibold text-center space-y-10">
          <p>
            Our website aims to provide you with information about your personality and future based on the first letter of your name. Our team consists of experts and astrologers who provide accurate and reliable information.
          </p>
          <p>
            Our mission is to help every individual understand important aspects of their life through the first letter of their name.<br />
            All the information available on our website is based on research and analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 