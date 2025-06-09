import Heading from "./_components/head-project";

interface mainProps{
    children: React.ReactNode
}


const MainPage = ({
    children
}: mainProps) => {
    return ( 
       <div className="flex w-full flex-col">
        <Heading/>
       {children}
       </div>
     );
}
 
export default MainPage;