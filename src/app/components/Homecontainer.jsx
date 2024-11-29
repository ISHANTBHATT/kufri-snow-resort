import Image from "next/image";
import React from "react";
import ImageHover from "./ImageHover";
import Link from "next/link";

function Homecontainer() {
  const data = [
    {
      id: 1,
      images: [
        "/images/Experiences.png",
        "/images/Experiences2.png",
        "/images/Experiences3.png",
        "/images/Experiences4.jpg",
        "/images/Experiences5.jpg",
      ],
      title: "Experiences (Outdoor activities)",
      desc: "Lorem ipsum dolor sit amet consectetur. Diam mattis.",
      href: "/experiences",
    },
    {
      id: 2,
      images: ["/images/seating.jpg", "/images/restaurant1.jpg"],
      title: "Meetings & Events",
      desc: "Be it Meetings, Reunions, Weddings, Conferences or any other Events, Kufri resort is the ideal choice.",
      href: "/about",
    },
    {
      id: 3,
      images: [
        "/images/restaurant.jpg",
        "/images/restaurant1.jpg",
        "/images/restaurant2.jpg",
      ],
      title: "Fine Lunch Food",
      desc: "Taste authentic local cuisine at Kufri's restaurant, Flavour.",
      href: "/gallery",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-secondary font-cormorant text-textcolor">
      <p className="text-xl md:text-2xl  lg:text-3xl text-center lg:px-40  font-medium">
        Kufri snow view resort is nestled in the picturesque hills of Kufri,
        <br className="hidden md:block" />
        offering a serene retreat for those seeking a getaway in nature&apos;s
        embrace. With panoramic views of the snow-capped Himalayas,
        <br className="hidden md:block" />
        the resort provides a perfect blend of comfort and natural beauty.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 md:mt-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/outside.jpg"
            className="h-auto object-cover w-full md:w-[500px] rounded-lg"
            alt="Kufi Resort"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 py-4 md:py-20">
          <p className="text-xl lg:text-3xl text-left font-medium pr-0 xl:pr-40">
            Guests can enjoy cozy accommodations, warm hospitality, and a range
            of activities such as trekking, skiing, and exploring the local
            culture.
          </p>
          <p className="text-lg lg:text-xl py-4 md:py-8 font-medium pr-0 xl:pr-40">
            Whether you&apos;re sipping hot cocoa by the fireplace or taking a
            leisurely stroll through the surrounding pine forests, Kufri Snow
            View Resort promises an unforgettable experience in a winter
            wonderland.
          </p>
          <Link href="/contact">
            <button className="border-2 border-textcolor bg-transparent text-lg p-2 px-6 hover:bg-white hover:border-white font-semibold">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <section className="text-center mt-12">
        <h2 className="text-xl md:text-3xl mb-4 md:mb-8 font-medium">
          We offer a cozy and comfortable retreat for guests seeking a serene
          escape in the mountains.
          <br className="hidden md:block" />
          Each room is thoughtfully designed with warm interiors and large
          windows that frame breathtaking views of the snow-capped peaks
        </h2>
      </section>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center lg:justify-between w-full mt-8">
        {data.map((e) => (
          <ImageHover
            key={e.id}
            images={e.images}
            title={e.title}
            desc={e.desc}
            href={e.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Homecontainer;
