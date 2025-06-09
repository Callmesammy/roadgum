"use client"

import {  Philosopher } from "next/font/google";
import { ImGithub } from "react-icons/im";
import { FaStar } from "react-icons/fa6";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '400'
});
const Heading = () => {
    const num = 2

    const onclick=(url: string)=>{
        window.location.href = url
    }
    return (  
        <div className=" flex px-2 w-full h-22 bg-black text-white items-center justify-between">
           <div className="w-full flex gap-3 items-center">
            <span onClick={()=>onclick("/")} className="cursor-pointer">
                <h1 className={`${philosopher.className} lg:text-4xl text-4xl font-bold `}> Roadgum</h1>
                
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
        </div>
    );
}
 
export default Heading;