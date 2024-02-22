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
      <div className="sm:flex sm:h-screen justify-between grid grid-cols-1">
        <div className="sm:w-1/4 flex justify-center items-center mt-96 ">
          <div className={wellfleet.className}>
            <div className="text-white  bg-emerald-800 flex justify-center items-center circletwo">
            
              <span className="text-center mx-12">
                Handcrafted burgers and pizzas inspired by gourmet northern
                tastes
              </span>
            
            </div>
          </div>
        </div>

        {/* Center Column for Logo */}
        <div className="sm:w-1/2 flex justify-center items-center">
          {" "}
          <Image
            src="/lbnoblu.png"
            height={790}
            width={720}
            className="circle"
          />
        </div>

        {/* Right Column for Buttons */}
        <div className="sm:w-1/4 flex flex-col justify-center gap-4 p-4">
          {" "}
          {/* Adjusted to align the buttons vertically */}
          <Link href="https://www.toasttab.com/lakers">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
          </Link>
          <Link href="https://orders.cake.net/11333695">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Menu
            </button>
          </Link>
          <Link href="https://orders.cake.net/11333695">
            <button className="w-full h-full bg-emerald-800 rounded-md px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="my-24 flex justify-center items-center">
        <div className={wellfleet.className}>
          <h1 className="text-white text-6xl">
            Experience new tastes in Marquette
          </h1>
        </div>
      </div>
      <div className="">
        <Menu />
      </div>
      <div className={wellfleet.className}>
        <div className="bottomcontact flex flex-col justify-center items-center pt-12">
          <h1 className="text-white text-4xl">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
