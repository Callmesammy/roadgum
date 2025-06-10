
import Image from "next/image";


const Remarks2 = () => {
    return (
        <div className="h-full overflow-x-hidden  pt-4 grid lg:grid-cols-[1fr_2fr] bg-teal-500 items-center ">
      <div className="w-full px-10 h-[700px] relative flex items-center justify-center">

             <div className="  pt-4 text-2xl  font-semibold  justify-center  gap-2   items-center flex group  border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
            “Originally, I took pre-orders for my Trend Reports on Gumroad. But I received... exactly $0. So I changed tactics: I made half of my report free, and the other half paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly subscriptions.”

            </div>

            </div>
             <div className="w-full h-[700px] relative flex ">
            <Image src={"/trend.webp"} alt="max image" fill className="object-contain lg:pt-3 pt-[100px] flex z-10"/>
            <Image src={"/freetr.svg"} alt="max image" width={200} height={200} className="z-10 left-4 object-contain pt-[300px] flex lg:absolute"/>
            <div className="absolute  group group-hover:translate-x-2 group-hover:translate-y-2 transition-transform flex items-center justify-center w-42 h-13 bg-black md:right-42 insert-0 bottom-6 lg:right-32 right-12 z-20 p-2 rounded-full">
             <div className=" cursor-pointer gap-2 absolute items-center flex group w-42 h-13 bg-white z-25 p-2 border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">

            <Image src={"/logo.svg"} alt="max image" width={40} height={100} className=" "/>
        <h1 className="font-semibold"> Trendsvc</h1>
            </div>

            </div>

            </div>

     
            
            <div className="w-full flex-col px-3  h-[700px] relative flex justify-center bg-white">
<h1 className="  text-xl">Sell to anyone
</h1>
 <div className=" pt-4 text-xl    justify-center  gap-2 w-full shrink-0   items-center flex group  border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
Build a loyal following with simple posts, email newsletters, and automated workflows. Plus let your customers pay what they want or choose between one-time, recurring, or fixed-length payments in your currency of choice. (We'll handle the fine print, like VAT).
</div>

</div>
 <div className="w-full h-[700px] relative flex bg-yellow-300">
<Image src={"/hm2.svg"} alt="max image" fill className="object-contain lg:pt-3 pt-[100px] flex z-10"/>



</div>


        </div>
      );
}
 
export default Remarks2;