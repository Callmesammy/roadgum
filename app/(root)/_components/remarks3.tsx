"use client"
import Image from "next/image";
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
       

     
            
            <div className="w-full pt-22 items-center flex-col px-3 h-[200px]  flex justify-center bg-white">
            <CountUp start={-875.039}
  end={3527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="$ "className=" items-center text-7xl flex justify-center font-bold tracking-wider"/>

 <div className=" pt-4 text-2xl     justify-center  gap-2 w-full shrink-0   items-center flex group  border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
The amount of income earned by Gumroad digital entrepreneurs last week.</div>

</div>
 <div className="w-full h-[500px] relative flex ">
<Image src={"/las.webp"} alt="max image" fill className="object-contain lg:pt-3 pt-[100px] flex z-10"/>



</div>


        </div>
      );
}
 
export default Remarks3;