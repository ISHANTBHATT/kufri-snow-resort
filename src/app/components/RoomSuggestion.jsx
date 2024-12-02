"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Bed, Wifi, Coffee, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiWindow } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { Heater } from "lucide-react";
import { MountainSnow } from "lucide-react";
import { FaMountain } from "react-icons/fa6";
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
    image: "/images/room7.jpg",
    images: ["/images/room7.jpg", "/images/room8.jpg"],
    bedType: "1 King bed",
    description:
      "A cozy room with stunning mountain views. Wake up to peaceful mountain scenery",
    rates: [
      {
        name: "Suite Stays",
        price: "2200 (CP) 2pax",
        amenities: [
          "Room Heater (as per availability)",
          "Daily breakfast",
          "Internet access",
          "Extra bed: 700rs",
        ],
      },
    ],
    notinclued: [
      {
        title: "Whats Not Included",
        icon: <GiWindow className="h-6 w-6 text-muted-foreground" />,
        amenities: ["No windows,", "No Balcony"],
      },
    ],
  },
  {
    title: "Standard Room",
    image: "/images/room.jpg",
    images: ["/images/room.jpg", "/images/room1.jpg"],
    bedType: "1 King bed",
    description:
      "A cozy room with stunning mountain views. Wake up to peaceful mountain scenery",
    rates: [
      {
        name: "Suite Stays",
        price: "2599 (CP) 2pax",
        amenities: [
          "Room Heater (as per availability)",
          "Daily breakfast",
          "Internet access",
          "Extra bed: 700rs",
          "Valley Facing Window View",
        ],
      },
    ],
    notinclued: [
      {
        title: "Whats Not Included",
        icon: <MdBalcony className="h-6 w-6 text-muted-foreground" />,
        amenities: ["No Balcony"],
      },
    ],
  },
  {
    title: "Superior Room",
    image: "/images/room5.jpg",
    images: ["/images/room4.jpg", "/images/room5.jpg"],
    bedType: "1 King bed",
    description:
      "With specially crafted furnishings, a marble ensuite bathroom, summit views and twin beds.",
    rates: [
      {
        name: "Suite Stays",
        price: "2999 (CP) 2pax",
        amenities: [
          "Room Heater (as per availability)",
          "Daily breakfast",
          "Internet access",
          "Extra bed: 700rs",
          "With Balcony",
        ],
      },
    ],
    notinclued: [
      {
        title: "",
        amenities: [""],
      },
    ],
  },
  {
    title: "Family Suite",
    image: "/images/room9.jpg",
    images: ["/images/room2.jpg", "/images/room3.jpg", "/images/room9.jpg"],
    bedType: "2 King bed",
    description:
      "Features an octagonal glass shower and a private sun terrace. Enjoy the beauty of mountains from your window.",
    rates: [
      {
        name: "Suite Stays",
        price: "6999 (CP) 4 pax",
        amenities: [
          "Room Heater (as per availability)",
          "Daily breakfast",
          "Internet access",
          "Extra bed: 700rs",
          "Valley View",
        ],
      },
    ],
    notinclued: [
      {
        title: "Whats Not Included",
        icon: <MdBalcony className="h-6 w-6 text-muted-foreground" />,
        amenities: ["No Balcony"],
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
                </div>
                {/* <p className="text-base">{room.description}</p> */}
              </CardHeader>
              <CardContent className="space-y-6">
                {room.rates.map((rate, rateIndex) => (
                  <div key={rateIndex} className="">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">{rate.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold">
                          {/* ₹{rate.price.toLocaleString()} */}₹{rate.price}
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
                          ) : amenity.includes("bed") ? (
                            <Bed className="h-4 w-4 text-muted-foreground" />
                          ) : amenity.includes("Heater") ? (
                            <Heater className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <FaMountain className="h-4 w-4 text-muted-foreground" />
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
              <CardContent className="space-y-6">
                {room.notinclued.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-t pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <ul className="gap-2 mb-4 flex items-center">
                      {item.icon}
                      {item.amenities.map((amenity, amenityIndex) => (
                        <li
                          key={amenityIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          {amenity}
                        </li>
                      ))}
                    </ul>
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
