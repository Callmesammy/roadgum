import { Mulish } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });
const Wrightups = () => {
    return ( 
        <div className="w-full flex flex-col">
            <div className="w-full flex-col flex h-82 items-center justify-center">
            <h2 className={` ${mulish.className} tracking-wide bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-5xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold `}>
            Make your own road </h2>
            <p className="text-xl items-center flex w-full truncate text-center">
            Whether you need more balance, flexibility, or just a different gig, we make it easier to chart a new path. You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.

            </p>
          
    <Link href={"/"}  className="flex group  relative w-62 pt-6">
      
      <div className="  gap-1 text-xl w-full justify-center z-20 shadow flex items-center font-bold    text-red-400 transition-transform rounded-xl ">                 
      Explore Features  <FaLongArrowAltRight />



 </div>
      <span className="gap-1  text-xl w-full justify-center text-center cursor-pointer z-30  font-bold flex items-center absolute  text-black   group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform  ">
      Explore Features
      <FaLongArrowAltRight />
         </span> 
       
 </Link>
            </div>
            
    <div className="w-full h-132 grid lg:grid-cols-2 pt-4">
        <div className="relative h-full w-full bg-teal-600 border border-black">
        <Image src={"/home.svg"} alt="image" fill className="object-fill"/>

        </div>


        <div className="relative h-full w-full bg-teal-600 border border-black">
            <h1 className="">Sell anything
            </h1>
        </div>
    </div>
    
        </div>
     );
}
 
export default Wrightups;