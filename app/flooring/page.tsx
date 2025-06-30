"use client";
import React, { useState, useEffect } from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Header from "@/components/Header";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";
import BookingButton from "@/components/BookingButoon";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { TextAnimate } from "@/components/ui/text-animate";


export default function Wallpanels() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="overflow-x-hidden bg-green-100">
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Flooring" />
            </nav>
            <main className="max-w-screen h-1/4 mb-10 mx-auto">
                <Header
                    imageUrl={"/Flooring/Flooring1.png"}
                    headingText={"Strong Foundations Begin with the Right Flooring."}
                    bottomText={"Tailor-Made Flooring for Every Room & Every Style."}
                />
            </main>
            <section className="mx-auto">
                <TextAnimate
                    className="text-green-900 text-4xl md:text-6xl font-bold mt-2 mb-3 mx-4"
                    text="Browse Space"
                    type="popIn"
                />
                <div className="w-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpanels/Panel1.jpg"} description={"Living Rooms"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpanels/Panel12.jpg"} description={"Tv Unit"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Bedroom"} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full py-5 md:py-20">
                <ProductBetween
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends"}
                    buttonText={"Browse all space"}
                    to={"/flooring"}
                />
            </div>
            
            <div className="mx-auto mb-10">
                <TextAnimate
                    className="text-green-900 text-4xl md:text-6xl font-bold mt-2 mb-3 mx-4"
                    text="Browse Look"
                    type="popIn"
                />
                <div className="flex flex-col items-center sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpanels/Panel30.png"} description={"Luxury Look"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpanels/Panel31.png"} description={"Wallpanel"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Wallpanel"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpanels/Panel26.jpg"} description={"Wallpanel"} height="400px" />
                    </div>
                </div>
            </div>

            {/* Customer Testimonial Section */}
            <div className="container relative w-full mx-auto mb-10">
                <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-green-950 sm:text-5xl">
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
