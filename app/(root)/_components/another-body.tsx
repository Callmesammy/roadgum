
import { Mulish } from "next/font/google";

const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });

const AnotherBody = () => {
    return (  
        <div className="w-full flex h-full flex-col ">
<div className="w-full h-52 flex bg-white items-center border border-black justify-center">

    <h1 className={`${mulish.className} text-center flex text-4xl`}>You know all those great ideas you have? </h1>
</div>
        <video src={"/vid.mov"} alt="movie" autoPlay />
        </div>
    );
}
 
export default AnotherBody;