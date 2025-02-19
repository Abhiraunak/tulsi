import Appbar from "@/components/Appbar";
import { images } from "@/components/image";
import ServiceBlock from "@/components/ServiceBlock";
import Slider from "@/components/Slider";
import { Testonomial } from "@/components/Testonomial";

export default function About() {

    return (
        <div>
            <Appbar />
            <div className="w-full max-w-screen-lg overflow-hidden flex mx-auto relative">
                {[...images, ...images].map((img, idx) => (
                    <Slider image={img} key={idx} />
                ))}
                <h1 className="text-white text-4xl uppercase font-bold z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Our Work
                </h1>
            </div>

            {/* Heading */}
            <h1 className="font-bold text-black tracking-tighter text-6xl text-center pt-5">
                Our Services
            </h1>
            {/* Service Blocks */}
            <div className="flex flex-wrap justify-center gap-8 pt-5">
                <ServiceBlock imageSrc="/wall-paint.jpg" title="Wall Paint" alt="Wall Paint Service" />
                <ServiceBlock imageSrc="/wall-panel.png" title="Wall Panel" alt="Wall Panel Service" />
                <ServiceBlock imageSrc="/wallPaper.png" title="Wallpaper" alt="Wallpaper Service" />
                <ServiceBlock imageSrc="/false-celling.png" title="False Ceiling" alt="False Ceiling Service" />
            </div>
            <div className="relative">
                <Testonomial />
            </div>
        </div>

    );
}

