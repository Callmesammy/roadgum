import Image from "next/image";
import { Philosopher, Mulish } from "next/font/google";
import { BackgroundLines } from '@/components/ui/background-lines';
import { Input } from "@/components/ui/input";
import Link from "next/link";
import BckImg from "./_components/back-img";
import AnotherBody from "./_components/another-body";
import Coolbody from "./_components/cool-body";
import Wrightups from "./_components/down-writeups";

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
    <div className="flex w-full h-full  bg-muted-forground flex-col ">
       <BackgroundLines className="relative flex items-center justify-center w-full h-screen flex-col border-2 border-black  px-4">
      <h2 className={` ${mulish.className} tracking-wide bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold `}>
      Go from  <br className="md:hidden"/>0 to $1
      </h2>
      <p className={`${mulish.className} max mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center`}>
      Anyone can earn their first dollar online. Just start with what you know,
     <br className="hidden md:flex"/> see what sticks, and get paid.  It's that easy
      </p>
      <div className=" grid space-y-3 md:flex items-center gap-1 pt-6">
      <Link href={"/"}  className="flex group relative w-full">
      
      <div className="w-full justify-center z-20 flex items-center p-5  text-muted-foreground   bg-yellow-400 transition-transform rounded-xl border border-muted-foreground">                 
      <h1 className="text-xl capitalize"> start selling</h1>


 </div>
      <span className=" w-full justify-center text-center cursor-pointer z-30 p-5 flex items-center absolute  bg-black   text-white group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize "> start selling</h1>

         </span> 
         <span className="w-full justify-center z-10 cursor-pointer p-5 flex items-center absolute  bg-red-500   text-white group-hover:translate-y-2 group-hover:translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize"> start selling</h1>

         </span>
 </Link>
 <div className=" w-100  items-center z-30 ">
     <Input placeholder="Search Marketplace" className=" bg-black flex w-full h-18 text-lg text-white"/>

 </div>

 </div>
 <div className="absolute flex w-full h-full">
<BckImg/>
</div>
    </BackgroundLines>

{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">

  <AnotherBody/>
</div>

{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">
    <Coolbody/>
</div>
{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">
    <Wrightups/>
</div>
    </div>
  );
}
