import Image from "next/image";

const BckImg = () => {
    return ( 
        <div className="flex w-full h-full relative overflow-hidden">
            <Image src="/001.png" alt="image" width={200} height={150} className="absolute top-40 left-30 transition-transform opacity-35 animate-bounce duration-1000 ease-in-out " />
            <Image src="/003.png" alt="image" width={200} height={150} className="absolute top-90 left-0  transition-transform opacity-75 scale-100 animate-pulse duration-1000 ease-in-out" />
            <Image src="/004.png" alt="image" width={150} height={150} className="absolute top-10 right-30 transition-transform opacity-75 scale-100 animate-pulse duration-1000 ease-in-out"/>
            <Image src="/005.png" alt="image" width={150} height={150} className="absolute top-90 right-0 transition-transform opacity-35 animate-bounce duration-1000 ease-in-out " />
            <Image src="/002.png" alt="image" width={200} height={150} className="absolute bottom-0 right-70  transition-transform opacity-75 animate-ping duration-1000 ease-in-out " />

       
       
        </div>
     );
}
 
export default BckImg;