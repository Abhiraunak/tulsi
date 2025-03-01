import ProductAppbar from "@/components/ProductAppbar";
import Image from "next/image";

export default function Wallpaper() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Appbar */}
            <nav className="sticky top-0 z-50 bg-white shadow-md">
                <ProductAppbar heading="Wallpaper" />
            </nav>

            {/* Content Section */}
            <div className="flex justify-center items-center h-[80vh] bg-black">
                <Image
                    src="/tulsi comming soon.png"
                    alt="Tulsi Coming Soon"
                    height={300}
                    width={300}
                    className="object-contain"
                />
            </div>
        </div>
    );
}
