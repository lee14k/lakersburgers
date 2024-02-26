import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Menu from "@/components/Menu";
import { Wellfleet } from "next/font/google";
import Footer from "@/components/Footer";

const wellfleet = Wellfleet({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bigbg">
      <div className="flex justify-between flex-col">
        <div className="flex justify-center items-center "></div>
        {/* Center Column for Logo */}
        <div className="flex justify-center items-center">
          {" "}
          <Image
            src="/lbnoblu.png"
            height={790}
            width={720}
            className="circle"
          />
        </div>

        {/* Right Column for Buttons */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-rows-3 gap-10 w-1/2">
            {" "}
            {/* Adjusted to align the buttons vertically */}
            <Link href="https://www.toasttab.com/lakers">
              <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className={wellfleet.className}>Order Now!</span>
              </button>
            </Link>
            <Link href="#menu">
              <button className="w-full  h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className={wellfleet.className}>Menu</span>
              </button>
            </Link>
            <Link href="#contact">
              <button className="w-full  h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <span className={wellfleet.className}>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center items-center">
        <div className={wellfleet.className}></div>
      </div>
      <div id="menu" className="">
        <Menu />
      </div>
      <div className={wellfleet.className}>
        <div
          id="contact"
          className="bottomcontact flex flex-col justify-center items-center pt-12"
        >
          <h1 className="text-white text-4xl">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
