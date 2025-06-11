import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Carditems } from './index.d';
import Image from "next/image";
import Link from "next/link";



export function Carding({
    id,
    image,
    color,
    label,
    description,
    others={}
}:Carditems) {
  return (
    <div className="w-full h-full px-2 p-2">

    <Card className={`${color} w-full  border rounded-md h-[300] border-black`}>
      <CardHeader>       
         <Image src={image} alt="image" width={120} height={150}/>

        <CardTitle className="text-3xl"><Link href={"/discovery"} className="hover:underline">{label} </Link></CardTitle>
        <CardDescription className="text-lg flex flex-col">
            {description}
            <div className="text-sm pt-4 text-black ">Popular tags     </div>
            <div className=" relative pt-3 gap-3 flex">
                    <div className="group text-black text-sm  group-hover:translate-x-2 group-hover:translate-y-2 transition-transform flex items-center justify-center w-12 h-10 bg-black md:right-42 insert-0 bottom-6 lg:right-32  z-20  rounded-full">
                        <Link href={"/discovery"} className=" group cursor-pointer  items-center flex w-12  h-10 bg-white z-25  border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
                    {others.item1}   

                    </Link>
                    </div>
                    <div className="group text-black  text-sm  group-hover:translate-x-2 group-hover:translate-y-2 transition-transform flex items-center justify-center w-12 h-10 bg-black md:right-42 insert-0 bottom-6 lg:right-32  z-20  rounded-full">
                        <Link href={"/discovery"} className=" group cursor-pointer  items-center flex w-12  h-10 bg-white z-25  border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
                     {others.item2} 

                    </Link>
                    </div>
                    <div className="group text-black  text-sm  group-hover:translate-x-2 group-hover:translate-y-2 transition-transform flex items-center justify-center w-12 h-10 bg-black md:right-42 insert-0 bottom-6 lg:right-32  z-20  rounded-full">
                        <Link href={"/discovery"} className=" group cursor-pointer  items-center flex w-12  h-10 bg-white z-25  border-2 border-black rounded-full  group-hover:-translate-x-1 duration-300 group-hover:-translate-y-1 transition-transform">
                   {others.items}

                    </Link>
                    </div>
                    </div>
        
        </CardDescription>
        
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
          
      </CardContent>
      
    </Card>
    </div>

  )
}
