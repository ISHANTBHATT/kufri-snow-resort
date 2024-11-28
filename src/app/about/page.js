"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "../components/StickyScroll";

const content = [
  {
    title: "NALDEHRA",
    description:
      "Naldehra, a picturesque hill station located in the Indian state of Himachal Pradesh. Nestled amidst the lush greenery of the Himalayas, Naldera is renowned for its breathtaking landscapes and serene environment. One of its most famous attractions is the Naldera Golf Course, which is one of the oldest and most scenic golf courses in India. Designed by Lord Curzon during the British era, this nine-hole course is surrounded by tall deodar trees and offers stunning views of the surrounding mountains.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/NALDEHRA.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TATTAPANI",
    description:
      "Tattapani, a hidden gem nestled in the serene landscapes of Himachal Pradesh, India. Known for its natural hot water springs, Tattapani offers visitors a unique opportunity to unwind and rejuvenate amidst nature's bounty. The name 'Tattapani' translates to 'hot water,' and it is the thermal springs that draw travelers from far and wide. These mineral-rich waters are believed to have therapeutic properties, providing relief from ailments and promoting overall well-being.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/TATTAPANI.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "KUFRI ZOO",
    description:
      "Kufri Zoo, nestled in the picturesque hills of Himachal Pradesh, India. This charming zoo offers visitors a chance to experience the rich biodiversity of the Himalayan region. Located in the small town of Kufri, just a short drive from the bustling city of Shimla, the zoo is a serene escape into nature. Kufri Zoo is home to a variety of native species, both flora and fauna. Visitors can encounter majestic snow leopards, playful Himalayan black bears, and sleek musk deer, among other fascinating animals. The zoo is committed to conservation and education, providing insights into the unique ecosystems of the Himalayas and the challenges faced by its inhabitants.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/Kufri-Zoo.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CHAIL",
    description:
      "Chail, a serene hill station nestled in the Shivalik range of the Himalayas. Known for its natural beauty and tranquil ambiance, Chail offers a perfect escape from the hustle and bustle of city life. The town is renowned for its lush green forests, majestic mountains, and breathtaking views. One of the highlights of Chail is the Chail Palace, a stunning architectural marvel that once served as the summer retreat for the Maharaja of Patiala.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/chail.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "NARKANDA",
    description:
      "Narkanda, a charming hill station nestled in the serene landscapes of Himachal Pradesh. Known for its breathtaking views and lush apple orchards, Narkanda is a haven for nature lovers and adventure enthusiasts alike. During the winter months, the town transforms into a snowy wonderland, inviting visitors to indulge in skiing and snowboarding on its pristine slopes. The Hatu Peak, a popular trek, offers panoramic vistas of the surrounding mountains, rewarding hikers with a sense of accomplishment and tranquility.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/narkanda2.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DESHU PEAK",
    description:
      "Deshu Peak stands majestically against the backdrop of the serene landscape, a hidden gem in the heart of the region. Renowned for its breathtaking vistas, the peak offers panoramic views that stretch across the horizon, capturing the lush forests and undulating hills in all their glory. Adventurers and nature enthusiasts flock to this spot, eager to explore the winding trails that lead to its summit. As one ascends, the air grows crisper and the scent of pine fills the atmosphere, invigorating the spirit and inviting reflection.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/images/deshu-temple.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function Page() {
  return (
    // <div className="text-textcolor bg-secondary">
    //   <div className="py-28 px-10 space-y-16">
    //     <div className="flex gap-10 w-full h-full">
    //       <Image
    //         src="/images/outdoor.jpg"
    //         alt=""
    //         width={500}
    //         height={500}
    //         className="rounded-xl"
    //       />

    //       <div className="flex flex-col container justify-end gap-10">
    //         <p>
    //           Kufri is a charming hill station nestled in the Himalayan
    //           foothills of the Indian state of Himachal Pradesh. Situated
    //           approximately 20 kilometers from the bustling city of Shimla,
    //           Kufri is renowned for its breathtaking landscapes, lush green
    //           forests, and panoramic views of snow-capped peaks. This serene
    //           destination, perched at an altitude of about 2,720 meters above
    //           sea level, becomes a winter wonderland during the colder months,
    //           attracting tourists for skiing and other snow-related activities.
    //           Besides winter sports, Kufri is home to the Himalayan Nature Park,
    //           where visitors can explore diverse flora and fauna native to the
    //           region.
    //         </p>
    //         <p>
    //           The park also provides a sanctuary for a variety of animals such
    //           as the Himalayan Monal, the state bird of Himachal Pradesh. For
    //           adventure enthusiasts, Kufri offers opportunities for trekking and
    //           horse riding along scenic trails. A visit to Kufri is incomplete
    //           without experiencing the vibrant local culture and sampling the
    //           delicious Himachali cuisine, which adds a flavorful touch to this
    //           picturesque retreat.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-secondary2 py-10">
    //     <p className="font-cormorant font-semibold text-textcolor text-4xl text-center my-10">
    //       PLACES TO VISIT AROUND KUFRI
    //     </p>
    //     <StickyScroll content={content} />
    //   </div>
    // </div>
    <div className="text-textcolor bg-secondary">
      {/* Hero Section */}
      <div className="py-28 px-4 md:px-10 space-y-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full h-full">
          <Image
            src="/images/outdoor.jpg"
            alt=""
            width={500}
            height={500}
            className="rounded-xl w-full lg:w-[50%] object-cover"
          />

          <div className="flex flex-col justify-end container gap-6">
            <p className="text-sm md:text-base">
              Kufri is a charming hill station nestled in the Himalayan
              foothills of the Indian state of Himachal Pradesh. Situated
              approximately 20 kilometers from the bustling city of Shimla,
              Kufri is renowned for its breathtaking landscapes, lush green
              forests, and panoramic views of snow-capped peaks. This serene
              destination, perched at an altitude of about 2,720 meters above
              sea level, becomes a winter wonderland during the colder months,
              attracting tourists for skiing and other snow-related activities.
              Besides winter sports, Kufri is home to the Himalayan Nature Park,
              where visitors can explore diverse flora and fauna native to the
              region.
            </p>
            <p className="text-sm md:text-base">
              The park also provides a sanctuary for a variety of animals such
              as the Himalayan Monal, the state bird of Himachal Pradesh. For
              adventure enthusiasts, Kufri offers opportunities for trekking and
              horse riding along scenic trails. A visit to Kufri is incomplete
              without experiencing the vibrant local culture and sampling the
              delicious Himachali cuisine, which adds a flavorful touch to this
              picturesque retreat.
            </p>
          </div>
        </div>
      </div>

      {/* Places to Visit Section */}
      <div className="bg-secondary2 py-10">
        <p className="font-cormorant font-semibold text-textcolor text-2xl md:text-4xl text-center my-6 md:my-10">
          PLACES TO VISIT AROUND KUFRI
        </p>
        <div className="px-4 md:px-10">
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
