import BookingButton from "@/components/BookingButoon";
import ProductAppbar from "@/components/ProductAppbar";
import ProductDescription from "@/components/ProductDescription";
import WhatsappButton from "@/components/WhatsAppIntegration";

export default function Page() {
    return (
        <div>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Wallpaper" />
            </nav>

            {/* Bedroom display start from here */}
            <div className="container relative max-w-screen-xl mx-auto pt-20">
                <h1 className="text-3xl text-green-950 font-semibold mx-3 md:mx-0">Bedroom</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room1.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room2.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room3.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room4.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room5.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpaper/Bedroom/room6.jpg"} description={"Bedroom"} />
                </div>
            </div>

             {/* Living room display start from here */}
             <div className="container relative max-w-screen-xl mx-auto pt-5 pb-20">
                <h1 className="text-3xl text-green-950 font-semibold mx-3 md:mx-0">Living Room</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room1.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room2.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room3.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room4.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room5.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpaper/Livingroom/room6.jpg"} description={"Living Room"} />
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            <div className="fixed bottom-20 right-5 z-[1100]">
                <WhatsappButton />
            </div>
        </div>
    )
}