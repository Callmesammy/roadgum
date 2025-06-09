
import { Mulish } from "next/font/google";
import Link from "next/link";

const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });

const AnotherBody = () => {
    return (  
        <div className="w-full flex h-full flex-col ">
<div className="w-full h-52 flex bg-white items-center justify-center">

    <h1 className={`${mulish.className} text-center flex text-4xl px-2`}>You know all those great ideas you have? </h1>
</div>
<div className="flex  w-full h-72 bg-yellow-500/75 md:px-8 md:rounded-full">

<video   src="/vid.mov"
  autoPlay
  muted
  loop
  playsInline
  className="w-full  rounded-full relative flex object-contain opacity-55"/>
</div>

<div className="w-full h-82 flex flex-col bg-white items-center justify-center">

    <h1 className={`${mulish.className} text-center flex text-4xl px-2 pt-3`}>We want you to try them, lots of them, and find out what works. </h1>
    <p className={`${mulish.className} text-center flex text-md pt-3 px-2`}>
    You don't have to be a tech expert or even understand how to start a business. You just gotta take what you know and sell it.
    </p>

    <Link href={"/"}  className="flex group relative w-42 pt-6">
      
      <div className="w-full justify-center z-20 flex items-center p-4  text-muted-foreground   bg-yellow-400 transition-transform rounded-xl border border-muted-foreground">                 
      <h1 className="text-xl capitalize"> start selling</h1>


 </div>
      <span className=" w-full justify-center text-center cursor-pointer z-30 p-4 flex items-center absolute  bg-black   text-white group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize "> start selling</h1>

         </span> 
         <span className="w-full justify-center z-10 cursor-pointer p-4 flex items-center absolute  bg-red-500   text-white group-hover:translate-y-2 group-hover:translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize"> start selling</h1>

         </span>
 </Link>
</div>
        </div>
    );
}
 
export default AnotherBody;