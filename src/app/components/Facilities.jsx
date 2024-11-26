import Image from "next/image";
// import { FaSwimmingPool } from "react-icons/fa";
// import { GiDesk } from "react-icons/gi";
// import { FaHome } from "react-icons/fa";
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
                "Lorem ipsum dolor sit amet consectetur. Eget nibh nibh ut.",
            },
            {
              icon: FaUtensils,
              title: "Fine Dining",
              description: "Lorem ipsum dolor sit amet consectetur. Intege",
            },
            {
              icon: FaBed,
              title: "Comfortable Rooms",
              description:
                "Lorem ipsum dolor sit amet consectetur. Diam mattis.",
            },
            {
              icon: FaEllipsisH,
              title: "And Many More...",
              description: "Lorem ipsum dolor sit amet consectetur. Et augue.",
            },
          ].map((item, index) => (
            <div
              key={index}
              //   className={`p-6 rounded-lg ${
              //     index === 0 ? "bg-[#2D5470] text-white" : "bg-white"
              //   }`}
              className="p-6 py-20 rounded-lg bg-white hover:bg-textcolor hover:text-white text-textcolor text-center"
            >
              {/* <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="mb-4"
              /> */}
              <div className="flex justify-center">
                <item.icon className="w-16 h-16 mb-4 " />
              </div>

              <h4 className="text-2xl font-semibold mb-2 font-cormorant">
                {item.title}
              </h4>
              <p
                //    className={index === 0 ? "text-gray-300" : "text-gray-600"}
                className="font-medium"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
