import Image from "next/image";
import React from "react";
import SwipeCards from "./SwipeCads";
import {
  Wifi,
  ParkingMeterIcon as Parking,
  Mountain,
  Utensils,
  Flame,
  Tent,
  Users,
  Flower2,
  BedDouble,
  MapPin,
  Building2,
  Car,
  Sparkles,
  Clock,
  Shirt,
} from "lucide-react";
import { FaTemperatureHigh } from "react-icons/fa";

function Amenities() {
  const amenities = [
    { icon: Mountain, text: "1 km From Kufri Fun World" },
    { icon: Mountain, text: "180-degree Valley View" },
    { icon: Flame, text: "Bonfire" },
    { icon: Tent, text: "Trekking Facilities" },
    { icon: Users, text: "Kid Zone Area" },
    { icon: Flower2, text: "Garden" },
    { icon: Utensils, text: "Restaurant" },
    { icon: Parking, text: "Free Parking" },
    { icon: BedDouble, text: "Room Service" },
    { icon: Wifi, text: "Free Wi-Fi" },
    { icon: MapPin, text: "Great Location" },
    { icon: Car, text: "Travel Desk" },
    { icon: Wifi, text: "Complimentary Wi-Fi" },
    { icon: FaTemperatureHigh, text: "Room Heater (On Availability)" },
    { icon: Utensils, text: "Complimentary Breakfast" },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-secondary2 font-cormorant text-textcolor">
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-primary mb-6 md:mb-12">
        RESORT AMENITIES
      </h2>
      <p className="text-xl md:text-2xl  lg:text-3xl text-center lg:px-40 font-medium mb-10">
        Kufri snow view resort is nestled in the picturesque hills of Kufri,
        <br className="hidden md:block" />
        offering a serene retreat for those seeking a getaway in nature&apos;s
        embrace. With panoramic views of the snow-capped Himalayas,
        <br className="hidden md:block" />
        the resort provides a perfect blend of comfort and natural beauty.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="w-full md:w-1/2  py-10">
          <p className="text-xl lg:text-3xl text-left font-medium pr-0 md:pr-20">
            Guests can enjoy cozy accommodations, warm hospitality, and a range
            of activities such as trekking, skiing, and exploring the local
            culture.
          </p>
          <p className="text-sm md:text-lg lg:text-xl py-4 md:py-8 font-medium pr-0 md:pr-20">
            Whether you&apos;re sipping hot cocoa by the fireplace or taking a
            leisurely stroll through the surrounding pine forests, Kufri Snow
            View Resort promises an unforgettable experience in a winter
            wonderland.
          </p>
          <button className="border-2 border-textcolor bg-transparent text-sm md:text-lg p-2 px-6 hover:bg-white hover:border-white font-semibold">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <SwipeCards />
        </div>
      </div>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-orange-200"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <amenity.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm md:text-base lg:text-lg font-medium">
                  {amenity.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
