//working
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import { RiMenu2Line } from "react-icons/ri";
// import { MoveRight } from "lucide-react";
// import { IoLogoInstagram } from "react-icons/io";
// import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
// import Link from "next/link";

// const menuItems = [
//   { id: 1, title: "Home", href: "/" },
//   { id: 2, title: "Booking", href: "/booking" },
//   { id: 3, title: "Gallery", href: "/gallery" },
//   { id: 4, title: "About", href: "/about" },
// ];

// export default function AnimatedMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuVariants = {
//     closed: {
//       clipPath: "circle(0% at 40px 40px)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40,
//       },
//     },
//     open: {
//       clipPath: "circle(150% at 40px 40px)",
//       transition: {
//         type: "spring",
//         stiffness: 20,
//         restDelta: 2,
//       },
//     },
//   };

//   const menuItemVariants = {
//     closed: { opacity: 0, y: 20 },
//     open: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.25 + i * 0.1 },
//     }),
//   };

//   return (
//     <div className="relative font-geist-sans">
//       <button
//         onClick={() => setIsOpen(true)}
//         // className="fixed top-4 left-4 z-20 p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg"
//         className="fixed top-4 left-4 z-20 sm:p-3"
//       >
//         <RiMenu2Line className="w-6 h-6" />
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 bg-purple-600 text-white z-30 p-8 flex gap-8"
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 p-2 hover:bg-purple-300/50 rounded-xl"
//             >
//               <X className="w-10 h-10" />
//             </button>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-col-reverse text-white gap-4"
//             >
//               <IoLogoInstagram className="w-6 h-6 hover:text-gray-300" />
//               <FaFacebookSquare className="w-6 h-6 hover:text-gray-300" />
//               <FaYoutube className="w-6 h-6 hover:text-gray-300" />
//             </motion.div>
//             <div className="flex flex-col justify-center h-full">
//               <nav className="space-y-10 text-7xl font-bold">
//                 {menuItems.map((item, i) => (
//                   <motion.a
//                     key={item.id}
//                     href={item.href}
//                     className="block text-purple-300 hover:text-white"
//                     variants={menuItemVariants}
//                     custom={i}
//                   >
//                     {item.title}.
//                   </motion.a>
//                 ))}
//               </nav>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="absolute bottom-8 right-8"
//               >
//                 <motion.a href="/contact">
//                   <button className="flex gap-2 items-center bg-purple-700 px-6 py-4 rounded-full text-white hover:bg-white hover:text-purple-400">
//                     CONTACT US
//                     <MoveRight />
//                   </button>
//                 </motion.a>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

//color test
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { RiMenu2Line } from "react-icons/ri";
import { MoveRight } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const menuItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Booking", href: "/booking" },
  { id: 3, title: "Gallery", href: "/gallery" },
  { id: 4, title: "About", href: "/about" },
  { id: 5, title: "Experiences", href: "/experiences" },
];

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(150% at 40px 40px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 + i * 0.1 },
    }),
  };

  return (
    <div className="relative font-geist-sans">
      <button
        onClick={() => setIsOpen(true)}
        // className="fixed top-4 left-4 z-20 p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg"
        className="fixed top-4 left-4 z-20 sm:p-3"
      >
        <RiMenu2Line className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-secondary2 text-textcolor z-30 p-8 flex gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-textcolor hover:text-white rounded-xl"
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col-reverse text-textcolor gap-4"
            >
              {/* <IoLogoInstagram className="w-6 h-6 hover:text-textcolor/65" /> */}
              <Link href="https://www.facebook.com/kufri" target="_blank">
                <FaFacebookSquare className="w-8 h-8 hover:text-textcolor/65" />
              </Link>
              {/*<FaYoutube className="w-6 h-6 hover:text-textcolor/65" /> */}
            </motion.div>
            <div className="flex flex-col justify-center h-full">
              <nav className="space-y-10 text-4xl md:text-7xl font-bold">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="block text-textcolor/65 hover:text-textcolor"
                    variants={menuItemVariants}
                    custom={i}
                  >
                    {item.title}.
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-8 right-8"
              >
                <Link href="/contact">
                  <button className="flex gap-2 items-center bg-textcolor px-6 py-4 rounded-full text-white hover:bg-white hover:text-textcolor">
                    CONTACT US
                    <MoveRight />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
