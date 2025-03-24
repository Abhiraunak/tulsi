"use client";
import React, { useState, useEffect } from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Header from "@/components/Header";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";
import BookingButton from "@/components/BookingButoon";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { motion } from "framer-motion";


export default function Wallpanels() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    return (
        <>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Wallpaper" />
            </nav>
            <section className="relative w-[120%] text-center py-32 bg-gradient-to-r from-green-700 to-teal-800 text-white overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <motion.div
                    className="relative z-10 max-w-5xl text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg animate-fadeIn">
                      Transform Your Walls, Elevate Your Space!
                    </h1>
                    <p className="mt-6 text-2xl md:text-3xl opacity-90">Wrap Your Walls in Elegance!</p>
                </motion.div>
            </section>
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl text-green-950 md:text-4xl font-semibold mb-6 mx-2 mt-10">Browse Space</h1>
                <div className="flex items-center justify-center mx-8 md:mx-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper3.png"} description={"Living Rooms"} />
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper1.png"} description={"Hallways"} />
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper5.jpg"} description={"Bedroom"} />
                    </div>
                </div>
            </section>
            <div className="container relative max-w-screen-2xl mx-auto pt-5 md:pt-20 pb-10 inset-0">
                <ProductBetween
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends & make a statement like never before"}
                    buttonText={"Browse all space"}
                    to={"/wallpanel/gallery"}
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
