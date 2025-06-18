"use client"

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
    <div className="px-3 flex pt-2 pb-2">


    <Card className={`w-full flex h-[380px] ${color} rounded border border-black shadow-md `}>
      <CardHeader>
        <CardTitle className="flex flex-col gap-3 text-3xl "><Image src={image} alt="bg-image" width={100} height={74} className="object-contain"/> 
         <Link href={`/discovery? `} className="hover:underline"> {label} </Link> 
         </CardTitle>
        <CardDescription className="text-xl text-black">
            {description}
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col txt-md gap-3">
      Popula tags
      <div className="flex gap-2 pt-1 flex-wrap  ">
         <div    className="w-auto bg-black rounded-full truncate overflow-hiddenl">
        <Link href={`/discovery? fiction-book = ${encodeURIComponent(others?.item2 ?? '')}`} className="bg-white h-8 truncate transition-transform hover:-translate-x-1 hover:-translate-y-1 text-xs justify-center  text-center border border-black flex text-black w-auto rounded-full p-1">{others?.item2}        </Link>
      </div>

      <div className="w-auto bg-black rounded-full">
        <Link href={`/discovery? fiction-book= ${encodeURIComponent(others?.item1 ?? '')}`} className="bg-white h-8 w-auto truncate transition-transform hover:-translate-x-1 hover:-translate-y-1 text-xs justify-center  text-center border border-black flex text-black  rounded-full p-1">{others?.item1}</Link>
      </div>

      <div className="w-auto bg-black rounded-full">
        <Link href={`/discovery? book-keep=${encodeURIComponent(others?.items ?? '')}`} className="bg-white h-8 truncate transition-transform hover:-translate-x-1 hover:-translate-y-1 text-xs justify-center  text-center border border-black flex text-black w-auto rounded-full p-1 ">{others?.items}</Link>
      </div>
      </div>
    
      </CardContent>
      <CardFooter className="flex-col gap-2">
      
      </CardFooter>
    </Card>
    </div>

  )
}
