import HearderPT from "../_components/header-segment";


interface DiscoverProps{
    children: React.ReactNode
}

const Discovery = ({children}:DiscoverProps) => {
    return ( 
        <div className="flex flex-col w-full bg-primary text-white">
            <HearderPT/>
            {children}
        </div>
     );
}
 
export default Discovery;