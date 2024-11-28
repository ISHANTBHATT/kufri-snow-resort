"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const activities = [
  {
    name: "Skiing",
    description:
      "Kufri is renowned for its snow-covered slopes during the winter months, making it an ideal destination for skiing enthusiasts. Whether you're a beginner or a seasoned skier, the slopes cater to all skill levels.",
    image: "/images/skiing.jpg",
  },
  {
    name: "Trekking",
    description:
      "The lush green forests and rolling hills offer numerous trekking trails for adventure lovers. Popular routes include treks to Mahasu Peak and Fagu, where you can soak in breathtaking views of the Himalayan ranges.",
    image: "/images/Trekking.jpg",
  },
  {
    name: "Horse Riding",
    description:
      "Experience the charm of Kufri on horseback as you traverse through scenic trails. This activity is particularly popular among families and offers a unique way to explore the natural beauty of the area.",
    image: "/images/Horse-Riding.jpg",
  },
  {
    name: "Tobogganing",
    description:
      "For a fun-filled adventure, try tobogganing down the snow-laden slopes. It's a thrilling experience suitable for all ages and promises a day of laughter and excitement.",
    image: "/images/Tobogganing.jpg",
  },
  {
    name: "Yak Rides",
    description:
      "Unique to this region, yak rides offer a chance to get up close with these majestic creatures while enjoying the serene landscapes of Kufri.",
    image: "/images/Yak-Rides.jpg",
  },
  {
    name: "Nature Walks",
    description:
      "Embark on a leisurely nature walk through the lush deodar and pine forests. It's a great way to unwind and connect with nature, spotting various flora and fauna along the way.",
    image: "/images/Nature-Walks.jpg",
  },
  {
    name: "Visit the Kufri Fun World",
    description:
      "This amusement park, located at a high altitude, offers various rides and activities against the stunning backdrop of the mountains, making it a great spot for families.",
    image: "/images/Experiences2.png",
  },
];

function ActivityItem({ activity, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const imageVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } mb-16 items-center`}
    >
      <motion.div
        className="md:w-1/2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src={activity.image}
          alt={activity.name}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-4 md:mt-0 md:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {activity.name}
        </h3>
        <p className="text-gray-600">{activity.description}</p>
      </motion.div>
    </div>
  );
}

export default function KufriActivities() {
  return (
    <div className="py-24  bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-textcolor mb-12 text-center font-cormorant">
          Activities in Kufri / Experiences
        </h2>
        {activities.map((activity, index) => (
          <ActivityItem key={activity.name} activity={activity} index={index} />
        ))}
      </div>
    </div>
  );
}
