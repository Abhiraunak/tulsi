import ServiceBlock from "@/components/ServiceBlock";

export default function About(){
    return(
        <div>
            hi from about us page
            <ServiceBlock imageSrc={"/tulsi-logo.png"} title={"service 1"} alt="service 1"/>
        </div>
    );
}