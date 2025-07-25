"use client";
import React, { useState, useEffect } from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";
import BookingButton from "@/components/BookingButoon";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Wallpaper() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Wallpaper" />
            </nav>

            {/* Hero Section - Made Responsive */}
            <section className="relative w-full text-center py-16 md:py-32 bg-gradient-to-r from-green-700 to-teal-800 text-white flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <motion.div
                    className="relative z-10 max-w-5xl px-4 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl mt-5 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg animate-fadeIn">
                        Transform Your Walls, Elevate Your Space!
                    </h1>
                    <p className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl opacity-90">
                        Wrap Your Walls in Elegance!
                    </p>
                </motion.div>
            </section>

            {/* Browse Space Section */}
            <section className="container relative max-w-screen-xl mx-auto px-4">
                <TextAnimate
                    className="text-green-900 text-3xl md:text-4xl font-bold my-4 md:my-6"
                    text="Browse Space"
                    type="popIn"
                />
                <div className="w-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpaper/Livingroom/room5.jpg"} description={"Living Rooms"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpaper/wallpaper1.png"} description={"Lobby"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Wallpaper/Bedroom/room4.jpg"} description={"Bedroom"} />
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
                    to={"/wallpaper"}
                />
            </div>

            {/* Browse Look Section */}
            <div className="container relative max-w-screen-xl mx-auto mb-10 px-4">
                <TextAnimate
                    className="text-green-900 text-3xl md:text-4xl font-bold my-4 md:my-6"
                    text="Browse Look"
                    type="popIn"
                />
                <div className="flex flex-col items-center sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpaper/Livingroom/room5.jpg"} description={"Luxury Look"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper5.jpg"} description={"Aesthetic"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper4.png"} description={"Affluence"} height="400px" />
                    </div>
                    <div className="w-full max-w-md sm:max-w-none">
                        <ProductDescription imageUrl={"/Wallpaper/wallpaper2.png"} description={"Exquisite charm"} height="400px" />
                    </div>
                </div>
            </div>

            {/* Customer Testimonial Section */}
            <div className="container relative w-full mx-auto mb-10 px-4">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
                    Read trusted reviews from our customers
                </h2>
                {isClient && <Testonomial />}
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            {/* WhatsApp Button Above Booking Button */}
            <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-[1100]">
                <WhatsappButton />
            </div>
        </div>
    );
}