"use client"
import Image from "next/image";
import Link from "next/link";
import CountUp from 'react-countup';


const Remarks3 = () => {
    return (
        <div>
 <div className="h-full overflow-x-hidden  pt-4 grid lg:grid-cols-[1fr_2fr] bg-pink-300 items-center ">
      <div className="w-full px-10 h-[600px] relative flex items-center justify-center">

             <div className="  pt-4 text-2xl  font-semibold  justify-center  gap-2   items-center flex group  border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
            "For years, I had a goal to develop 'passive' income streams, but struggled to make that a reality. Last year, I started selling informational products on Gumroad and since then have made $10k+ per month building products that I love."
            </div>

            </div>
            <div className="w-full h-[700px] relative flex items-center ">
            <Image src={"/steph.png"} alt="max image" fill  className="object-contain lg:pt-3 flex z-10 "/>
            <Image src={"/steph.svg"} alt="max image" width={120} height={100} className="z-10 left-4 object-contain pt-[100px] flex lg:absolute"/>
            <Image src={"/stepdolls.svg"} alt="max image" width={120} height={100} className="z-10 right-[150px] object-contain pt-[100px]  lg:absolute hidden lg:flex"/>

            <div className="absolute  group group-hover:translate-x-2 group-hover:translate-y-2 bottom-[90px] transition-transform flex items-center justify-center w-42 h-13 bg-black md:right-42 insert-0  lg:right-32 right-12 z-20 p-2 rounded-full">
             <div className=" cursor-pointer gap-2 absolute items-center flex group w-42 h-13 bg-white z-25 p-2 border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">

            <Image src={"/logo.svg"} alt="max image" width={40} height={100} className=" "/>
        <h1 className="font-semibold"> stephsmithio</h1>
            </div>

            </div>

            </div>
            
        </div>
       

     
            
            <div className="w-full pt-12 items-center flex-col px-3 h-[300px]  flex justify-center bg-white">
            <CountUp start={-875.039}
  end={3527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="$ "className=" items-center text-7xl flex justify-center font-bold tracking-wider"/>

 <div className=" pt-4 text-2xl justify-center w-full  items-center flex ">
The amount of income earned by Gumroad digital entrepreneurs last week.</div>

</div>
 <div className="w-full h-[400px] relative flex ">
<Image src={"/las.webp"} alt="max image" fill className="object-center lg:pt-3 pt-[100px] flex z-10"/>



</div>


<div className="w-full px-3 h-[300px] space-y-5 flex-col relative items-center justify-center text-center bg-pink-400 flex ">

<h1 className="text-5xl font-semibold tracking-wider"> Share your work. Someone out there needs it.  </h1>

<Link href={"/"}  className="flex md:w-62 group relative w-full pt-6">
      
      <div className="w-full justify-center z-20 flex items-center p-4  text-muted-foreground   bg-yellow-400 transition-transform rounded-xl border border-muted-foreground">                 
      <h1 className="text-xl "> Start selling</h1>


 </div>
      <span className=" w-full justify-center text-center cursor-pointer z-30 p-4 flex items-center absolute  bg-black   text-white group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl  "> Start selling</h1>

         </span> 
         <span className="w-full justify-center z-10 cursor-pointer p-4 flex items-center absolute  bg-red-500   text-white group-hover:translate-y-2 group-hover:translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl "> Start selling</h1>

         </span>
 </Link>
</div>


        </div>
      );
}
 
export default Remarks3;