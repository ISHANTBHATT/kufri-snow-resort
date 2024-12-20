"use client";

import Image from "next/image";
import { useState } from "react";

export default function Room() {
  const rooms = [
    {
      image: "/images/room.jpg",
      title: "Premier Room",
      price: "INR 1,999",
    },
    {
      image: "/images/room2.jpg",
      title: "Premier Twin Room",
      price: "INR 2,999",
    },
    {
      image: "/images/room5.jpg",
      title: "Premier Deluxe Room",
      price: "INR 3,999",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-secondary2">
      <div className="container mx-auto px-4">
        <h2 className="text-[#F2994A] text-center text-xl font-semibold mb-6">
          ROOM & SUITES
        </h2>
        <h3 className="text-[#2D5470] text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-12 max-w-4xl mx-auto leading-tight  font-cormorant">
          Whether you&apos;re relaxing by the fireplace or sipping hot cocoa on
          the balcony, the ambiance invites you to unwind and immerse yourself
          in the natural beauty surrounding the resort.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-10">
          {rooms.map((room, index) => (
            <div key={index}>
              <div
                className="bg-white overflow-hidden shadow-lg relative group rounded-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={room.image}
                  alt={room.title}
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg"
                  // className={`w-full h-72 object-cover transition-transform duration-500 ease-in-out ${
                  //   hoveredIndex ? "scale-110" : "scale-100"
                  // }`}
                />

                <div
                  className={`absolute inset-0 bg-textcolor bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">Start From</p>
                    <p className="text-3xl font-bold mt-2">{room.price}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-3xl font-semibold mb-2 font-cormorant text-textcolor text-center">
                  {room.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
