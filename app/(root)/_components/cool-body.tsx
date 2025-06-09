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

<div className="flex  w-full h-[400px] items-center bg-black md:px-8 relative">
            <Image src={"/sadbk.svg"} fill alt="img" className="object-contain flex w-72 items-center justify-center "/>
</div>   

  </div>
    );
}
 
export default Coolbody;