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
        <div className=" sticky z-50 top-0 flex px-8 border-b w-full  border-muted-foreground h-52 bg-primary text-white items-center justify-between flex-co">
           <div className={`${mulish.className}w-full flex gap-3 items-center px-8 `}>
            <span onClick={()=>onclick("/discovery")} className="cursor-pointer">
                <h1 className={`${philosopher.className} font-bold lg:text-4xl text-4xl font- `}> Roadgum</h1>
                
            </span>
         
           </div>
         
           <div className="lg:flex gap-2 items-center hidden">
          
           </div>
           <div className="w-full  justify-between flex ">
            <div className="items-center w-full flex  rounded-md px-1 relative max-w-2xl">
            <IoMdSearch className="size-6 flex text-muted-foreground left-2 z-15 absolute cursor-pointer"/>

            <Input placeholder="Search Products" className="w-full bg-black flex px-8 rounded h-[47px] z-10 border border-muted-foreground focus-visible:ring-purple-600 absolute" />
            </div>
            <div className="flex gap-2 w-">
            <div className="border w-32 rounded h-[47px] bg-gray-300 text-black b">
        dsd
        </div>

        <Link href={""} className="z-15 relative duration-300 hover:bg-pink-400 border-primary-foreground border w-32 items-center hover:-translate-y-1 transition-transform hover:-translate-x-1 flex justify-center text-sm rounded h-[47px] bg-gray-300 text-black b">
    
        Start selling   
        </Link>  
       
            </div>

          </div>
        </div>
    );
}
 
export default HearderPT;