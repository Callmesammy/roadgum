import Image from "next/image";
import { Philosopher, Mulish } from "next/font/google";
import { BackgroundLines } from '@/components/ui/background-lines';
import { Input } from "@/components/ui/input";
import Link from "next/link";
import BckImg from "./_components/back-img";
import AnotherBody from "./_components/another-body";
import Coolbody from "./_components/cool-body";
import Wrightups from "./_components/down-writeups";
import Remarks from "./_components/remarks";
import Remarks2 from "./_components/remarks2";
import { Carding } from "./_components/card-input";
import Remarks3 from "./_components/remarks3";
import Lastpage from "./_components/lastpage";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: '700'
});
const mulish = Mulish({
    subsets: ["latin"],
    weight: '700'
  });

export default function Home() {
  return (
    <div className="flex w-full h-full  bg-muted-forground flex-col ">
       <BackgroundLines className="relative flex items-center justify-center w-full h-screen flex-col border-2 border-black  px-4">
      <h2 className={` ${mulish.className} tracking-wide bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold `}>
      Go from  <br className="md:hidden"/>0 to $1
      </h2>
      <p className={`${mulish.className} max mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center`}>
      Anyone can earn their first dollar online. Just start with what you know,
     <br className="hidden md:flex"/> see what sticks, and get paid.  It's that easy
      </p>
      <div className=" grid space-y-3 md:flex items-center gap-1 pt-6">
      <Link href={"/"}  className="flex group relative w-full">
      
      <div className="w-full justify-center z-20 flex items-center p-5  text-muted-foreground   bg-yellow-400 transition-transform rounded-xl border border-muted-foreground">                 
      <h1 className="text-xl capitalize"> start selling</h1>


 </div>
      <span className=" w-full justify-center text-center cursor-pointer z-30 p-5 flex items-center absolute  bg-black   text-white group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize "> start selling</h1>

         </span> 
         <span className="w-full justify-center z-10 cursor-pointer p-5 flex items-center absolute  bg-red-500   text-white group-hover:translate-y-2 group-hover:translate-x-1 transition-transform rounded-xl border border-muted-foreground">
     <h1 className="text-xl capitalize"> start selling</h1>

         </span>
 </Link>
 <div className=" w-100  items-center z-30 ">
     <Input placeholder="Search Marketplace" className=" bg-black flex w-full h-18 text-lg text-white"/>

 </div>

 </div>
 <div className="absolute flex w-full h-full">
<BckImg/>
</div>
    </BackgroundLines>

{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">

  <AnotherBody/>
</div>

{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">
    <Coolbody/>
</div>
{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">
    <Wrightups/>
</div>
{/*** Image segment  */}

<div className="border-black w-full border-2 bg-white h-full">
<Remarks/>

</div>

<div className="border-black w-full border-2 bg-white h-full">
<Remarks2/>

</div>

<div className="border-black w-full border-2 bg-white h-full">
<div className="px-3 text-5xl tracking-wider  h-[200px] items-center justify-center flex w-full">
<h1 className="font-semibold ">Looking for inspiration on what you can sell?</h1>

</div>
<div className=" grid md:grid-cols-2 lg:grid-cols-3 w-full bg-white h-full">
<Carding color="bg-green-400" others={{items: "Blend", item1: "3d Model", item2: "spark"}} image={"/pic/1.svg"} label="3d" description="Perfect ypur craft with thge same tools used at Dream works and pixar " />
<Carding color="bg-orange-400" others={{items: "Meditations", item1: "hypothesis", item2: "submliminal messages"}} image={"/pic/2.svg"} label="Audio" description="Open your ears and mind to interviews, meditations, and crime thrillers " />
<Carding color="bg-red-400" others={{items: "notion template", item1: "investing", item2: "instagram"}} image={"/pic/3.svg"} label="Business & Money" description="Learn to earn in an increasingly unpredictable world  " />
<Carding color="bg-yellow-400" others={{items: "comic", item1: "manga", item2: "anime"}} image={"/pic/4.svg"} label="Comics & Graphic Novels" description="Matial arts with loads of heart. Wellcome to a paradise " />
<Carding color="bg-gray-400" others={{items: "mockup", item1: "textures", item2: "fonts"}} image={"/pic/5.svg"} label="Design" description="Code, design and ship your dream with these technical resources" />

<Carding color="bg-pink-400" others={{items: "procreate", item1: "brushes", item2: "arts"}} image={"/pic/6.svg"} label="Drawing & Painting" description="Tutorials, plugins, and brushes from pro concept artists and illustrators." />
<Carding color="bg-indigo-400" others={{items: "education", item1: "certification exams", item2: "learning"}} image={"/pic/7.svg"} label="Education" description="Pick up a new skill with courses and guides from world-class pros" />
<Carding color="bg-blue-400" others={{items: "scr-fi", item1: "poetry ", item2: "fiction"}} image={"/pic/8.svg"} label="Fiction Books" description="Short stories, bovellas, and epic tomes full of interesting chracters and worlds" />
<Carding color="bg-rose-400" others={{items: "after effects", item1: "vj loops ", item2: "luts"}} image={"/pic/9.svg"} label="Films" description="have a movie night with some of the best stories to hit the small screen" />

</div>

</div>

{/*** Search Testing segment  ***/}

<div className="border-black w-full border-2 bg-white h-full">
<Remarks3/>

</div>
<div className="border-black w-full border-2 bg-white h-full">
<Lastpage/>

</div>
    </div>
  );
}
