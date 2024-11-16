"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto bg-secondary">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-[#F2994A] font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-textcolor font-cormorant">
          Let's change it up a bit
        </h3>
        <p className="text-lg md:text-xl text-textcolor my-4 md:my-6 font-cormorant font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button> */}
        <button className="border-2  border-textcolor bg-transparent text-lg p-2 px-6 hover:bg-white hover:border-white text-textcolor font-cormorant font-semibold">
          <p>View Gallery</p>
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: "/images/outdoor.jpg",
//   },
//   {
//     id: 2,
//     src: "/images/outdoor1.jpg",
//   },
//   {
//     id: 3,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 4,
//     src: "/images/restaurant1.jpg",
//   },
//   {
//     id: 5,
//     src: "/images/restaurant2.jpg",
//   },
//   {
//     id: 6,
//     src: "/images/room.jpg",
//   },
//   {
//     id: 7,
//     src: "/images/room1.jpg",
//   },
//   {
//     id: 8,
//     src: "/images/seating.jpg",
//   },
//   {
//     id: 9,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 10,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 11,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 12,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 13,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 14,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 15,
//     src: "/images/restaurant.jpg",
//   },
//   {
//     id: 16,
//     src: "/images/restaurant.jpg",
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "/images/outdoor.jpg" },
  { id: 2, src: "/images/outdoor1.jpg" },
  { id: 3, src: "/images/restaurant.jpg" },
  { id: 4, src: "/images/restaurant1.jpg" },
  { id: 5, src: "/images/restaurant2.jpg" },
  { id: 6, src: "/images/room.jpg" },
  { id: 7, src: "/images/room1.jpg" },
  { id: 8, src: "/images/seating.jpg" },
  { id: 9, src: "/images/outside.jpg" },
  { id: 10, src: "/images/outside1.jpg" },
  { id: 11, src: "/images/outside2.jpg" },
  { id: 12, src: "/images/outside3.jpg" },
  { id: 13, src: "/images/outside4.jpg" },
  { id: 14, src: "/images/outside5.jpg" },
  { id: 15, src: "/images/outside6.jpg" },
  { id: 16, src: "/images/outside7.jpg" },
];

const generateSquares = (data) => {
  return data.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares(squareData));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    const shuffledData = shuffle([...squareData]);
    setSquares(generateSquares(shuffledData));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default Gallery;
