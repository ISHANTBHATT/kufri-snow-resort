// "use client";
// import React, { useState } from "react";
// import { CiCalendar } from "react-icons/ci";
// import { FaUser, FaChild } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DateRange } from "react-date-range";
// import { addDays, format } from "date-fns";

// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import RoomSuggestion from "../components/RoomSuggestion";

// function page() {
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);

//   const formatDateRange = (range) => {
//     if (!range[0].startDate || !range[0].endDate) return "Select dates";
//     return `${format(range[0].startDate, "MMM dd, yyyy")} — ${format(
//       range[0].endDate,
//       "MMM dd, yyyy"
//     )}`;
//   };

//   const nightCount =
//     dateRange[0].startDate && dateRange[0].endDate
//       ? Math.ceil(
//           (dateRange[0].endDate.getTime() - dateRange[0].startDate.getTime()) /
//             (1000 * 60 * 60 * 24)
//         )
//       : 0;
//   return (
//     <div className="flex justify-center py-20 px-4 md:px-10 lg:p-20  bg-secondary ">
//       <div className="w-full">
//         <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full bg-secondary2 border border-gray-300 rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4 z-10">
//           <Popover>
//             <PopoverTrigger asChild className="bg-secondary">
//               <Button
//                 variant="outline"
//                 className="w-full md:w-80 justify-start text-left font-normal"
//               >
//                 <CiCalendar className="mr-2 h-4 w-4" />
//                 <span>{formatDateRange(dateRange)}</span>
//                 {nightCount > 0 && (
//                   <span className="ml-auto">{nightCount} Nights</span>
//                 )}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <DateRange
//                 editableDateInputs={true}
//                 onChange={(item) => setDateRange([item.selection])}
//                 moveRangeOnFirstSelection={false}
//                 ranges={dateRange}
//                 months={window.innerWidth < 768 ? 1 : 2}
//                 // months={2}
//                 // direction="horizontal"
//                 direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
//                 className="border-0"
//                 minDate={new Date()}
//               />
//             </PopoverContent>
//           </Popover>
//           <div className="flex space-x-4">
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="adults" className="text-center">
//                 Adults
//               </Label>
//               <div className="flex items-center">
//                 <FaUser className="mr-2" />
//                 <Input
//                   type="number"
//                   id="adults"
//                   min={1}
//                   max={10}
//                   value={adults}
//                   onChange={(e) =>
//                     setAdults(Math.max(1, parseInt(e.target.value) || 1))
//                   }
//                   className="w-16"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <Label htmlFor="children" className="text-center">
//                 Children
//               </Label>
//               <div className="flex items-center">
//                 <FaChild className="mr-2" />
//                 <Input
//                   type="number"
//                   id="children"
//                   min={0}
//                   max={10}
//                   value={children}
//                   onChange={(e) =>
//                     setChildren(Math.max(0, parseInt(e.target.value) || 0))
//                   }
//                   className="w-16"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <p className=" font-cormorant text-textcolor text-4xl font-semibold mt-4">
//           Select a Room
//         </p>
//         <RoomSuggestion />
//       </div>
//     </div>
//   );
// }

// export default page;

"use client";
import React, { useState, useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
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
import RoomSuggestion from "../components/RoomSuggestion";

function Page() {
  const [bookingData, setBookingData] = useState({});
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [monthsToShow, setMonthsToShow] = useState(2);
  const [direction, setDirection] = useState("horizontal");

  // Update months and direction based on window width
  useEffect(() => {
    const savedFormData = localStorage.getItem("Hotelbookingdetail");
    if (savedFormData) {
      setBookingData(JSON.parse(savedFormData));
      const parsedData = JSON.parse(savedFormData);

      setDateRange([
        {
          startDate: parsedData.StartDate
            ? new Date(parsedData.StartDate)
            : new Date(),
          endDate: parsedData.EndDate
            ? new Date(parsedData.EndDate)
            : addDays(new Date(), 7),
          key: "selection",
        },
      ]);

      setAdults(Number(parsedData.NoofAdult) || 2);
      setChildren(Number(parsedData.NoofChildren) || 0);
    }

    const updateLayout = () => {
      if (typeof window !== "undefined") {
        setMonthsToShow(window.innerWidth < 768 ? 1 : 2);
        setDirection(window.innerWidth < 768 ? "vertical" : "horizontal");
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
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

  const handlebooking = () => {
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

    // router.push("/booking");
  };
  return (
    <div className="flex justify-center py-20 px-4 md:px-10 lg:p-20  bg-secondary ">
      <div className="w-full">
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between w-full bg-secondary2 border border-gray-300 rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-4 z-10">
          <Popover>
            <PopoverTrigger asChild className="bg-secondary">
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
                months={monthsToShow}
                direction={direction}
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
        </div>
        <p className=" font-cormorant text-textcolor text-4xl font-semibold mt-4">
          Select a Room
        </p>
        <RoomSuggestion handlebooking={handlebooking} />
      </div>
    </div>
  );
}

export default Page;
