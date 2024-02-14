import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="">
      <div className="logocircle flex justify-center items-center">
      <Image
      src='/lakerslogo.jpeg'
      height={600}
      width={600}
      className="circle"
      />
      </div>
      </div>
    </div>
  );
}
