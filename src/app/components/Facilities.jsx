import Image from "next/image";
import { FaUtensils, FaBed, FaEllipsisH } from "react-icons/fa";
import { MdHiking } from "react-icons/md";
export default function Facilities() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-[#F2994A] text-center text-xl font-semibold mb-6">
          KUFRI SPECIALITY
        </h2>
        <h3 className="text-[#2D5470] text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-6xl mx-auto leading-tight font-cormorant">
          During winter, the area transforms into a snowy wonderland, attracting
          tourists eager to indulge in skiing and other winter sports.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MdHiking,
              title: "Outdoor Activities",
              description:
                "Kufri offers breathtaking landscapes and thrilling experiences.",
            },
            {
              icon: FaUtensils,
              title: "Fine Dining",
              description:
                "Our restaurant offer stunning views of snow-capped mountains.",
            },
            {
              icon: FaBed,
              title: "Comfortable Rooms",
              description: "Enjoy cozy accommodations and warm hospitality.",
            },
            {
              icon: FaEllipsisH,
              title: "And Many More...",
              description:
                "No matter the season, Kufri promises a memorable experience for all who visit.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 py-20 rounded-lg bg-white hover:bg-textcolor hover:text-white text-textcolor text-center"
            >
              <div className="flex justify-center">
                <item.icon className="w-16 h-16 mb-4 " />
              </div>

              <h4 className="text-2xl font-semibold mb-2 font-cormorant">
                {item.title}
              </h4>
              <p className="font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
