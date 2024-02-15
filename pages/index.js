import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bigbg">
    <div className="flex h-screen  justify-between"> {/* Use justify-between to space out the main elements */}
      {/* Left Column for future content, adjust width as needed */}
      <div className="w-1/4 flex justify-center items-center mt-96">
      <div className="">
          <p className="text-white  bg-emerald-800 circletwo flex justify-center items-center"> Lakers Bakery!</p>
        </div>

      </div>

      {/* Center Column for Logo */}
      <div className="w-1/2 flex justify-center items-center"> {/* Adjusted to center the logo */}
        <Image
          src='/lakerslogonew.png'
          height={600}
          width={600}
          className="circle"
        />
      </div>

      {/* Right Column for Buttons */}
      <div className="w-1/4 flex flex-col justify-center gap-4 p-4"> {/* Adjusted to align the buttons vertically */}
        <Link href="https://orders.cake.net/11333695">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
        </Link>
        <Link href="https://orders.cake.net/11333695">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
        </Link>
        <Link href="https://orders.cake.net/11333695">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
        </Link>
      </div>
    
    </div>
    <div className="my-24 flex justify-center items-center">
        <h1 className="text-white">Experience new tastes in marquette blah blah</h1>
      </div>
      <div className="">
      <ContactForm/>
      </div>
    </div>
  );
}
