import Image from "next/image";
import { Philosopher, Mulish } from "next/font/google";
import { BackgroundLines } from '@/components/ui/background-lines';
import { Input } from "@/components/ui/input";
import Link from "next/link";
import BckImg from "./_components/back-img";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '700'
});
const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });

export default function Home() {
  return (
    <div className="flex w-full h-screen relative bg-muted-forground flex-col ">
       <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className={` ${mulish.className} tracking-wide bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold `}>
      Go from 0 to $1
      </h2>
      <p className={`${mulish.className} max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center`}>
      Anyone can earn their first dollar online. Just start with what you know,
      see what sticks, and get paid. It's that easy
      </p>
      <div className=" flex items-center gap-1 pt-6">
      <Link href={"/"}  className="flex group relative w-full">
      
      <div className=" z-20 flex items-center p-5  text-muted-foreground   bg-yellow-400 transition-transform rounded-xl border border-muted-foreground">                 
      <h1 className="text-xl capitalize"> start selling</h1>


 </div>
      <span className=" cursor-pointer z-30 p-5 flex items-center absolute  bg-black   text-white group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize"> start selling</h1>

         </span> 
         <span className=" z-10 cursor-pointer p-5 flex items-center absolute  bg-red-500   text-white group-hover:translate-y-2 group-hover:translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize"> start selling</h1>

         </span>
 </Link>
 <div className="p-5 w-full flex items-center z-50">
     <Input placeholder="Search Marketplace" className=" bg-black flex w-72 h-18 text-lg text-white"/>

 </div>

 </div>
    </BackgroundLines>

{/*** Image segment  */}
<div className="absolute flex w-full h-full">
<BckImg/>
</div>
    
    </div>
  );
}
