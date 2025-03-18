import BookingButton from "@/components/BookingButoon";
import ProductAppbar from "@/components/ProductAppbar";
import ProductDescription from "@/components/ProductDescription";
import WhatsappButton from "@/components/WhatsAppIntegration";

export default function Page() {
    return (
        <div>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Flooring" />
            </nav>

            {/*tv unit display start from here  */}
            <div className="container relative max-w-screen-xl mx-auto pt-20 ">
                <h1 className="text-3xl text-green-950 font-medium mx-3 md:mx-0">Tv unit</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit1.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit9.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit4.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit10.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit11.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Tvunit/unit6.jpg"} description={"Tv Unit"} />
                </div>
            </div>

            {/* Bedroom display start from here */}
            <div className="container relative max-w-screen-xl mx-auto pt-5">
                <h1 className="text-3xl text-green-950 font-medium mx-3 md:mx-0">Bedroom</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room1.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room2.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room3.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room4.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room5.jpg"} description={"Bedroom"} />
                    <ProductDescription imageUrl={"/Wallpanels/Bedroom/room6.jpg"} description={"Bedroom"} />
                </div>
            </div>

             {/* Living room display start from here */}
             <div className="container relative max-w-screen-xl mx-auto pt-5 pb-20">
                <h1 className="text-3xl text-green-950 font-medium mx-3 md:mx-0">Living Room</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living1.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living2.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living3.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living4.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living5.jpg"} description={"Living Room"} />
                    <ProductDescription imageUrl={"/Wallpanels/Livingroom/living6.jpg"} description={"Living Room"} />
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