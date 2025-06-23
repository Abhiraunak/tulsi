"use client";
import Appbar from "@/components/Appbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <div className="relative max-w-screen-2xl mx-auto min-h-screen bg-white/10 overflow-hidden">
            <Appbar />
            <BackgroundVideo />
            <div className="flex flex-col items-center justify-center h-[90vh] text-center px-4 z-10">
                {/* Heading Line 1 */}
                <h1 className="text-gray-900 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    From concept to reality,
                </h1>

                {/* Heading Line 2 */}
                <h1 className="text-gray-900 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    we build your <AuroraText>&nbsp;Vision</AuroraText>
                </h1>

                {/* Rotating Text Section */}
                <div className="mt-4 flex flex-wrap items-center justify-center text-lg sm:text-xl md:text-2xl px-2">
                    <span className="w-full sm:w-auto mr-2 text-black font-semibold text-center sm:text-left">
                        we provided expert solution for
                    </span>
                    <span className="w-full sm:w-[160px] inline-block">
                        <WordRotate
                            className="text-xl font-bold text-green-950 text-left"
                            words={["Wallpanel", "False-celling", "Wallpaint", "False-celling", "Flooring"]}
                        />
                    </span>
                </div>
                <div className="relative">
                    <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="w-60 transform rounded-lg bg-[#008000] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006400] dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        Explore Now
                    </button>
                    <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                        Contact Support
                    </button>
                </motion.div></div>
            </div>
        </div>
    );
}