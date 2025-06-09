
import { Mulish } from "next/font/google";

const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });

const AnotherBody = () => {
    return (  
        <div className="w-full flex h-full flex-col ">
<div className="w-full h-62 flex bg-white items-center justify-center">

    <h1 className={`${mulish.className} text-center flex text-4xl`}>You know all those great ideas you have? </h1>
</div>
<div className="flex  w-full h-72 bg-yellow-500/75 md:px-8 md:rounded-full">

<video   src="/vid.mov"
  autoPlay
  muted
  loop
  playsInline
  className="w-full  rounded-full relative flex object-contain opacity-55"/>
</div>

        </div>
    );
}
 
export default AnotherBody;