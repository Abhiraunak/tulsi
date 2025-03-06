"use client";
import React, { useState, useEffect } from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Header from "@/components/Header";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";
import BookingButton from "@/components/BookingButoon";
import WhatsappButton from "@/components/WhatsAppIntegration";


export default function Wallpanels() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures client-only rendering for dynamic content
    }, []);

    return (
        <>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="False-Celling" />
            </nav>
            <main className="max-w-screen h-1/4 mb-10">
                <Header
                    imageUrl={"/Falsecelling/celling_banner.png"}
                    headingText={"Transform your ceiling, transform your home !"}
                    bottomText={"Enhance your home, starting from the top."}
                />
            </main>
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2">Browse Space</h1>
                <div className="flex items-center justify-center mx-8 md:mx-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProductDescription imageUrl={"/Falsecelling/bedroom/design5.jpg"} description={"Bed Rooms"} />
                        <ProductDescription imageUrl={"/Falsecelling/livingroom/design2.jpg"} description={"Living Room"} />
                        <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Bedroom"} />
                    </div>
                </div>
            </section>
            <div className="container relative max-w-screen-2xl mx-auto pt-5 md:pt-20 pb-10">
                <ProductBetween
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends & make a statement like never before"}
                    buttonText={"Browse all space"}
                    to={"/falsecelling/gallery"}
                />
            </div>
            <div className="container relative max-w-screen-xl mx-auto mb-10">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2">Browse Look</h1>
                <div className="mx-8 md:mx-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <ProductDescription imageUrl={"/Wallpanels/Panel30.png"} description={"Luxury Look"} height="400px" />
                        <ProductDescription imageUrl={"/Wallpanels/Panel31.png"} description={"Wallpanel"} height="400px" />
                        <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Wallpanel"} height="400px" />
                        <ProductDescription imageUrl={"/Wallpanels/Panel26.jpg"} description={"Wallpanel"} height="400px" />
                    </div>
                </div>
            </div>

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

        </>
    );
}
