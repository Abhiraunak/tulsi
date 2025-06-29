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
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2">Browse Space</h1>
                <div className="flex items-center justify-center mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProductDescription imageUrl={"/Flooring/flooring4.jpg"} description={"Living Rooms"} />
                        <ProductDescription imageUrl={"/Flooring/flooring7.jpg"} description={"Bathroom"} />
                        <ProductDescription imageUrl={"/Flooring/flooring5.jpg"} description={"Bedroom"} />
                    </div>
                </div>
            </section>
            <div className="container relative max-w-screen-2xl mx-auto pt-5 md:pt-20 pb-10 inset-0">
                <ProductBetween
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends & make a statement like never before"}
                    buttonText={"Browse all space"}
                    to={"/flooring"}
                />
            </div>
            <div className="container relative max-w-screen-xl mx-auto mb-10">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2">Browse Look</h1>
                <div className="mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <ProductDescription imageUrl={"/Flooring/flooring22.jpg"} description={"Luxury Look"} height="400px" />
                        <ProductDescription imageUrl={"/Flooring/flooring12.jpg"} description={"Wooden"} height="400px" />
                        <ProductDescription imageUrl={"/Flooring/flooring5.jpg"} description={"White"} height="400px" />
                        <ProductDescription imageUrl={"/Flooring/flooring13.jpg"} description={"Asthetic"} height="400px" />
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
