"use client";
import React from "react";
import { ContainerScroll } from "@/components/ContainerScroll";
import Image from "next/image";
import Appbar from "@/components/Appbar";

export default function Wallpanels() {
    return (
        <main>
            <Appbar/>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Your Walls, Your Canvas <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Let’s Paint a Masterpiece!
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/Panels1.png`}
                        alt="hero"
                        height={720}
                        width={720}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

        </main>

    );
}
