"use client";
import React from "react";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import { Testonomial } from "@/components/Testonomial";
import ProductAppbar from "@/components/ProductAppbar";

export default function Wallpanels() {
    return (
        <>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Wall panel" />
            </nav>
            <main className="max-w-screen h-1/4 mb-10">
                <Header
                    imageUrl={"/Wallpanels/Panel27.jpg"}
                    headingText={"Transform walls, elevate spaces, timeless style."}
                    bottomText={"Wall panels: Style, strength, stunning simplicity."}
                />
            </main>
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-semibold mb-6">Browse Space</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProductDescription imageUrl={"/Wallpanels/Panel1.jpg"} description={"Living Rooms"} />
                    <ProductDescription imageUrl={"/Wallpanels/Panel12.jpg"} description={"Tv Unit"} />
                    <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Bedroom"} />
                </div>
            </section>
            <div className="container relative max-w-screen-2xl mx-auto pt-20 pb-10">
                <ProductBetween
                    imageUrl={"/Wallpanels/Panel30.png"}
                    headingText={"Style it your way"}
                    bottomText={"Shape your spaces with most soothing trends & make a statement like never before"}
                    buttonText={"Browse all space"}
                    to={"/"}
                />
            </div>
            <div className="container relative max-w-screen-xl mx-auto mb-10">
                <h1 className="text-2xl md:text-4xl font-semibold mb-6">Browse Look</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <ProductDescription imageUrl={"/Wallpanels/Panel30.png"} description={"Luxury Look"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel31.png"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel26.jpg"} description={"Wallpanel"} height="400px" />
                </div>
            </div>
            {/* Coustomer testinomial section start from here */}
            <div className="container relative w-full mx-auto mb-10">
                <h1 className="text-3xl font-bold text-zinc-800 mb-2">What our Coustomer says about us</h1>
                <Testonomial />
            </div>

            {/* Frequently Asked Questions Section */}
            <div className="container max-w-screen-xl mx-auto py-10 border-t-2 border-b-2 border-zinc-500">
                <h1 className="text-3xl text-center font-bold text-zinc-800 mb-8">Frequently Asked Questions</h1>

                <div className="flex flex-col space-y-6">
                    <Faq
                        ques="Can panels be installed over existing plywood or tiles?"
                        ans="Yes, they can be installed over any surface including tiles, plywood, and drywall."
                    />
                    <Faq
                        ques="How do I check if my walls are suitable for wall panels?"
                        ans={
                            <>
                                All walls are suitable for panel installation.
                                <br />
                                Any kind of imperfections will be handled by our professionals.
                            </>
                        }
                    />

                    <Faq
                        ques="What are PVC panels?"
                        ans={
                            <>
                                PVC stands for polyvinyl chloride. It is a type of eco-friendly plastic
                                <br />
                                Any kind of imperfections will be handled by our professionals.
                            </>
                        }
                    />

                    <Faq
                        ques="What are charcoal panels?"
                        ans={
                            <>
                                Charcoal wall panels are decorative panels made from charcoal and other materials,
                                <br />
                                such as polystyrene or wood. They can be used for a variety of purposes.
                            </>
                        }
                    />
                </div>
            </div>
        </>
    );
}
