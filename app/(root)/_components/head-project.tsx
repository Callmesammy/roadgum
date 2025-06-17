"use client"

import {  Mulish, Philosopher } from "next/font/google";
import { ImGithub } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { Document11 } from ".";
import { cn } from '../../../lib/utils';
import Link from "next/link";
import SheetView from "./mobile-view";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '700'
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: '400'
  });

const Heading = () => {
    const pathName = usePathname()
    const num = 2

    const onclick=(url: string)=>{
        window.location.href = url
    }
    return (  
        <div className=" flex  w-full h-22 bg-black text-white items-center justify-between">
           <div className={`${mulish.className}w-full flex gap-3 items-center px-3 `}>
            <span onClick={()=>onclick("/")} className="cursor-pointer">
                <h1 className={`${philosopher.className} font-bold lg:text-5xl text-5xl font- `}> Roadgum</h1>
                
            </span>
            <a href="https://github.com/Callmesammy" target="_blank" className="flex">

                 <div className="p-1 flex items-center gap-2 text-muted-foreground relative hover:-translate-y-1.5 hover:-translate-x-1  bg-muted-foreground transition-transform rounded-full border border-muted-foreground">
                                   
                 <ImGithub className="size-5"/>
                <h1 className="text-md"> {num}K </h1>
                 <FaStar className="text-white " />

           
            </div>
                 <span className=" cursor-pointer p-1 flex items-center gap-2 absolute  bg-black   text-white hover:-translate-y-0.5 hover:-translate-x-1 transition-transform rounded-full border border-muted-foreground">
                 <ImGithub className="size-5"/>
                <h1 className="text-md"> {num}K </h1>
                 <FaStar className="text-white " />

                    </span> 
            </a>
              
           </div>
           {/** Mobile view */}
           <div className="px-4 z-9999 lg:hidden">
            <SheetView/>
            
            </div>
           <div className="lg:flex gap-2 items-center hidden">
           <Link href={"/discovery"} className=" cursor-pointer p-2 tracking-wide border border-black flex hover:border-muted-foreground rounded-full hover:border transition-transform">
                    Discover
                    </Link>
            <div className="flex gap-2 w-full p-2">
                {Document11.map((doc, keys)=>{
                    const isActive = pathName ===doc.url || pathName.startsWith(`${doc.url}/`)
                    return(
                        <Link href={doc.url} key={keys} className={cn(" cursor-pointer p-2 tracking-wide border border-black flex hover:border-muted-foreground rounded-full hover:border transition-transform", isActive && "p-2 tracking-wide bg-white font-semibold text-pretty text-black")}>
                                <h1 className="font- capitalize  ">{doc.label}</h1>
                        </Link>
                    )
                })}
            </div>
                    <Link href={"/link"} className=" bg-pink-300 h-22 p-4 items-center text-center flex font-semibold hover:bg-white transition-colors duration-500 ease-in-out text-black">
                    Dashboard
                    </Link>
           </div>
        </div>
    );
}
 
export default Heading;