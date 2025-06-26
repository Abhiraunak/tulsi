"use client";
import Appbar from "@/components/Appbar";
import BackgroundVideo from "@/components/BackgroundVideo";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <div className="relative max-w-screen-2xl mx-auto min-h-screen bg-black/20 overflow-hidden">
            <Appbar />
            <BackgroundVideo />
            <div className="flex flex-col items-center justify-center h-[90vh] text-center px-4 z-10">
                {/* Heading Section - First line smaller than second */}
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                        From concept to reality,
                    </h1>
                    
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-2">
                        we build your <AuroraText>Vision</AuroraText>
                    </h1>
                </div>

                {/* Subheading Section - Always inline */}
                <div className="mt-4 text-lg sm:text-xl md:text-2xl px-2 flex flex-wrap items-center justify-center">
                    <span className="text-white font-medium md:font-semibold mr-2">
                        we provide expert solutions for
                    </span>
                    <div className="inline-block min-w-[120px] text-left">
                        <WordRotate
                            className="text-xl font-bold text-[#d81159]"
                            words={["Wallpanel", "Wallpaper", "False-ceiling", "Wallpaint", "Flooring"]}
                        />
                    </div>
                </div>
                
                {/* Buttons Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                    className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
                >
                    <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#008000] font-medium text-white transition-all duration-300 hover:bg-[#006400]">
                        Explore Now
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-gray-300 bg-white font-medium text-black transition-all duration-300 hover:bg-gray-100">
                        Contact Support
                    </button>
                </motion.div>
            </div>
        </div>
    );
}