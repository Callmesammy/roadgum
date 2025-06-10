import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });


const Coolbody = () => {
    return (  
        <div className="grid md:grid-cols-2 w-full">
            <div className="flex border justify-center border-black w-full h-92 items-center bg-pink-900/85 md:px-8 ">
            <h1 className={`${mulish.className} text-center flex lg:text-5xl text-4xl  px-2 pt-3`}>Don't take risks. <br/> That's scary!</h1>

</div>
<div className="flex  w-full h-92 justify-center items-center border border-black bg-pink-400 md:px-8 ">
            <h1 className={`${mulish.className} text-center flex lg:text-5xl text-4xl px-2 pt-3`}>Place small bets. <br/> That's exciting!</h1>

</div>      

<div className="flex  w-full lg:h-[700px] h-[700px]   bg-black md:px-8 relative">
          <span className=" absolute w-62 bg-white flex h-15 items-center text-lg px-2 z-10 rounded-full border-2 border-black  top-32 text-black"> Instead of selling a book...</span>
            <Image src={"/sadbk.svg"} fill alt="img" className="object-contain flex w-72 items-center justify-center "/>
</div>   
<div className="flex  w-full lg:h-[700px] h-[700px]  bg-yellow-500 md:px-8 relative">
          <span className=" absolute w-72 bg-white flex h-15 items-center text-lg px-2 z-10 rounded-full border-2 border-black top-62 text-black"> ...start by selling a blog post!</span>
            <Image src={"/blog.svg"} fill alt="img" className="object-contain flex w-72 items-center justify-center "/>

            <Image src={"/excite.svg"} height={3} width={2} alt="img" className=" absolute bottom-0 flex w-62 right-22 items-center justify-center "/>

</div>   

  </div>
    );
}
 
export default Coolbody;