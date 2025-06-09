import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });


const Coolbody = () => {
    return (  
        <div className="grid md:grid-cols-2 w-full">
            <div className="flex  w-full h-62 items-center bg-pink-900/85 md:px-8 ">
            <h1 className={`${mulish.className} text-center flex text-4xl px-2 pt-3`}>Don't take risks. That's scary!</h1>

</div>
<div className="flex  w-full h-62 items-center bg-pink-400 md:px-8 ">
            <h1 className={`${mulish.className} text-center flex text-4xl px-2 pt-3`}>Place small bets. That's exciting!</h1>

</div>      

<div className="flex  w-full h-[400px]  bg-black md:px-8 relative">
          <span className=" absolute w-62 bg-white flex h-15 items-center text-lg px-2 z-10 rounded-full border-2 border-black top-3 text-black"> Instead of selling a book...</span>
            <Image src={"/sadbk.svg"} fill alt="img" className="object-contain flex w-72 items-center justify-center "/>
</div>   
<div className="flex  w-full h-[400px]  bg-yellow-500 md:px-8 relative">
          <span className=" absolute w-62 bg-white flex h-15 items-center text-lg px-2 z-10 rounded-full border-2 border-black top-3 text-black"> ...start by selling a blog post!</span>
            <Image src={"/blog.svg"} fill alt="img" className="object-contain flex w-72 items-center justify-center "/>

            <Image src={"/excite.svg"} height={3} width={2} alt="img" className=" absolute bottom-0 flex w-32 right-0 items-center justify-center "/>

</div>   

  </div>
    );
}
 
export default Coolbody;