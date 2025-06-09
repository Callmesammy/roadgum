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


  const SheetView =()=>{
    const [isClosing, setisClosing] = useState(false)
   return(
    <Sheet open={isClosing} onOpenChange={setisClosing}>
  <SheetTrigger className="">
  <FaGripLines className="size-7 cursor-pointer "/>


  </SheetTrigger>
  <SheetContent side="top" className="pt-10 flex top-20 bg-black text-white right-4">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
)
  }

  export default SheetView;