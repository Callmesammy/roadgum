import Heading from "./_components/head-project";

interface mainProps{
    children: React.ReactNode
}


const MainPage = ({
    children
}: mainProps) => {
    return ( 
       <div className="flex w-full flex-col">
        <section className="sticky top-0 z-50">
                    <Heading/>

        </section>
       {children}
       </div>
     );
}
 
export default MainPage;