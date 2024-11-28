import { ArrowRightLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CabBooking() {
  return (
    <div className="h-full bg-secondary p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-full">
        <h1 className="mb-8 text-center text-3xl font-semibold text-textcolor md:text-4xl font-cormorant">
          Cab Booking
        </h1>
        <div className="overflow-hidden  ">
          <div className="flex flex-col gap-20 md:flex-row">
            {/* Booking Section */}
            <div className="flex flex-col p-6 md:w-1/2">
              <h2 className="mb-6 text-xl font-medium text-textcolor">
                Available Routes
              </h2>

              <div className="flex-grow space-y-4">
                {[
                  { from: "Delhi", to: "Kufri" },
                  { from: "Chandigarh", to: "Kufri" },
                  { from: "Shimla", to: "Kufri" },
                  { from: "Shimla", to: "Manali" },
                  { from: "Local", to: "Sightseeing" },
                ].map((route, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-slate-50 p-4 transition-all hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span className="text-slate-700">{route.from}</span>
                    </div>
                    <ArrowRightLeft className="h-5 w-5 text-slate-400" />
                    <div className="flex items-center gap-3">
                      <span className="text-slate-700">{route.to}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="mt-6 w-full bg-neutral-900 py-6 text-lg font-medium hover:bg-neutral-700">
                  Contact
                </Button>
              </Link>
            </div>
            {/* Image Section */}
            <div className="relative md:w-1/2">
              <img
                src="/images/cab.jpeg"
                alt="Scenic view of a mountain resort"
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white  rounded-lg">
                <h2 className="text-xl font-medium">
                  Comfortable and Reliable Cabs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
