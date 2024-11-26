// import Image from "next/image";
// import React from "react";
// import { IoLogoInstagram } from "react-icons/io";
// import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
// function Page() {
//   return (
//     <div className="py-28 bg-secondary2 space-y-10">
//       <p className="text-textcolor font-cormorant font-semibold text-4xl text-center">
//         Contact Kufri Snow View Resort, Kufri, Shimla
//       </p>
//       <div className="flex w-full justify-center gap-20">
//         <Image
//           width={700}
//           height={700}
//           src="/images/Experiences.png"
//           className="object-cover"
//         />
//         <div className="space-y-8">
//           <p className="text-textcolor ">Kufri Snow View Resort</p>
//           <p>NH5, Fagu road, New Kufri, Shimla, Himachal Pradesh 171209</p>
//           <p>
//             Email:{" "}
//             <a
//               href="mailto:info@email.com"
//               className="text-textcolor hover:underline"
//             >
//               info@email.com
//             </a>
//           </p>
//           <p>Reservation : +91 9999999999 | +91 9999999999</p>
//           <p>Manager : +91 9999999999</p>
//         </div>
//       </div>
//       <div className="px-36 space-y-4">
//         <p className="text-2xl font-semibold font-cormorant text-textcolor">
//           Follow Us On Social Media:
//         </p>
//         <div className="flex text-textcolor gap-10">
//           <IoLogoInstagram className="w-8 h-8 hover:text-gray-300" />
//           <FaFacebookSquare className="w-8 h-8 hover:text-gray-300" />
//           <FaYoutube className="w-8 h-8 hover:text-gray-300" />
//         </div>
//       </div>
//       <div className="mx-8">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.733674356087!2d77.28492507559443!3d31.08933437441419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39058400642b222d%3A0x970e4bc419fd97aa!2sTreebo%20Hotel%20Snow%20View%20Resort%20Shimla!5e0!3m2!1sen!2sin!4v1732190496719!5m2!1sen!2sin"
//           className="w-96 h-96 lg:w-full lg:h-[500px] "
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default Page;

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8 py-28 flex flex-col md:flex-row gap-8">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="relative">
          <Image
            src="/images/Experiences.png"
            alt="Kufri Snow View Resort"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardTitle className="absolute bottom-4 left-4 text-white text-2xl bg-black bg-opacity-50 p-2 rounded">
            Contact Kufri Snow View Resort
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2" />
              NH5, Fagu road, New Kufri, Shimla, Himachal Pradesh 171209
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2" />
              snowviewresort7@gmail.com
            </p>
            <p className="flex items-center mb-2">
              <Phone className="mr-2" />
              Reservation: +91 9999999999 | +91 9999999999
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              Manager: +91 9999999999
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Follow Us On Social Media
            </h2>
            <div className="flex space-x-4">
              {/* <Button variant="outline" className="p-2">
                <Instagram className="w-6 h-6" />
              </Button> */}
              <Link href="https://www.facebook.com/kufri" target="_blank">
                <Button variant="outline" className="p-2">
                  <Facebook className="w-6 h-6" />
                </Button>
              </Link>
              {/* <Button variant="outline" className="p-2">
                <Youtube className="w-6 h-6" />
              </Button> */}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.733674356087!2d77.28492507559443!3d31.08933437441419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39058400642b222d%3A0x970e4bc419fd97aa!2sTreebo%20Hotel%20Snow%20View%20Resort%20Shimla!5e0!3m2!1sen!2sin!4v1732190496719!5m2!1sen!2sin"
          className="w-full h-96 lg:w-96 lg:h-96 "
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
