"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import AnimatedMenu from "./AnimatedMenu";
import Image from "next/image";
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = pathname === "/";
  return (
    <header
      className={`fixed w-full z-50 sm:px-6  font-cormorant h-14 sm:h-auto  ${
        isScrolled || !isHomePage
          ? "bg-secondary text-textcolor"
          : "bg-transparent text-white"
      }`}
    >
      <div className="relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <AnimatedMenu />
            <Link href="/">
              <div className="flex items-center gap-2 absolute right-[40%] sm:right-[45%] -top-2 sm:top-2">
                <Image
                  src="/images/Kufri-Logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/booking">
                <button className="hidden sm:inline-flex px-4 py-2 border-2 border-white hover:bg-white hover:text-textcolor rounded-lg">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
