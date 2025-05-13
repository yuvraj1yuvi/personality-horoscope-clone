import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Link } from "react-router-dom";
import LetterDetails from "./LetterDetails";
import LetterFullDetails from "./LetterFullDetails";
import SharePage from "./SharePage";
import AboutPage from "./AboutPage";
import DisclaimerPage from "./DisclaimerPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
import TermsAndConditionsPage from "./TermsAndConditionPage";

const ALPHABETS = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

// Gradients for circles, repeating as in screenshot (Orange-Red, Green-Yellow, Blue-Green, Purple-Pink)
const gradients = [
  "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500", // Orange-Red
  "bg-gradient-to-br from-green-300 via-yellow-300 to-green-500", // Green-Yellow
  "bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500", // Blue-Green
  "bg-gradient-to-br from-pink-600 via-purple-600 to-fuchsia-500" // Purple-Pink
];

function MainPage() {
  const navigate = useNavigate();
  const handleLetterClick = (letter: string) => {
    navigate(`/letter/${letter}`);
  };
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#141414]">
      <header className="pt-6 pb-2 bg-[#141414]">
        <h1 className="text-center text-yellow-300 text-lg md:text-2xl lg:text-2xl font-semibold tracking-wide px-4" style={{fontFamily: 'Arial'}}>नाम का पहला अक्षर बताएगा की आप कितने भाग्यशाली हैं, अपने नाम का पहला अक्षर चुनिए और जाने अपने भविष्य के सारे गहरे राज!</h1>
      </header>
      {/* Letters Grid */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div
          className="w-full max-w-6xl grid grid-cols-3 gap-y-8 gap-x-6 justify-items-center py-8"
          style={{minHeight:'600px'}}>
            {[0, 1, 2].map(col => (
                <div className="flex flex-col gap-8" key={col}>
                  {ALPHABETS.filter((_, i) => i % 3 === col).map((letter, j) => (
                    <button
                      key={letter}
                      onClick={() => handleLetterClick(letter)}
                      className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center text-white text-2xl font-semibold shadow-lg border border-black/10 transition-all hover:scale-105 rounded-full ${gradients[(col === 0) ? (j % 2 === 0 ? 0 : 1) : col === 1 ? (j % 2 === 0 ? 2 : 1) : 3]}`}
                      aria-label={`Letter ${letter}`}
                      style={{ userSelect: "none" }}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
            ))}
        </div>
        {/* Article section */}
        <section className="w-full max-w-5xl bg-transparent px-2 md:px-12 py-10">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300 text-center">Astrology and Your Name</h2>
          <div className="space-y-6 text-gray-100 text-base">
            <p>In astrology, the letters of our names can influence various aspects of our lives, including our approach to education and career. Universities around the world now offer courses that explore how astrology can guide personal and professional growth. For example, individuals with certain letters in their names may excel in fields like cybersecurity, where precision and protection are key, or in industries such as insurance, home building, and industrial equipment. By understanding these cosmic influences, people can make better decisions in their careers and lives, aligning their paths with their inherent strengths.</p>
            <p>Astrology also links our names to financial and material success. For instance, those whose names begin with certain letters may be more drawn to luxury, like luxury cars, or may seek financial tools such as loans and credit cards. Online degrees in astrology are gaining popularity, offering insights into these personality traits. With the rise of crypto currency and stock market investments, understanding how the alphabet influences financial decisions is becoming increasingly important.</p>
            <p>Software solutions and SaaS are revolutionizing learning, with online courses making astrology studies more accessible. Scholarships and student loans help individuals pursue university and college admission, overcoming financial barriers. Astrology may even influence career choices, such as an interest in emerging fields like electric vehicles (EVs), guiding people towards industries aligned with their cosmic traits.</p>
            <p>Astrology can influence interests in luxury real estate, property investment, and even luxury hotels and resorts. People with certain personality traits may be drawn to B2B software or opt for student loans and financial aid to pursue their goals. Similarly, their preferences for luxury items like jewelry and watches can also be shaped by their cosmic influences.</p>
            <p>Astrology can influence choices in sustainability and lifestyle. People with certain traits may be drawn to Soly Solar Panels or companies like Sime Darby. Travel preferences, such as Travelplan Ski Holidays, can also be shaped by cosmic traits. Educational institutions like Georgian College offer courses aligned with these interests, while industries like Logic Supply and Jet Craft attract individuals guided by their astrological influences.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function LetterDetailsPage() {
  const { letter } = useParams<{ letter: string }>();
  const navigate = useNavigate();
  if (!letter) return null;
  return <LetterDetails letter={letter} onBack={() => navigate(`/letter/${letter}/full`)} />;
}

function LetterFullDetailsPage() {
  const { letter } = useParams<{ letter: string }>();
  const navigate = useNavigate();
  if (!letter) return null;
  return <LetterFullDetails letter={letter} onBack={() => navigate(`/letter/${letter}/share`)} />;
}

function SharePageRoute() {
  return <SharePage />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/letter/:letter" element={<LetterDetailsPage />} />
        <Route path="/letter/:letter/full" element={<LetterFullDetailsPage />} />
        <Route path="/letter/:letter/share" element={<SharePageRoute />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      </Routes>
      <footer className="w-full flex flex-col items-center pb-5 pt-3 bg-[#141414]">
        <nav className="flex gap-x-8 text-green-600 text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
        </nav>
      </footer>
    </Router>
  );
}

export default App;
