import BookingButton from "@/components/BookingButoon";
import Header from "@/components/Header";
import ProductAppbar from "@/components/ProductAppbar";
import ProductDescription from "@/components/ProductDescription";
import { Testonomial } from "@/components/Testonomial";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { useEffect, useState } from "react";

export default function Wallpaper() {
     const [isClient, setIsClient] = useState(false);
    
        useEffect(() => {
            setIsClient(true); 
        }, []);
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Appbar */}
            <nav className="sticky top-0 z-50 bg-white shadow-md">
                <ProductAppbar heading="Wallpaper" />
            </nav>

            <main className="max-w-screen h-1/4 mb-10">
                <Header
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Transform walls, elevate spaces, timeless style."}
                    bottomText={"Wall panels: Style, strength, stunning simplicity."}
                />
            </main>

            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2">Browse Space</h1>
                <div className="flex items-center justify-center mx-8 md:mx-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProductDescription imageUrl={"/Wallpanels/Panel1.jpg"} description={"Living Rooms"} />
                        <ProductDescription imageUrl={"/Wallpanels/Panel12.jpg"} description={"Tv Unit"} />
                        <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Bedroom"} />
                    </div>
                </div>
            </section>

            {/* Customer Testimonial Section */}
            <div className="container relative w-full mx-10 md:mx-auto mb-10">
                <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>
                {isClient && <Testonomial />}
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            {/* WhatsApp Button Above Booking Button */}
            <div className="fixed bottom-20 right-5 z-[1100]">
                <WhatsappButton />
            </div>
        </div>
    );
}
