import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa6";
import { FooterItems } from ".";
import Link from "next/link";

const Lastpage = () => {
    return ( 
        <div className="flex h-[500px] px-3 pt-4 bg-black text-white">
            <div className="grid lg:grid-cols-2 w-full px-4">
                <div className="w-full h-full flex flex-col space-y-4">
                <p className="text-5xl tracking-wider">  Subscribe to get tips and tactics to grow the way you want.</p>
               <span className="pt-5 flex gap-3 items-center space-y-2 ">
                 <Input placeholder="Enter your email address" className="flex h-[50px]"/>
                 <Button className="h-[50px] w-[50px] bg-pink-400 hover:bg-pink-300 cursor-pointer"><FaArrowRight  />
                 </Button>
                </span>
                <div>
                    {FooterItems.map((foot, keys)=>(
                        <Link key={keys} href={foot.url}>
                            <h1>{foot.name}</h1>
                        </Link>
                    ))}
                </div>
                </div>

            </div>
        </div>
     );
}
 
export default Lastpage;