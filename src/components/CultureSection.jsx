import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

const CultureSection = () => {
  return (
    <div className="bg-[#EEE9D3] py-20">
      <div className="container mx-auto">
        <div className="bg-[#DE6536] p-8 md:p-7 rounded-lg shadow-lg flex flex-col md:flex-row items-center">

  {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-10">
          <p className="text-base text-white">Arrivals</p>
            <h2 className="text-lg md:text-4xl font-bold text-white">
              Style trends are influenced <br />
              by the cultures.
            </h2>
            <p className="text-sm md:text-base text-white opacity-80">
              When they are in the means of fashion or how they are portrayed, cultures constantly leave us in the trendy corner. What they seek and the variety of fashions have their own aesthetics that define us as individuals or a unity that makes us move.
            </p>

            <motion.button
              className="flex items-center gap-16 bg-white text-[#1E1916] px-2 py-2 rounded-full shadow-md border-2 transition-all duration-300 font-bold text-sm justify-between"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex-grow text-left">LEARN MORE</span>
              <span
                className="bg-[#1E1916] text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md ml-2"
              >
                <MdArrowForward size={20} />
              </span>
            </motion.button>
          </div>

  {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/images/r5.jpg"
              alt="Two women smiling"
              className="w-80 h-[360px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureSection;
