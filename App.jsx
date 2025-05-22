
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`rounded-[24px] font-medium shadow transition-all active:scale-95 text-base px-6 py-3 ${className}`}
    {...props}
  >
    {children}
  </button>
);
export default function RoomieApp() {
  const [screen, setScreen] = useState("welcome");
  const [phone, setPhone] = useState("");
  const [match, setMatch] = useState(false);

  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <AnimatePresence mode="wait">
      {/* All screens from previous canvas code go here */}
      {screen === "welcome" && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={transition}
          className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-[#B9E6F2] to-[#FFFFFF] text-center px-6 font-sans"
        >
          <h1 className="text-[56px] font-extrabold text-[#131E3A] mb-1 leading-none tracking-tight">roomie</h1>
          <p className="text-[16px] font-normal text-[#4A4A4A] mb-14">Your next roommate is just a swipe away</p>
          <input
            type="text"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-[14px] rounded-[30px] text-center w-[280px] border border-[#D9D9D9] shadow-inner mb-6 text-[14px]"
          />
          <Button onClick={() => setScreen("discover")}
            className="bg-[#F3C146] text-[#131E3A] w-[280px]">Get Started</Button>
        </motion.div>
      )}
      {screen === "discover" && (
        <motion.div
          key="discover"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={transition}
          className="h-screen w-full flex flex-col items-center bg-gradient-to-b from-[#B9E6F2] to-[#FFFFFF] p-4 font-sans"
        >
          <h2 className="text-[22px] font-bold text-[#131E3A] mt-6 mb-4 tracking-tight">Discover</h2>
          <motion.div layout className="bg-white rounded-[30px] shadow-xl p-6 text-center w-[330px]">
            <div className="h-[112px] w-[112px] mx-auto rounded-full bg-[#D9D9D9] mb-4 shadow-md" />
            <h3 className="text-[18px] font-semibold text-[#131E3A] mb-[2px]">John Doe</h3>
            <p className="text-[13px] text-[#6B7280]">San Francisco, CA</p>
            <p className="mt-3 text-[13px] text-[#374151] leading-snug">Loves music, movies, and travel. Looking for a chill, clean roommate.</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 rounded-full bg-[#FFD166] text-white text-[12px]">Music</span>
              <span className="px-3 py-1 rounded-full bg-[#118AB2] text-white text-[12px]">Movies</span>
              <span className="px-3 py-1 rounded-full bg-[#EF476F] text-white text-[12px]">Travel</span>
            </div>
          </motion.div>
          <div className="mt-8 flex gap-8">
            <Button onClick={() => setScreen("match")} className="bg-[#EF476F] w-[60px] h-[60px] text-[22px]">❌</Button>
            <Button onClick={() => setMatch(true)} className="bg-[#FFD166] w-[60px] h-[60px] text-[22px] text-black">⭐</Button>
            <Button onClick={() => setScreen("match")} className="bg-[#06D6A0] w-[60px] h-[60px] text-[22px]">❤️</Button>
          </div>
        </motion.div>
      )}
      {/* Add other screens as needed */}
    </AnimatePresence>
  );
}
