"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// const ImageGallery = ({ data }) => {
//   return (
//     <div className="flex flex-wrap gap-10 w-full justify-between">
//       {data.map((e) => (
//         <ImageHover key={e.id} images={e.images} title={e.title} desc={e.desc} />
//       ))}
//     </div>
//   );
// };

const ImageHover = ({ images, title, desc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through images every 0.5 seconds when hovered
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 800);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className="text-center w-96 flex flex-col items-center font-medium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-80 h-80 overflow-hidden relative mb-2">
        <motion.img
          src={images[currentIndex]}
          alt={title}
          className="w-full h-full object-cover mb-4"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1, opacity: isHovered ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h3 className="text-orange-400 mb-2 text-2xl">{title}</h3>
      <p className="text-lg text-textcolor mb-2">{desc}</p>
      <button className="border-2 border-textcolor bg-transparent text-lg p-2 px-6 hover:bg-white hover:border-white font-semibold">
        <p>VIEW MORE</p>
      </button>
    </div>
  );
};

export default ImageHover;
