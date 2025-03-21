import React from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Header from "@/components/Header";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";
import BookingButton from "@/components/BookingButoon";
import WhatsappButton from "@/components/WhatsAppIntegration";

export default function Flooring() {
    return (
        <>
            <nav className="sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Flooring" />
            </nav>
            <main className="w-full h-1/4 mb-10">
                <Header
                    imageUrl={"/Flooring/flooring27.jpg"}
                    headingText={"Give Your Walls the Wow Factor"}
                    bottomText={"Brush Up Your Walls, Brighten Up Your Life!"}
                />
            </main>
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Browse Space</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProductDescription imageUrl={"/Flooring/flooring5.jpg"} description={"Living Rooms"} />
                    <ProductDescription imageUrl={"/Flooring/flooring7.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Flooring/flooring25.jpg"} description={"Bedroom"} />
                </div>
            </section>
            <div className="container relative max-w-screen-2xl mx-auto pt-20 pb-10">
                <ProductBetween
                    imageUrl={"/Flooring/flooring24.jpg"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends & make a statement like never before"}
                    buttonText={"Browse all space"}
                    to={"/flooring/gallery"}
                />
            </div>
            <div className="container relative max-w-screen-xl mx-auto mb-10">
                <h1 className="text-2xl font-semibold mb-6">Browse Look</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <ProductDescription imageUrl={"/Flooring/flooring14.jpg"} description={"Luxury Look"} height="400px" />
                    <ProductDescription imageUrl={"/Flooring/flooring4.jpg"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Flooring/flooring11.jpg"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Flooring/flooring19.jpg"} description={"Wallpanel"} height="400px" />
                </div>
            </div>
            {/* Coustomer testinomial section start from here */}
            <div className="container relative w-full mx-auto mb-10">
                <h1 className="text-3xl font-bold text-zinc-800 mb-2">What our Coustomer says about us</h1>
                <Testonomial />
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            {/* WhatsApp Button Above Booking Button */}
            <div className="fixed bottom-20 right-5 z-[1100]">
                <WhatsappButton />
            </div>
        </>
    )
}