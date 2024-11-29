import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Cormorant } from "next/font/google";
import Footer from "./components/Footer";
import SnowfallEffect from "./components/SnowfallEffect";
import Script from "next/script";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kufri Snow Resort",
  description:
    "Kufri snow view resort is nestled in the picturesque hills of Kufri, offering a serene retreat for those seeking a getaway in nature's embrace. With panoramic views of the snow-capped Himalayas, the resort provides a perfect blend of comfort and natural beauty.",
};
const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y88CPHHLJ6"
        ></Script>
        <Script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-Y88CPHHLJ6');
        </Script> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y88CPHHLJ6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y88CPHHLJ6');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <Navbar />
        <SnowfallEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}
