"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaChild } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [months, setMonths] = useState(2);

  useEffect(() => {
    const updateMonths = () => {
      setMonths(window.innerWidth < 768 ? 1 : 2);
    };
    updateMonths();
    window.addEventListener("resize", updateMonths);
    return () => {
      window.removeEventListener("resize", updateMonths);
    };
  }, []);

  const formatDateRange = (range) => {
    if (!range[0].startDate || !range[0].endDate) return "Select dates";
    return `${format(range[0].startDate, "MMM dd, yyyy")} — ${format(
      range[0].endDate,
      "MMM dd, yyyy"
    )}`;
  };

  const nightCount =
    dateRange[0].startDate && dateRange[0].endDate
      ? Math.ceil(
          (dateRange[0].endDate.getTime() - dateRange[0].startDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const handleSearch = () => {
    const newBookingDetail = {
      StartDate: dateRange[0].startDate,
      EndDate: dateRange[0].endDate,
      NoofAdult: adults,
      NoofChildren: children,
      NoofDay: nightCount + 1,
      NoofNight: nightCount,
    };
    localStorage.setItem(
      "Hotelbookingdetail",
      JSON.stringify(newBookingDetail)
    );
    router.push("/booking");
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">
      <Image
        src="/images/outside2.jpg"
        alt="Luxury resort"
        fill
        className="object-cover"
        priority
      />
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-bold px-4 lg:px-40 text-center mb-8">
          Unwind in Luxury: Discover Our Exquisite Hotel and Resort
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl bg-white border border-gray-300 rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4 z-10">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-80 justify-start text-left font-normal"
              >
                <CiCalendar className="mr-2 h-4 w-4" />
                <span>{formatDateRange(dateRange)}</span>
                {nightCount > 0 && (
                  <span className="ml-auto">{nightCount} Nights</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                months={months}
                direction={months === 1 ? "vertical" : "horizontal"}
                className="border-0"
                minDate={new Date()}
              />
            </PopoverContent>
          </Popover>
          <div className="flex space-x-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="adults" className="text-center">
                Adults
              </Label>
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <Input
                  type="number"
                  id="adults"
                  min={1}
                  max={10}
                  value={adults}
                  onChange={(e) =>
                    setAdults(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="children" className="text-center">
                Children
              </Label>
              <div className="flex items-center">
                <FaChild className="mr-2" />
                <Input
                  type="number"
                  id="children"
                  min={0}
                  max={10}
                  value={children}
                  onChange={(e) =>
                    setChildren(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="w-16"
                />
              </div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleSearch}
            className="w-full md:w-auto bg-black text-white hover:bg-neutral-800"
          >
            <IoIosSearch className="mr-2 h-4 w-4" />
            View Availability
          </Button>
        </div>
      </div>
      <div className="w-full h-full absolute -bottom-20">
        <img src="/images/snow.png" className="w-full h-full" />
      </div>
    </div>
  );
}
