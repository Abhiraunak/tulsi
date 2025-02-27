"use client";
import React from "react";
import { ContainerScroll } from "@/components/ContainerScroll";
import Image from "next/image";
// import Appbar from "@/components/Appbar";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";
import Faq from "@/components/Faq";

export default function Wallpanels() {
    return (
        <>
            <main>
                <div className="flex flex-col overflow-hidden">
                    <ContainerScroll
                        titleComponent={<>
                            <h1 className="text-4xl font-semibold text-black">
                                Your Walls, Your Canvas <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Let's Paint a Masterpiece!
                                </span>
                            </h1>
                        </>}
                    >
                        <Image
                            src={`/Panels1.png`}
                            alt="hero"
                            height={720}
                            width={720}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top"
                            draggable={false} />
                    </ContainerScroll>
                </div>
            </main>
            <section className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Browse Space</h1>
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
            <div className="container relative max-w-screen-xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Browse Look</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <ProductDescription imageUrl={"/Wallpanels/Panel30.png"} description={"Luxury Look"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel31.png"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Wallpanel"} height="400px" />
                    <ProductDescription imageUrl={"/Wallpanels/Panel26.jpg"} description={"Wallpanel"} height="400px" />
                </div>
            </div>

            {/*Frequently ask questions start from here */}

            <div className="container relative max-w-screen-xl mx-auto mt-10">
                <h1 className="text-xl font-semibold">Frequently asked questions</h1>
                <div className="flex flex-col">
                    <Faq
                        ques={"Can panels be installed over existing plywood or tiles?"}
                        ans={"Yes, they can be installed over any surface including tiles, plywood, and drywall"}
                    />
                    <Faq
                        ques="How do I check if my walls are suitable for wall panels?"
                        ans={
                            <>
                                All walls are suitable for panel installation.
                                <br />
                                Any kind of imperfections will be handled by our professional.
                            </>
                        }
                    />
                    <Faq
                        ques={"What are PVC panels?"}
                        ans={"PVC stands for polyvinyl chloride. It is a type of eco-friendly plastic material that is widely used today due to its affordability and ease of installation."}
                    />
                    <Faq
                        ques={"What are charcoal panels?"}
                        ans={"Charcoal wall panels are decorative panels made from charcoal and other materials, such as polystyrene or wood.They can be used for a variety of purposes"}
                    />
                </div>
            </div>
        </>
    );
}
