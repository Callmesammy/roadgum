import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa6";
import { FooterItems } from ".";
import Link from "next/link";

const Lastpage = () => {
    return ( 
        <div className="flex  h-[600px] px-3 pt-4 bg-black text-white items-center ">
            <div className="grid gap-x-4 lg:grid-cols-2 w-full px-4 gap-3">
                <div className="w-full h-full flex flex-col space-y-4">
                <p className="text-5xl tracking-wider">  Subscribe to get tips and tactics to grow the way you want.</p>
               <span className="pt-5 flex gap-3 items-center space-y-2 ">
                 <Input placeholder="Enter your email address" className="flex h-[50px]"/>
                 <Button className="h-[50px] w-[50px] bg-pink-400 hover:bg-pink-300 cursor-pointer"><FaArrowRight  />
                 </Button>
                
                </span>
                <div className="flex gap-2  items-center">
                <span className="font-bold p-3 w-5 items-center justify-center flex border-black border-2 h-5 rounded-full text-black bg-pink-400 text-sm">S</span>
<h1 className="text-sm text-muted-foreground"> samsonimoh17@gamil</h1>
                </div>
                </div>
                <div>
<div className="w-full grid grid-cols-2 justify-center ">
                    {FooterItems.map((foot, keys)=>(
                        <Link key={keys} href={foot.url} className="p-1 text-lg cursor-pointer hover:text-pink-400 flex" >
                            <h1>{foot.name}</h1>
                        </Link>
                    ))}
                </div>
                <div className="pt-10">
                    <a href={"/"}>X</a>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Lastpage;