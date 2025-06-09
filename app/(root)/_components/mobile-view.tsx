"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useState } from "react";
  import { FaGripLines } from "react-icons/fa";
import { Document11 } from ".";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";


  const SheetView =()=>{
    const pathName = usePathname()
    const [isClosing, setisClosing] = useState(false)
   return(
    <Sheet open={isClosing} onOpenChange={setisClosing}>
  <SheetTrigger className="">
  <FaGripLines className="size-7 cursor-pointer "/>


  </SheetTrigger>
  <SheetContent side="top" className="pt-10 text-center flex top-20 bg-black text-white ">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription className="flex text-center justify-center items-center w-full flex-col gap-2 p-2">
                       {Document11.map((doc, keys)=>{
                           const isActive = pathName ===doc.url || pathName.startsWith(`${doc.url}/`)
                           return(
                               <Link onClick={()=> setisClosing(false)} href={doc.url} key={keys} className={cn("  cursor-pointer p-2 tracking-wide border border-black flex hover:border-muted-foreground rounded-full hover:border transition-transform", isActive && "p-2 tracking-wide bg-white font-semibold text-pretty text-black ")}>
                                       <span className="text-lg justify-center capitalize flex  items-center ">{doc.label}</span>
                               </Link>
                           )
                       })}
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
)
  }

  export default SheetView;