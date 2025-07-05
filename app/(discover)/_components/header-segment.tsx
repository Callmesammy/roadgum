"use client"

import {  Mulish, Philosopher } from "next/font/google";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { usePathname } from "next/navigation";


const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '700'
});

const mulish = Mulish({
    subsets: ["latin"],
    weight: '400'
  });

const HearderPT = () => {
  const pathName = usePathname()
   
    const onclick=(url: string)=>{
        window.location.href = url
    }
    return (  
        <div className="justify-center z-9999 px-10 sticky flex-col  top-0 flex  border-b w-full border-muted-foreground h-42 bg-gray-700 text-white  justify- ">
          <div className="w-full flex px-3">

           <div className={`${mulish.className}w-full px-2 flex gap-3 items-center flexx-col `}>
            <span onClick={()=>onclick("/discovery")} className="cursor-pointer">
                <h1 className={`${philosopher.className} font-bold lg:text-5xl text-5xl font- `}> Roadgum</h1>
                
            </span>
         
           </div>
         
           <div className="lg:flex gap-2 items-center hidden">
          
           </div>
           <div className="max- gap-5 justify-between flex w-full ">
            <div className="items-center w-full flex rounded-md px-1 relative ">
            <IoMdSearch className="size-6 flex text-muted-foreground left-2 z-15 absolute cursor-pointer"/>

            <Input placeholder="Search Products" className="w-full bg-black flex px-8 rounded h-[47px] z-10 border border-muted-foreground focus-visible:ring-purple-600 absolute" />
            </div>
            <div className="flex gap-3  justify-end ">
        
            <div className="w-32 bg-white  relative flex h-[47px] z-10 rounded">
                      <Link href={""} className="z-20 gap-2 bg-primary text-white absolute duration-300  border-primary-foreground border w-32 items-center hover:-translate-y-1 transition-transform hover:-translate-x-1 flex justify-center text-sm rounded h-[47px] ">

              
                      <BsBookmarkHeartFill />
                      Library
        </Link> 
            </div>

            <div className="w-32 bg-black  relative flex h-[50px] z-10 rounded">
                      <Link href={""} className="z-20  absolute duration-300 hover:bg-pink-600 border-primary-foreground border w-32 items-center hover:-translate-y-1 transition-transform hover:-translate-x-1 flex justify-center text-sm rounded h-[47px] bg-gray-300 text-black b">

              
  Start selling   
        </Link> 
            </div>

       
       
            </div>

          </div>
          </div>
<div className="px-5  pt-6 flex gap-5 w-full">
  
</div>
        </div>
    );
}
 
export default HearderPT;