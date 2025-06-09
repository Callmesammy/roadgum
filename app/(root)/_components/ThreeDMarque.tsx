"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
   
    "/1.png",
    "/02.png",
    "/03.png",
    "/04.png",
    "/07.png",
    "/01.png",
    "/2.png",
    "/03.png",
    "/4.png",
    "/05.png", "/07.png",
    "/01.png",
    "/02.png",
    "/03.png",
    "/04.png",
    "/05.png",
    "/05.png",
    "/06.png",
    "/07.png",
    "/1.png",
    "/02.png",
    "/03.png",
    "/04.png",
    "/05.png",
    "/06.png",
    "/07.png","/01.png",
    "/02.png",
    "/3.png",
    "/4.png",
    "/05.png",
    "/06.png",
    "/07.png","/01.png",
    "/2.png",
    "/03.png",
    "/04.png",
    "/5.png",
    "/06.png",
    "/07.png",
  ];
  return (
    <div className="mx-auto opacity-60  max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
