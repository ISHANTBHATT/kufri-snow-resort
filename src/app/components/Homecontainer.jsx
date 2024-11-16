// import Image from "next/image";
// import React from "react";
// import ImageHover from "./ImageHover";

// function Homecontainer() {
//   const data = [
//     {
//       id: 1,
//       images: [
//         "/images/Experiences.png",
//         "/images/Experiences2.png",
//         "/images/Experiences3.png",
//         "/images/Experiences4.jpg",
//         "/images/Experiences5.jpg",
//       ],
//       title: "Experiences (Outdoor activities)",
//       desc: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Diam mattis.",
//     },
//     {
//       id: 2,
//       images: ["/images/seating.jpg", "/images/restaurant1.jpg"],
//       title: "Meetings & Events",
//       desc: "Be it Meetings, Reunions, Weddings, Conferences or any other Events,Kufri resort is the ideal choice.",
//     },
//     {
//       id: 3,
//       images: [
//         "/images/restaurant.jpg",
//         "/images/restaurant1.jpg",
//         "/images/restaurant2.jpg",
//       ],
//       title: "Fine Lunch Food",
//       desc: "Taste authentic local cuisine at Kufri's restaurant, Flavour. ",
//     },
//   ];
//   return (
//     <div className="p-20 bg-secondary font-cormorant text-textcolor">
//       <p className="text-4xl text-center px-40 font-medium">
//         {/* From the moment you step foot on our grounds, you'll enveloped in a
//         world of refined elegance and warm hospitality */}
//         From the moment you step foot on our grounds,
//         <br />
//         you'll be enveloped in a world of refined
//         <br />
//         elegance and warm hospitality.
//       </p>
//       <div className="flex justify-between mt-20">
//         <div className="w-full flex justify-center">
//           {/* <Image
//             src="/images/outdoor1.jpg"
//             alt="kufi resort"
//             // width={500}
//             // height={500}
//             width={500}
//             height={500}
//             className=" h-auto object-cover"
//             // style={{ objectFit: "fill" }}
//             // className="object-cover"
//           /> */}
//           <img
//             src="/images/outside.jpg"
//             className="h-auto object-cover w-[500px]"
//           />
//         </div>
//         <div className="w-full mt-20 py-20">
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
//       </div>
//       <section className="text-center mt-12">
//         <h2 className="text-4xl mb-8 font-medium">
//           Designed by the most creative minds in profession, built by
//           <br />
//           the finest people in the industry, and we have finally begun
//           <br />
//           our journey to serve you.
//         </h2>
//       </section>
//       <div className="flex flex-wrap gap-10 w-full justify-between">
//         {data.map((e) => (
//           <ImageHover
//             key={e.id}
//             images={e.images}
//             title={e.title}
//             desc={e.desc}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import ImageHover from "./ImageHover";

function Homecontainer() {
  const data = [
    {
      id: 1,
      images: [
        "/images/Experiences.png",
        "/images/Experiences2.png",
        "/images/Experiences3.png",
        "/images/Experiences4.jpg",
        "/images/Experiences5.jpg",
      ],
      title: "Experiences (Outdoor activities)",
      desc: "Lorem ipsum dolor sit amet consectetur. Diam mattis.",
    },
    {
      id: 2,
      images: ["/images/seating.jpg", "/images/restaurant1.jpg"],
      title: "Meetings & Events",
      desc: "Be it Meetings, Reunions, Weddings, Conferences or any other Events, Kufri resort is the ideal choice.",
    },
    {
      id: 3,
      images: [
        "/images/restaurant.jpg",
        "/images/restaurant1.jpg",
        "/images/restaurant2.jpg",
      ],
      title: "Fine Lunch Food",
      desc: "Taste authentic local cuisine at Kufri's restaurant, Flavour.",
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-secondary font-cormorant text-textcolor">
      <p className="text-2xl md:text-3xl  lg:text-4xl text-center  font-medium">
        From the moment you step foot on our grounds,
        <br className="hidden md:block" />
        you'll be enveloped in a world of refined
        <br className="hidden md:block" />
        elegance and warm hospitality.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 md:mt-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/outside.jpg"
            className="h-auto object-cover w-full md:w-[500px] rounded-lg"
            alt="Kufi Resort"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 py-10 md:py-20">
          <p className="text-2xl lg:text-4xl text-left font-medium pr-0 xl:pr-40">
            Taken from Javanese culture, they possess a meaning of peacefulness
            and tranquility
          </p>
          <p className="text-lg lg:text-xl py-4 md:py-8 font-medium pr-0 xl:pr-40">
            Experience true opulence in our meticulously designed
            accommodations. Each room suite is tastefully furnished with a
            harmonious blend of comfort, style, and sophistication.
          </p>
          <button className="border-2 border-textcolor bg-transparent text-lg p-2 px-6 hover:bg-white hover:border-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <section className="text-center mt-12">
        <h2 className="text-2xl md:text-4xl mb-4 md:mb-8 font-medium">
          Designed by the most creative minds in profession, built by
          <br className="hidden md:block" />
          the finest people in the industry, and we have finally begun
          <br className="hidden md:block" />
          our journey to serve you.
        </h2>
      </section>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center lg:justify-between w-full mt-8">
        {data.map((e) => (
          <ImageHover
            key={e.id}
            images={e.images}
            title={e.title}
            desc={e.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Homecontainer;

// export default Homecontainer;

// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// export default function ResortPage() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 font-serif">
//       <section className="text-center mb-12">
//         <h1 className="text-2xl md:text-3xl text-slate-800 mb-4">
//           From the moment you step foot on our grounds,
//           <br />
//           you'll be enveloped in a world of refined
//           <br />
//           elegance and warm hospitality.
//         </h1>
//       </section>

//       <section className="grid md:grid-cols-2 gap-8 mb-12">
//         <Image
//           src="/images/resort.jpg"
//           alt="Luxury pool area"
//           width={400}
//           height={400}
//           className="w-full h-auto object-cover"
//         />
//         <div>
//           <h2 className="text-orange-400 uppercase text-sm mb-2">
//             Royal Heritage
//           </h2>
//           <h3 className="text-xl text-slate-800 mb-4">
//             Taken from Javanese culture,
//             <br />
//             the possess a meaning of
//             <br />
//             peacefulness and tranquility.
//           </h3>
//           <p className="text-sm text-slate-600 mb-4">
//             Experience true opulence in our meticulously designed rooms. Each
//             room and suite is tastefully furnished with a harmonious blend of
//             comfort, style, and sophistication.
//           </p>
//           <Button
//             variant="outline"
//             className="text-orange-400 border-orange-400"
//           >
//             LEARN MORE
//           </Button>
//         </div>
//       </section>

//       <section className="text-center mb-12">
//         <h2 className="text-2xl text-slate-800 mb-8">
//           Designed by the most creative minds in profession, built by
//           <br />
//           the finest people in the industry, and we have finally begun
//           <br />
//           our journey to serve you.
//         </h2>
//       </section>

//       <section className="grid md:grid-cols-3 gap-8">
//         {["Infinity Pool", "Club Lounge", "Fine Lunch Food"].map(
//           (title, index) => (
//             <div key={index} className="text-center">
//               <Image
//                 src={`/placeholder.svg?height=200&width=300`}
//                 alt={title}
//                 width={300}
//                 height={200}
//                 className="w-full h-auto object-cover mb-4"
//               />
//               <h3 className="text-orange-400 mb-2">{title}</h3>
//               <p className="text-sm text-slate-600 mb-4">
//                 {index === 0 &&
//                   "An 18m heated infinity pool with breathtaking views over the valley."}
//                 {index === 1 &&
//                   "A sophisticated and quiet space reserved for Club Guests only."}
//                 {index === 2 &&
//                   "A natural, sustainable cocoon for intimate events and wedding ceremonies."}
//               </p>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="text-orange-400 border-orange-400"
//               >
//                 VIEW MORE
//               </Button>
//             </div>
//           )
//         )}
//       </section>
//     </div>
//   );
// }
