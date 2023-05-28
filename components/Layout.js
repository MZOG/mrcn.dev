import '../app/globals.css'
import { Montserrat } from "next/font/google";
import Image from "next/image";

import PatternLeft from "../public/pattern-left.svg"
import PatternRight from "../public/pattern-right.svg"
import {useState} from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Layout({ children }) {
  
  return (
      <>
        <main className={`${montserrat.className} relative`}>
          <Image src={PatternLeft} alt="Pattern Left" className="absolute left-0 top-10 -z-40 w-[200px] lg:w-auto" />
          <Image src={PatternRight} alt="Pattern Right" className="absolute right-0 top-10 -z-40 w-[200px] lg:w-auto" />
          {children}
        </main>
      </>
  )
}
