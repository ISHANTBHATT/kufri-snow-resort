"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  // const [cards, setCards] = useState(cardData);
  const initialCards = cardData;
  const [cards, setCards] = useState(initialCards);

  // Reset cards when all are swiped away
  if (cards.length === 0) {
    setTimeout(() => {
      setCards(initialCards);
    }, 300);
  }
  return (
    <div
      className="grid h-[500px] w-full place-items-center"
      //   style={{
      //     backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      //   }}
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing z-10"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    url: "/images/outdoor.jpg",
  },
  {
    id: 2,
    url: "/images/outdoor1.jpg",
  },
  {
    id: 3,
    url: "/images/restaurant.jpg",
  },
  {
    id: 4,
    url: "/images/restaurant1.jpg",
  },
  {
    id: 5,
    url: "/images/restaurant2.jpg",
  },
  {
    id: 6,
    url: "/images/room.jpg",
  },
  {
    id: 7,
    url: "/images/room1.jpg",
  },
  {
    id: 8,
    url: "/images/seating.jpg",
  },
];

// "use client";
// import React, { useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// const SwipeCards = () => {
//   const initialCards = cardData;
//   const [cards, setCards] = useState(initialCards);

//   // Reset cards when all are swiped away
//   if (cards.length === 0) {
//     setTimeout(() => {
//       setCards(initialCards);
//     }, 300);
//   }

//   return (
//     <div className="grid h-[500px] w-full place-items-center">
//       {cards.map((card) => (
//         <Card key={card.id} cards={cards} setCards={setCards} {...card} />
//       ))}
//     </div>
//   );
// };

// const Card = ({ id, url, setCards, cards }) => {
//   const x = useMotionValue(0);
//   const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
//   const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

//   // Determine if the card is at the front
//   const isFront = id === cards[cards.length - 1].id;

//   // Apply a slight rotation for non-front cards
//   const rotate = useTransform(() => {
//     const offset = isFront ? 0 : id % 2 ? 6 : -6;
//     return `${rotateRaw.get() + offset}deg`;
//   });

//   // Handle card swipe action
//   const handleDragEnd = () => {
//     if (Math.abs(x.get()) > 100) {
//       // Remove the swiped card
//       setCards((prevCards) => prevCards.filter((card) => card.id !== id));
//     }
//   };

//   return (
//     <motion.img
//       src={url}
//       alt="Placeholder alt"
//       className="h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
//       style={{
//         gridRow: 1,
//         gridColumn: 1,
//         x,
//         opacity,
//         rotate,
//         transition: "0.125s transform",
//         boxShadow: isFront
//           ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
//           : undefined,
//       }}
//       animate={{
//         scale: isFront ? 1 : 0.98,
//       }}
//       drag={isFront ? "x" : false}
//       dragConstraints={{ left: 0, right: 0 }}
//       onDragEnd={handleDragEnd}
//     />
//   );
// };

// export default SwipeCards;

// const cardData = [
//   { id: 1, url: "/images/outdoor.jpg" },
//   { id: 2, url: "/images/outdoor1.jpg" },
//   { id: 3, url: "/images/restaurant.jpg" },
//   { id: 4, url: "/images/restaurant1.jpg" },
//   { id: 5, url: "/images/restaurant2.jpg" },
//   { id: 6, url: "/images/room.jpg" },
//   { id: 7, url: "/images/room1.jpg" },
//   { id: 8, url: "/images/seating.jpg" },
// ];
