"use client"
import { motion } from "framer-motion";
import Image from "next/image";

interface SliderProps {
    image: string;
}

export default function Slider({ image }: SliderProps) {  
    const direction = "left";

    return (
        <motion.div
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 border-slate-700 px-2 py-6 md:w-[450px]"
            key={image}
            initial={{ x: direction === "left" ? "0" : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : "0" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
            <Image 
                src={image} 
                alt={image} 
                width={500}  // Adjust width dynamically based on image
                height={300} // Adjust height dynamically based on image
                style={{ objectFit: "cover" }} 
                className="min-h-32"
            />
        </motion.div>
    );
};
