"use client"

import {  Mulish, Philosopher } from "next/font/google";
import { ImGithub } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { cn } from '../../../lib/utils';
import Link from "next/link";
import SheetView from "@/app/(root)/_components/mobile-view";
import { Document11 } from "@/app/(root)/_components";
import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '700'
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: '400'
  });

const HearderPT = () => {
   
    const onclick=(url: string)=>{
        window.location.href = url
    }
    return (  
        <div className=" flex  w-full h-22 bg-primary text-white items-center justify-between flex-co">
           <div className={`${mulish.className}w-full flex gap-3 items-center px-8 `}>
            <span onClick={()=>onclick("/discovery")} className="cursor-pointer">
                <h1 className={`${philosopher.className} font-bold lg:text-4xl text-4xl font- `}> Roadgum</h1>
                
            </span>
         
           </div>
           {/** Mobile view */}
           <div className="px-4 z-9999 lg:hidden">
            <SheetView/>
            
            </div>
           <div className="lg:flex gap-2 items-center hidden">
          
           </div>
           <div className="w-full  justify-between flex px-3">
            <div className="items-center w-full flex   rounded-md px-1 relative ">
            <IoMdSearch className="size-6 flex text-muted-foreground left-2 z-15 absolute cursor-pointer"/>

            <Input placeholder="Search Products" className="w-full flex px-8  z-10 border border-muted-foreground focus-visible:ring-purple-600 absolute" />
            </div>
           another
          </div>
        </div>
    );
}
 
export default HearderPT;