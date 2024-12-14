import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import {
  MdOutlineShoppingCart,
  MdOutlineNotifications,
  MdSearch,
  MdArrowForward,
} from 'react-icons/md';



const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Contact', link: '#' },
  { id: 3, title: 'Shop', link: '#' },
  { id: 4, title: 'Sale', link: '#' },
];

const Navbar = () => {

  return (

    <div className="bg-[#EEE9D3] min-h-screen">
{/* Navbar Section */}
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">


{/* Logo */}
          <div className="flex">
            <p className="font-bold text-3xl text-secondary">FEMMEFIT</p>
          </div>


{/* Navbar Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-secondary">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_#de6536] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>


{/* Icons */}
      <div className="flex gap-6">
            <button className="text-xl hover:text-primary rounded-full p-2">
              <MdSearch />
            </button>
            <button className="text-xl hover:text-primary rounded-full p-2">
              <MdOutlineShoppingCart />
            </button>
            <button className="text-xl hover:text-primary rounded-full p-2">
              <MdOutlineNotifications />
            </button>
          </div>
        </div>
      </nav>


{/* Main Section */}
    <div className="container mx-auto grid grid-cols-5 gap-2 mt-2">


{/* Left Section */}
        <div className="col-span-3 relative">
          <img
            src="/images/r10.jpg"
            alt="Femmefit Model"
            className="rounded-lg w-full h-[530px] object-cover"
            style={{ objectPosition: 'center 29%' }}
          />
          <button className="absolute top-4 right-4 bg-[#E85D04] text-white px-4 py-2 rounded-full">
            New
          </button>



{/* Buttons Section */}
 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-14 flex-nowrap justify-center">

  <motion.button
    className="flex items-center gap-7 bg-[#1E1916] text-white px-3 sm:px-2 py-2 sm:py-2 rounded-full shadow-md transition-all duration-300 whitespace-nowrap justify-between text-sm sm:text-base"
        
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{ scale: 0.95 }}
  >
    VIEW CATALOGUE
    <span
      className="flex-grow text-left bg-white text-[#1E1916] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md ml-2"
    >
      <MdArrowForward size={20} />
    </span>
  </motion.button>


  <motion.button
    className="flex items-center gap-10 bg-[white] text-[#1E1916] px-3 sm:px-2 py-2 sm:py-2 rounded-full shadow-md transition-all duration-300 font-bold text-sm sm:text-base justify-between whitespace-nowrap"
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{ scale: 0.95 }}
  >
    LEARN MORE
    <span 
      className="bg-[#1E1916] text-[white] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md ml-2"
    >
      <MdArrowForward size={20} />
    </span>
  </motion.button>

          </div>
        </div>



{/* Right Section */}
      <div className="col-span-2 flex flex-col gap-2">
          <div className="bg-[#1E1916] text-white p-2 rounded-lg h-[210px]">
            <h1 className="text-3xl font-bold text-white">
              STYLE TRENDS ARE INFLUENCED BY THE CULTURES.
            </h1>
            <p className="text-sm text-white mt-10">
              Where comfort meets creativity. For example, the modern sneaker is born of cultural diversity.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="relative p-1 rounded-lg w-1/2">
              <img
                src="/images/r2.jpg"
                alt="Femmefit 2023"
                className="rounded-lg w-full h-[310px] object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center font-semibold w-full">
                <p>FEMMEFIT2023</p>
              </div>
            </div>
            <div className="relative p-1 rounded-lg w-1/2">
              <img
                src="/images/r3.jpg"
                alt="Collection"
                className="rounded-lg w-full h-[310px] object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center font-semibold w-full">
                <p>COLLECTION</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>



{/* Quote Section */}
    <div className="bg-[#EEE9D3] flex items-start justify-center pt-16 pb-18">
        <h1 className="text-[#1e1916] text-3xl md:text-4xl lg:text-4xl font-bold leading-snug tracking-wider text-left">
          “<span className="text-5xl font-bold">A</span> woman who was desired{' '}
          <span className="inline-block">
            <img
              src="/images/str.png"
              alt="Strawberry"
              className="inline-block w-14 h-13 object-cover"
            />
          </span>{' '}
          by another man... <br />
          immediately becomes dearer to us. It just so <br />
          happens that{' '}
          <span className="relative inline-block bg-[#EEE9D3] px-2 py-0 rounded-md border border-[#E85D04]">
            a person
          </span>{' '}
          is much more <br />
          influenced by relative values than by ones.”
        </h1>
      </div>


{/* Additional Sections */}
    <div className="bg-[#EEE9D3] min-h-[400px] md:min-h-[300px] py-8 md:py-12">
    <div className="container mx-auto grid grid-cols-4 gap-4 pt-8">
          

{/* Left Section with Quote, Learn More Button, and Image */}
 <div className="col-span-4 md:col-span-2 bg-[#DE6536] text-white rounded-lg pt-2 pb-2 px-3 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
  

{/* Text Section */}
  <div className="flex flex-col justify-center w-full md:w-1/2 pr-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-24">
      Style trends are influenced by the cultures.
    </h1>

    <motion.button
      className="flex items-center bg-white text-[#1E1916] px-3 sm:px-2 py-2 sm:py-2 rounded-full shadow-md transition-all duration-300 font-bold text-sm sm:text-base justify-between"
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



{/* Image Section */}
  <div className="w-full md:w-auto flex justify-center">
    <img
      src="/images/r4.jpg"
      alt="Cultural Fashion"
      className="w-64 h-[285px] object-cover rounded-lg"
    />
  </div>
</div>



{/* Right Section with Image */}
 <div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-3">


{/* Left Subsection */}
  <div className="flex items-center justify-center relative w-full h-[300px]">


{/* Image */}
  <img
    src="/images/r9.jpg"
    alt="Cultural Influence"
    className="rounded-lg w-full h-full object-cover"
  />


{/* + Button */}
  <button className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg">
    +
  </button>
</div>

  
{/* Right Subsection */}
  <div className="flex items-center justify-center relative w-full h-[300px]">


{/* Image */}
  <img
    src="/images/r6.jpg"
    alt="Cultural Influence"
    className="rounded-lg w-full h-full object-cover"
  />

{/* + Button */}
  <button className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg">
    +
  </button>
</div>
  
</div>
</div>
</div>



{/* Quote Section */}
<div className="bg-[#EEE9D3] flex items-start justify-end pr-44 pt-8 pb-20">
  <h1 className="text-[#1e1916] text-3xl md:text-4xl lg:text-4xl font-bold leading-snug tracking-wider text-right">
    {["When they write that", "the name of a historical hero", "they mean woman."].map((line, lineIndex) => (
      <span key={lineIndex} className="block">
        {Array.from(line).map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            whileHover={{
              y: -5, // Move upward
              color: "#de6536", // Change color to orange
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
    ))}
  </h1>
</div>



{/* Bottom Image Section */}
<div className="container mx-auto grid grid-cols-3 gap-3 pb-12">
  <motion.div
    className="text-left"
    whileHover={{ scale: 1.05 }}             // Scale up on hover
    transition={{ duration: 0.3 }}           // Transition duration for the scale effect
  >
    <img
      src="/images/r7.jpg"
      alt="Femmefit 2023"
      className="rounded-lg w-full h-[200px] object-cover"
    />
    <p className="font-semibold mt-2">FEMMEFIT2023</p>
    <p className="text-sm text-[#1E1916]">Women’s clothing</p>
  </motion.div>

  <motion.div
    className="text-left"
    whileHover={{ scale: 1.05 }}             // Scale up on hover
    transition={{ duration: 0.3 }}           // Transition duration for the scale effect
  >
    <img
      src="/images/r8.jpg"
      alt="Collection"
      className="rounded-lg w-full h-[200px] object-cover"
    />
    <p className="font-semibold mt-2">COLLECTION</p>
    <p className="text-sm text-[#1E1916]">Women’s clothing</p>
  </motion.div>

  <motion.div
    className="text-left"
    whileHover={{ scale: 1.05 }}             // Scale up on hover
    transition={{ duration: 0.3 }}           // Transition duration for the scale effect
  >
    <img
      src="/images/r12.jpg"
      alt="Jackets"
      className="rounded-lg w-full h-[200px] object-cover"
    />
    <p className="font-semibold mt-2">JACKETS</p>
    <p className="text-sm text-[#1E1916]">Women’s clothing</p>
  </motion.div>
</div>


{/* Horizontal line Section */}

    <div>
      <hr className="h-1 bg-[#DE6536] border-0 mx-44" />
    </div>
      

    </div>

  );

};

export default Navbar;
