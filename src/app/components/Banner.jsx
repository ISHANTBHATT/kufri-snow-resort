// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import { CiCalendar } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { Button } from "../../components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "../../components/ui/popover";
// import { Calendar as CalendarComponent } from "../../components/ui/calendar";
// import { addDays, format, differenceInDays } from "date-fns";
// function Banner() {
//   const [dateRange, setDateRange] = useState({
//     from: new Date(2024, 3, 21), // Note: Month is 0-indexed
//     to: new Date(2024, 3, 25),
//   });

//   const formatDateRange = (from, to) => {
//     return `${format(from, "dd.M.yyyy")} — ${format(to, "dd.M.yyyy")}`;
//   };

//   const nightCount = differenceInDays(dateRange.to, dateRange.from);
//   return (
//     <div className="min-h-screen relative overflow-hidden font-cormorant">
//       {/* Background Image */}
//       <Image
//         src="/images/bg3.jpeg"
//         alt="kufi resort"
//         fill
//         className="object-fill"
//         priority
//       />
//       {/* <img src="/images/bg3.jpeg" className="" /> */}
//       <div className="relative min-h-screen flex flex-col items-center justify-center">
//         <p className="text-6xl text-white font-extrabold px-40 text-center">
//           Unwind in Luxury: Discover Our Exquisite Hotel and Resort
//         </p>
//         <div className="mt-20 flex items-center justify-between w-full max-w-xl bg-white border border-gray-300 rounded-md p-2 ">
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="w-full justify-start text-left font-normal text-lg"
//               >
//                 <CiCalendar className="mr-2 h-4 w-4" />
//                 <span>{formatDateRange(dateRange.from, dateRange.to)}</span>
//                 <span className="ml-auto">{nightCount} Nights</span>
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <CalendarComponent
//                 mode="range"
//                 defaultMonth={dateRange.from}
//                 selected={dateRange}
//                 onSelect={setDateRange}
//                 numberOfMonths={2}
//               />
//             </PopoverContent>
//           </Popover>
//           <Button
//             size="icon"
//             // variant="ghost"
//             className="w-52 bg-black text-white hover:bg-neutral-800"
//           >
//             <IoIosSearch className="h-4 w-4" />
//             <span>View Availability</span>
//             <span className="sr-only">Search</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaUser, FaChild } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import { addDays, format, differenceInDays } from "date-fns";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function Component() {
  const [dateRange, setDateRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const formatDateRange = (from, to) => {
    if (!from || !to) return "Select dates";
    return `${format(from, "MMM dd, yyyy")} — ${format(to, "MMM dd, yyyy")}`;
  };

  const nightCount =
    dateRange.from && dateRange.to
      ? differenceInDays(dateRange.to, dateRange.from)
      : 0;

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
                <span>{formatDateRange(dateRange.from, dateRange.to)}</span>
                {nightCount > 0 && (
                  <span className="ml-auto">{nightCount} Nights</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                disabled={(date) => date < new Date()}
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
                  onChange={(e) => setAdults(parseInt(e.target.value))}
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
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="w-16"
                />
              </div>
            </div>
          </div>
          <Button
            size="lg"
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
