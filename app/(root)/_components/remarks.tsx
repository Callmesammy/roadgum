import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";

const Remarks = () => {
    return (
        <div className="h-full  pt-4 grid lg:grid-cols-[1fr_2fr] bg-pink-400">
      <div className="w-full h-[700px] relative flex items-center justify-center">

             <div className=" pt-4 text-3xl px-5 font-semibold  justify-center  gap-2 w-[500px]  items-center flex group  border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
            “I launched MaxPacks as an experimental side gig; but within 2 years those Procreate brushes were earning more than my 6-figure salary in CG. Leaving in favor of Gumroad enabled me to explore other aspects of my art, develop new hobbies, and finally prioritize my personal life.”


            </div>

            </div>
             <div className="w-full h-[700px] relative flex ">
            <Image src={"/max.webp"} alt="max image" fill className="object-contain lg:pt-3 pt-[100px] flex z-10"/>
            <Image src={"/writing.svg"} alt="max image" width={200} height={200} className="z-10 left-10 object-contain pt-[300px] flex lg:absolute"/>
            <div className="absolute  group group-hover:translate-x-2 group-hover:translate-y-2 transition-transform flex items-center justify-center w-52 h-13 bg-black md:right-42 insert-0 bottom-6 lg:right-32 right-12 z-20 p-2 rounded-full">
             <div className=" cursor-pointer gap-2 absolute items-center flex group w-52 h-13 bg-white z-25 p-2 border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">

            <Image src={"/logo.svg"} alt="max image" width={40} height={100} className=" "/>
        <h1 className="font-semibold"> Maxulichnylary</h1>
            </div>

            </div>

            </div>

     
            

        </div>
      );
}
 
export default Remarks;