// "use client";

// import { useState } from "react";
// // import { Menu, ShoppingCart, Search } from 'lucide-react'
// import { RiMenu2Line } from "react-icons/ri";
// import { LuShoppingCart } from "react-icons/lu";
// import { IoIosSearch } from "react-icons/io";
// export default function Navbar() {
//   const [dateRange, setDateRange] = useState("21.4.2024 — 25.4.2024");
//   const [nights, setNights] = useState("4 Nights");

//   return (
//     <div className="relative min-h-screen">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('/images/bg2.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />

//       {/* Navigation Bar */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between py-4">
//             <button className="lg:hidden p-2 text-white">
//               <RiMenu2Line className="h-6 w-6" />
//             </button>

//             {/* Navigation Links */}
//             <div className="hidden lg:flex space-x-6">
//               <a
//                 href="#"
//                 className="text-sm font-medium text-white hover:text-gray-200"
//               >
//                 Rooms & Suites
//               </a>
//               <a
//                 href="#"
//                 className="text-sm font-medium text-white hover:text-gray-200"
//               >
//                 Experiences
//               </a>
//               <a
//                 href="#"
//                 className="text-sm font-medium text-white hover:text-gray-200"
//               >
//                 contact
//               </a>
//               <a
//                 href="#"
//                 className="text-sm font-medium text-white hover:text-gray-200"
//               >
//                 About
//               </a>
//             </div>

//             {/* Logo */}
//             <div className="flex flex-col items-center">
//               {/* <div className="flex gap-0.5 mb-1">
//                 {"★★★★★".split("").map((star, i) => (
//                   <span key={i} className="text-white text-xs">
//                     {star}
//                   </span>
//                 ))}
//               </div> */}
//               <div className="text-white text-lg font-serif">
//                 KUFRI SNOW VIEW RESORT,
//               </div>
//             </div>

//             {/* Right Side Navigation */}
//             <div className="flex items-center gap-4">
//               <button className="hidden sm:inline-flex px-4 py-2 border-2 border-white hover:bg-white hover:text-[#305369] text-white rounded-lg">
//                 Book Now
//               </button>
//               {/* <div className="relative">
//                 <LuShoppingCart className="h-6 w-6 text-white" />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                   1
//                 </span>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif mb-16">
//           Extraordinary experiences
//         </h1>

//         {/* Search Bar */}
//         {/* <div className="bg-white rounded-lg flex items-center max-w-3xl w-full">
//           <div className="flex-1 flex items-center p-4 border-r border-gray-200">
//             <span className="mr-2">📅</span>
//             <div className="text-sm">
//               <div className="font-medium">{dateRange}</div>
//               <div className="text-gray-500">{nights}</div>
//             </div>
//           </div>
//           <div className="p-2">
//             <button className="flex items-center px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg">
//               <IoIosSearch className="h-4 w-4 mr-2" />
//               Search
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full z-50 sm:px-6  font-cormorant  ${
        isScrolled ? "bg-secondary text-textcolor" : "bg-transparent text-white"
      }`}
    >
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <button className="p-2 ">
              <RiMenu2Line className="h-6 w-6" />
            </button>

            {/* Navigation Links */}
            {/* <div className="hidden lg:flex space-x-6">
              <a href="#" className="text-lg font-medium hover:text-gray-500">
                Rooms & Suites
              </a>
              <a
                href="#"
                className="text-sm font-medium text-white hover:text-gray-200"
              >
                Experiences
              </a>
              <a href="#" className="text-lg font-medium hover:text-gray-500">
                contact
              </a>
              <a href="#" className="text-lg font-medium hover:text-gray-500">
                About
              </a>
            </div> */}

            {/* Logo */}
            <div className="flex flex-col items-center">
              {/* <div className="flex gap-0.5 mb-1">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-white text-xs">
                    {star}
                  </span>
                ))}
              </div> */}
              <div className="text-lg font-serif">KUFRI SNOW VIEW RESORT</div>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:inline-flex px-4 py-2 border-2 border-white hover:bg-white hover:text-textcolor rounded-lg">
                Book Now
              </button>
              {/* <div className="relative">
                <LuShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  1
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
