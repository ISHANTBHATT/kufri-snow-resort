// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Bed, Wifi, Coffee, Images } from "lucide-react";

// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// export default function RoomSuggestion() {
//   const rooms = [
//     {
//       title: "Deluxe Suite",
//       image: "/images/room.jpg",
//       images: ["/images/room.jpg","/images/room1.jpg"],
//       bedType: "1 King bed",
//       area: "75 sq m",
//       description:
//         "The perfect suite for romance; with Taj views and a shower for two.",
//       rates: [
//         {
//           name: "Suite Stays",
//           price: 122000,
//           amenities: [
//             "Accommodation in a suite",
//             "Daily breakfast",
//             "Internet access",
//           ],
//         },
//         {
//           name: "Best Available Rate (Suites)",
//           price: 175000,
//           amenities: ["Accommodation", "Daily breakfast", "Internet access"],
//         },
//       ],
//     },
//     {
//       title: "Premier Room",
//       image: "/images/room2.jpg",
//       images: ["/images/room2.jpg","/images/room3.jpg"],
//       bedType: "Twin Bed",
//       area: "42 sq m",
//       description:
//         "With specially crafted furnishings, a marble ensuite bathroom, Taj views and twin beds.",
//       rates: [
//         {
//           name: "Room Only Rate",
//           price: 85000,
//           amenities: ["Accommodation", "Internet access"],
//         },
//         {
//           name: "Room and Breakfast Rate",
//           price: 87000,
//           amenities: ["Accommodation", "Daily breakfast", "Internet access"],
//         },
//         {
//           name: "Taste of Luxury",
//           price: 90000,
//           amenities: [
//             "Accommodation",
//             "Daily breakfast",
//             "One major meal for two (lunch or dinner)",
//           ],
//         },
//       ],
//     },
//     {
//       title: "Luxury Suite",
//       image: "/images/room4.jpg",
//       images: ["/images/room4.jpg","/images/room5.jpg"],
//       bedType: "1 King bed",
//       area: "185 sq m",
//       description:
//         "Features an octagonal glass shower and a private sun terrace. Both with Taj views.",
//       rates: [
//         {
//           name: "Suite Stays",
//           price: 257000,
//           amenities: [
//             "Accommodation in a suite",
//             "Daily breakfast",
//             "Internet access",
//           ],
//         },
//         {
//           name: "Best Available Rate (Suites)",
//           price: 350000,
//           amenities: ["Accommodation", "Daily breakfast", "Internet access"],
//         },
//       ],
//     },
//   ];
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       {rooms.map((room, index) => (
//         <Card key={index} className="overflow-hidden  bg-secondary2">
//           <div className="grid md:grid-cols-[300px,1fr] gap-6">
//             <div className="relative h-[300px] md:m-4 w-full">
//               <Image
//                 src={room.image}
//                 alt={room.title}
//                 className="object-fit"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 300px"
//               />
//               <Images
//                 onClick={() => setIsOpen(true)}
//                 className="w-10 h-10 absolute bottom-2 right-2 text-white cursor-pointer"
//               />
//             </div>
//             <div className="p-6">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-serif">
//                   {room.title}
//                 </CardTitle>
//                 <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                   <div className="flex items-center gap-1">
//                     <Bed className="h-4 w-4" />
//                     {room.bedType}
//                   </div>
//                   <div>{room.area}</div>
//                 </div>
//                 <p className="text-base">{room.description}</p>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {room.rates.map((rate, rateIndex) => (
//                   <div
//                     key={rateIndex}
//                     className="border-t pt-6 first:border-t-0 first:pt-0"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <h3 className="font-medium">{rate.name}</h3>
//                       <div className="text-right">
//                         <div className="text-2xl font-bold">
//                           ₹{rate.price.toLocaleString()}
//                         </div>
//                         <div className="text-sm text-muted-foreground">
//                           Per Night
//                         </div>
//                         <div className="text-xs text-muted-foreground">
//                           Excluding taxes and fees
//                         </div>
//                       </div>
//                     </div>
//                     <ul className="space-y-2 mb-4">
//                       {rate.amenities.map((amenity, amenityIndex) => (
//                         <li
//                           key={amenityIndex}
//                           className="flex items-center gap-2 text-sm"
//                         >
//                           {amenity.includes("Internet") ? (
//                             <Wifi className="h-4 w-4 text-muted-foreground" />
//                           ) : amenity.includes("breakfast") ||
//                             amenity.includes("meal") ? (
//                             <Coffee className="h-4 w-4 text-muted-foreground" />
//                           ) : (
//                             <Bed className="h-4 w-4 text-muted-foreground" />
//                           )}
//                           {amenity}
//                         </li>
//                       ))}
//                     </ul>
//                     <div className="flex justify-between items-center">
//                       <Button variant="outline">Book Now</Button>
//                     </div>
//                   </div>
//                 ))}
//               </CardContent>
//             </div>
//           </div>
//         </Card>
//       ))}
//       <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   );
// }

// const SpringModal = ({ isOpen, setIsOpen }) => {
//   const [api, setApi] = React.useState<CarouselApi>()
//   const [current, setCurrent] = React.useState(0)
//   const [count, setCount] = React.useState(0)

//   React.useEffect(() => {
//     if (!api) {
//       return
//     }

//     setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap() + 1)

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1)
//     })
//   }, [api])

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsOpen(false)}
//           className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
//         >
//           <div className="mx-auto max-w-xs">
//       <Carousel setApi={setApi} className="w-full max-w-xs">
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//       <div className="py-2 text-center text-sm text-muted-foreground">
//         Slide {current} of {count}
//       </div>
//     </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Bed, Wifi, Coffee, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const rooms = [
  {
    title: "Deluxe Suite",
    image: "/images/room.jpg",
    images: ["/images/room.jpg", "/images/room1.jpg"],
    bedType: "1 King bed",
    area: "75 sq m",
    description:
      "A cozy room with stunning mountain views. Wake up to peaceful mountain scenery",
    rates: [
      {
        name: "Suite Stays",
        price: 22000,
        amenities: [
          "Accommodation in a suite",
          "Daily breakfast",
          "Internet access",
        ],
      },
      {
        name: "Best Available Rate (Suites)",
        price: 75000,
        amenities: ["Accommodation", "Daily breakfast", "Internet access"],
      },
    ],
  },
  {
    title: "Premier Room",
    image: "/images/room2.jpg",
    images: ["/images/room2.jpg", "/images/room3.jpg"],
    bedType: "Twin Bed",
    area: "42 sq m",
    description:
      "With specially crafted furnishings, a marble ensuite bathroom, summit views and twin beds.",
    rates: [
      {
        name: "Room Only Rate",
        price: 85000,
        amenities: ["Accommodation", "Internet access"],
      },
      {
        name: "Room and Breakfast Rate",
        price: 87000,
        amenities: ["Accommodation", "Daily breakfast", "Internet access"],
      },
      {
        name: "Taste of Luxury",
        price: 90000,
        amenities: [
          "Accommodation",
          "Daily breakfast",
          "One major meal for two (lunch or dinner)",
        ],
      },
    ],
  },
  {
    title: "Luxury Suite",
    image: "/images/room4.jpg",
    images: ["/images/room4.jpg", "/images/room5.jpg"],
    bedType: "1 King bed",
    area: "185 sq m",
    description:
      "Features an octagonal glass shower and a private sun terrace. Enjoy the beauty of mountains from your window.",
    rates: [
      {
        name: "Suite Stays",
        price: 57000,
        amenities: [
          "Accommodation in a suite",
          "Daily breakfast",
          "Internet access",
        ],
      },
      {
        name: "Best Available Rate (Suites)",
        price: 30000,
        amenities: ["Accommodation", "Daily breakfast", "Internet access"],
      },
    ],
  },
];

export default function RoomSuggestion({ handlebooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoomImages, setSelectedRoomImages] = useState([]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      {rooms.map((room, index) => (
        <Card key={index} className="overflow-hidden bg-secondary2">
          <div className="grid md:grid-cols-[300px,1fr] gap-6">
            <div className="relative h-[300px] md:m-4 w-full">
              <Image
                src={room.image}
                alt={room.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <Images
                onClick={() => {
                  setSelectedRoomImages(room.images);
                  setIsOpen(true);
                }}
                className="w-10 h-10 absolute bottom-2 right-2 text-white cursor-pointer"
              />
            </div>
            <div className="p-6 text-textcolor">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">
                  {room.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {room.bedType}
                  </div>
                  <div>{room.area}</div>
                </div>
                <p className="text-base">{room.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {room.rates.map((rate, rateIndex) => (
                  <div
                    key={rateIndex}
                    className="border-t pt-6 first:border-t-0 first:pt-0"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">{rate.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold">
                          ₹{rate.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Per Night
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Excluding taxes and fees
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {rate.amenities.map((amenity, amenityIndex) => (
                        <li
                          key={amenityIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          {amenity.includes("Internet") ? (
                            <Wifi className="h-4 w-4 text-muted-foreground" />
                          ) : amenity.includes("breakfast") ||
                            amenity.includes("meal") ? (
                            <Coffee className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Bed className="h-4 w-4 text-muted-foreground" />
                          )}
                          {amenity}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <Link href={"/checkout/" + room.title}>
                        <Button
                          onClick={handlebooking}
                          className="bg-[#18181b]"
                        >
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={selectedRoomImages}
      />
    </div>
  );
}

const SpringModal = ({ isOpen, setIsOpen, images }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer "
          style={{ margin: "0px" }}
        >
          <div
            className="lg:mx-auto max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel setApi={setApi} className="w-full max-w-4x">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className=" border-0">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                          src={image}
                          alt={`Room image ${index + 1}`}
                          width={1000}
                          height={1000}
                          className=" w-full h-full rounded-xl"
                        />
                        {/* <img src={image}  className=" w-full h-full"/> */}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-white">
              Image {current} of {count}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
