"use client";
import React from "react";
import { ContainerScroll } from "@/components/ContainerScroll";
import Image from "next/image";
// import Appbar from "@/components/Appbar";
import ProductDescription from "@/components/ProductDescription";
import ProductBetween from "@/components/ProductBetween";

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
                    <ProductDescription imageUrl={"/Wallpanels/Panel13.jpg"} description={"Wallpanel"} height="400px"/>
                    <ProductDescription imageUrl={"/Wallpanels/Panel26.jpg"} description={"Wallpanel"} height="400px"/>
                </div>

            </div>
        </>


    );
}
