// "use client";

// import Image from "next/image";
// import { useRef, useState } from "react";

// export default function Component() {
//   const [activeSection, setActiveSection] = useState("living-room");
//   const sectionRefs = {
//     "living-room": useRef(null),
//     bedroom: useRef(null),
//     bathroom: useRef(null),
//     exterior: useRef(null),
//   };

//   const sections = [
//     {
//       id: "living-room",
//       title: "Living room",
//       images: ["/images/seating.jpg"],
//     },
//     {
//       id: "restaurant",
//       title: "Restaurant",
//       images: [
//         "/images/restaurant.jpg",
//         "/images/restaurant1.jpg",
//         "/images/restaurant2.jpg",
//       ],
//     },
//     {
//       id: "bedroom",
//       title: "Bedroom",
//       description:
//         "Queen bed · Bed linen · Clothes storage · Essentials · Hangers · Extra pillows and blankets",
//       images: [
//         "/images/room.jpg",
//         "/images/room1.jpg",
//         "/images/room2.jpg",
//         "/images/room3.jpg",
//         "/images/room4.jpg",
//         "/images/room5.jpg",
//       ],
//     },
//     {
//       id: "bathroom",
//       title: "Full bathroom",
//       images: ["/placeholder.svg?height=800&width=1200"],
//     },
//     {
//       id: "exterior",
//       title: "Exterior",
//       images: [
//         "/images/outdoor.jpg",
//         "/images/outdoor1.jpg",
//         "/images/outside1.jpg",
//         "/images/outside2.jpg",
//         "/images/outside3.jpg",
//         "/images/outside4.jpg",
//         "/images/outside5.jpg",
//         "/images/outside6.jpg",
//         "/images/outside7.jpg",
//         "/images/outside8.jpg",
//         "/images/outside9.jpg",
//         "/images/outside10.jpg",
//         "/images/outside11.jpg",
//         "/images/outside12.jpg",
//       ],
//     },
//   ];

//   const handleScroll = () => {
//     for (const section of sections) {
//       const element = sectionRefs[section.id].current;
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 100) {
//           setActiveSection(section.id);
//           break;
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className="flex flex-col lg:flex-row min-h-screen bg-background"
//       onScroll={handleScroll}
//     >
//       {/* Sticky Navigation */}
//       <nav className="lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-0 lg:h-screen bg-background border-r">
//         <div className="p-6">
//           <h1 className="text-2xl font-semibold mb-6">Photo tour</h1>
//           <ul className="space-y-4">
//             {sections.map((section) => (
//               <li key={section.id}>
//                 <a
//                   href={`#${section.id}`}
//                   className={`block text-lg transition-colors ${
//                     activeSection === section.id
//                       ? "text-primary font-medium"
//                       : "text-muted-foreground"
//                   }`}
//                 >
//                   {section.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {sections.map((section) => (
//           <section
//             key={section.id}
//             id={section.id}
//             ref={sectionRefs[section.id]}
//             className="mb-12"
//           >
//             <div className="lg:hidden mb-4">
//               <h2 className="text-2xl font-semibold">{section.title}</h2>
//               {section.description && (
//                 <p className="text-muted-foreground mt-2">
//                   {section.description}
//                 </p>
//               )}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {section.images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`relative ${
//                     index === 0 && section.images.length > 1
//                       ? "md:col-span-2"
//                       : ""
//                   }`}
//                 >
//                   <Image
//                     src={image}
//                     alt={`${section.title} ${index + 1}`}
//                     width={1200}
//                     height={800}
//                     className="rounded-lg object-cover w-full"
//                     style={{
//                       aspectRatio: "3/2",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useRef, useState } from "react";

// export default function Component() {
//   const [activeSection, setActiveSection] = useState("living-room");
//   const sectionRefs = {
//     "living-room": useRef(null),
//     restaurant: useRef(null),
//     bedroom: useRef(null),
//     bathroom: useRef(null),
//     exterior: useRef(null),
//   };
//   const sections = [
//     {
//       id: "living-room",
//       title: "Living room",
//       images: ["/images/seating.jpg"],
//     },
//     {
//       id: "restaurant",
//       title: "Restaurant",
//       images: [
//         "/images/restaurant.jpg",
//         "/images/restaurant1.jpg",
//         "/images/restaurant2.jpg",
//       ],
//     },
//     {
//       id: "bedroom",
//       title: "Bedroom",
//       description:
//         "Queen bed · Bed linen · Clothes storage · Essentials · Hangers · Extra pillows and blankets",
//       images: [
//         "/images/room.jpg",
//         "/images/room1.jpg",
//         "/images/room2.jpg",
//         "/images/room3.jpg",
//         "/images/room4.jpg",
//         "/images/room5.jpg",
//       ],
//     },
//     {
//       id: "bathroom",
//       title: "Full bathroom",
//       images: ["/images/bathroom.jpg"],
//     },
//     {
//       id: "exterior",
//       title: "Exterior",
//       images: [
//         "/images/outdoor.jpg",
//         "/images/outside10.jpg",
//         "/images/outside1.jpg",
//         "/images/outside12.jpg",
//         "/images/outside3.jpg",
//         "/images/outdoor1.jpg",
//         "/images/outside5.jpg",
//         "/images/outside6.jpg",
//         "/images/outside7.jpg",
//         "/images/outside8.jpg",
//         "/images/outside9.jpg",
//         "/images/outside4.jpg",
//         "/images/outside11.jpg",
//         "/images/outside2.jpg",
//       ],
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-5xl font-semibold mb-6 text-textcolor font-cormorant">
//         Photo Tour
//       </h1>

//       <div className="grid grid-cols-5 gap-4 mb-8">
//         {sections.map((section, index) => (
//           <div key={section.id} className="relative aspect-[4/3]">
//             <Image
//               src={section.images[0]}
//               alt={section.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//             <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
//               {section.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {sections.map((section) => (
//         <div key={section.id} className="mb-12">
//           <h2 className="text-3xl font-semibold mb-2 font-cormorant text-textcolor">
//             {section.title}
//           </h2>
//           {section.description && (
//             <p className="text-gray-600 mb-4">{section.description}</p>
//           )}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {section.images.map((image, index) => (
//               <div
//                 key={index}
//                 className={`relative ${
//                   index === 0 && section.images.length > 1
//                     ? "md:col-span-2"
//                     : ""
//                 }`}
//               >
//                 <Image
//                   src={image}
//                   alt={`${section.title} ${index + 1}`}
//                   width={1200}
//                   height={800}
//                   layout="responsive"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Component() {
  const sectionRefs = {
    "living-room": useRef(null),
    restaurant: useRef(null),
    bedroom: useRef(null),
    bathroom: useRef(null),
    exterior: useRef(null),
  };

  const sections = [
    {
      id: "living-room",
      title: "Living room",
      images: ["/images/seating.jpg"],
    },
    {
      id: "restaurant",
      title: "Restaurant",
      images: [
        "/images/restaurant.jpg",
        "/images/restaurant1.jpg",
        "/images/restaurant2.jpg",
      ],
    },
    {
      id: "bedroom",
      title: "Bedroom",
      description:
        "Queen bed · Bed linen · Clothes storage · Essentials · Hangers · Extra pillows and blankets",
      images: [
        "/images/room.jpg",
        "/images/room1.jpg",
        "/images/room2.jpg",
        "/images/room3.jpg",
        "/images/room4.jpg",
        "/images/room5.jpg",
      ],
    },
    {
      id: "bathroom",
      title: "Full bathroom",
      images: ["/images/bathroom.jpg"],
    },
    {
      id: "exterior",
      title: "Exterior",
      images: [
        "/images/outdoor.jpg",
        "/images/outside10.jpg",
        "/images/outside1.jpg",
        "/images/outside6.jpg",
        "/images/outside3.jpg",
        "/images/outdoor1.jpg",
        "/images/outside5.jpg",
        "/images/outside12.jpg",
        "/images/outside7.jpg",
        "/images/outside8.jpg",
        "/images/outside9.jpg",
        "/images/outside4.jpg",
        "/images/outside11.jpg",
        "/images/outside2.jpg",
      ],
    },
  ];

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-32">
      <h1 className="text-5xl font-semibold mb-6 text-textcolor font-cormorant">
        Photo Tour
      </h1>

      <div className="grid grid-cols-5 gap-4 mb-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative aspect-[4/3] focus:outline-none"
          >
            <Image
              src={section.images[0]}
              alt={section.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
              {section.title}
            </div>
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <div
          key={section.id}
          ref={sectionRefs[section.id]}
          className="mb-12 scroll-mt-24"
        >
          <h2 className="text-3xl font-semibold mb-2 font-cormorant text-textcolor">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-gray-600 mb-4">{section.description}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.images.map((image, index) => (
              <div
                key={index}
                className={`relative ${
                  index === 0 && section.images.length > 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${section.title} ${index + 1}`}
                  width={1200}
                  height={800}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
