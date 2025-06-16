import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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
    others,
}:Carditems) {
  return (
    <div className="px-3 flex pt-2 pb-2 bg-orange-400">


    <Card className={`w-full flex h-[350px] bg-${color}-300 rounded border border-black shadow-md `}>
      <CardHeader>
        <CardTitle className="flex flex-col gap-3 text-3xl "><Image src={image} alt="bg-image" width={150} height={74} className="object-contain"/> 
          {label}
         </CardTitle>
        <CardDescription className="text-2xl text-black">
            {description}
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col txt-md gap-3">
      Popula tags
      <div className="flex gap-2">
         <div className="w-12 bg-black rounded-full">
        <Link href={"/discovery"} className="bg-white h-8 transition-transform hover:-translate-x-1.5 hover:-translate-y-1 text-sm justify-center  text-center border border-black flex text-black w-12 rounded-full p-1">{others?.item2}</Link>
      </div>

      <div className="w-22 bg-black rounded-full">
        <Link href={"/discovery"} className="bg-white h-8 transition-transform hover:-translate-x-1.5 hover:-translate-y-1 text-sm justify-center  text-center border border-black flex text-black w-22 rounded-full p-1">{others?.item1}</Link>
      </div>

      <div className="w-12 bg-black rounded-full">
        <Link href={"/discovery"} className="bg-white h-8 transition-transform hover:-translate-x-1.5 hover:-translate-y-1 text-sm justify-center  text-center border border-black flex text-black w-12 rounded-full p-1">{others?.items}</Link>
      </div>
      </div>
     
      </CardContent>
      <CardFooter className="flex-col gap-2">
      
      </CardFooter>
    </Card>
    </div>

  )
}
