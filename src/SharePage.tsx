import React from "react";
import { useNavigate } from "react-router-dom";

const SharePage: React.FC = () => {
  const navigate = useNavigate();
  // You can add WhatsApp sharing logic here if needed
  const handleShare = () => {
    // Example: open WhatsApp share link (replace with your message and URL)
    window.open(
      `https://wa.me/?text=${encodeURIComponent('यह लेख बहुत अच्छा है! जरूर पढ़ें: ' + window.location.href)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center px-2">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400" style={{fontFamily: 'Arial'}}>
        अगर आपको यह लेख अच्छा लगा, तो इसे तुरंत अपने दोस्तों और परिवार के साथ शेयर करें! यह मैसेज आपके दोस्तों को भी पसंद आ सकता है।
      </h1>
      <button
        onClick={handleShare}
        className="w-full max-w-xl mx-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded text-lg md:text-xl transition-colors text-center"
      >
        WhatsApp पर शेयर करें
      </button>
    </div>
  );
};

export default SharePage; 