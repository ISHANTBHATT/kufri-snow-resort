// import Image from "next/image";
// import React from "react";
// import SwipeCards from "./SwipeCads";
// import {
//   Wifi,
//   ParkingMeterIcon as Parking,
//   Mountain,
//   Utensils,
//   Flame,
//   Tent,
//   Users,
//   Flower2,
//   BedDouble,
//   MapPin,
//   Building2,
//   Car,
//   Sparkles,
//   Clock,
//   Shirt,
// } from "lucide-react";
// function Amenities() {
//   const amenities = [
//     { icon: Mountain, text: "1 km From Kufri Fun World" },
//     { icon: Mountain, text: "180-degree Valley View" },
//     { icon: Flame, text: "Bonfire" },
//     { icon: Tent, text: "Trekking Facilities" },
//     { icon: Users, text: "Kid zone Area" },
//     { icon: Flower2, text: "Garden" },
//     { icon: Utensils, text: "Restaurant" },
//     { icon: Parking, text: "Free Parking" },
//     { icon: BedDouble, text: "Room Service" },
//     { icon: Wifi, text: "Free Wi-Fi" },
//     { icon: Building2, text: "Business Center" },
//     { icon: MapPin, text: "Great Location" },
//     { icon: Car, text: "Travel Desk" },
//     { icon: Wifi, text: "Complimentary Wi-Fi" },
//     { icon: Wifi, text: "Free Wi-Fi in the Room" },
//     { icon: Utensils, text: "Complimentary breakfast" },
//     { icon: Shirt, text: "Laundry service" },
//     { icon: Clock, text: "24-hour room service" },
//   ];
//   return (
//     <div className="p-20 bg-secondary2 font-cormorant text-textcolor">
//       {/* <h2 className="text-[#F2994A] text-center text-xl font-semibold mb-6">
//         HOTEL AMENITIES
//       </h2> */}
//       <h2 className="text-center text-3xl font-bold tracking-tight text-primary mb-12">
//         HOTEL AMENITIES
//       </h2>
//       <p className="text-4xl text-center  font-medium">
//         {/* From the moment you step foot on our grounds, you'll enveloped in a
//       world of refined elegance and warm hospitality */}
//         From the moment you step foot on our grounds,
//         <br />
//         you'll be enveloped in a world of refined
//         <br />
//         elegance and warm hospitality.
//       </p>
//       <div className="flex justify-between mt-10 px-20">
//         <div className="w-full mt-20 py-10">
//           <p className="text-4xl text-left font-medium pr-40">
//             Taken from Javanese culture, the possess a meaning of peacefulness
//             and tranquility
//           </p>
//           <p className="text-xl py-8 font-medium pr-40">
//             Experience true opulence in our meticulousyndesigned accommodations.
//             Each room suite is tastefully furnished with a harmonious blend of
//             comfort, style, and sophistication
//           </p>
//           <button className="border-2  border-textcolor bg-transparent text-lg p-2 px-6 hover:bg-white hover:border-white font-semibold">
//             <p>Learn More</p>
//           </button>
//         </div>
//         <div className="w-full flex justify-center">
//           <SwipeCards />
//         </div>
//       </div>
//       <div className="px-4 py-12 md:py-16 lg:py-20">
//         <div className="mx-auto max-w-6xl">
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {amenities.map((amenity, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-orange-200"
//               >
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
//                   <amenity.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="text-sm font-medium">{amenity.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Amenities;

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
    { icon: Building2, text: "Business Center" },
    { icon: MapPin, text: "Great Location" },
    { icon: Car, text: "Travel Desk" },
    { icon: Wifi, text: "Complimentary Wi-Fi" },
    { icon: Wifi, text: "Free Wi-Fi in the Room" },
    { icon: Utensils, text: "Complimentary Breakfast" },
    { icon: Shirt, text: "Laundry Service" },
    { icon: Clock, text: "24-hour Room Service" },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-secondary2 font-cormorant text-textcolor">
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-primary mb-6 md:mb-12">
        HOTEL AMENITIES
      </h2>
      <p className="text-2xl md:text-3xl lg:text-4xl text-center font-medium mb-10">
        From the moment you step foot on our grounds,
        <br className="hidden md:block" />
        you'll be enveloped in a world of refined
        <br className="hidden md:block" />
        elegance and warm hospitality.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="w-full md:w-1/2 mt-10 md:mt-0 py-10">
          <p className="text-lg md:text-2xl lg:text-4xl text-left font-medium pr-0 md:pr-20">
            Taken from Javanese culture, they possess a meaning of peacefulness
            and tranquility.
          </p>
          <p className="text-sm md:text-lg lg:text-xl py-4 md:py-8 font-medium pr-0 md:pr-20">
            Experience true opulence in our meticulously designed
            accommodations. Each room suite is tastefully furnished with a
            harmonious blend of comfort, style, and sophistication.
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
