import Image from "next/image";
import { SquareArrowOutUpRight } from 'lucide-react';

interface CardProps {
    imageSrc: string;
    title: string;
    alt?: string;
    to?: string;
}

export default function ServiceBlock({ imageSrc, title, alt }: CardProps) {
    return (
        <div className="w-48 aspect-square
                      bg-white 
                        rounded-lg 
                        shadow-lg 
                        overflow-hidden 
                        flex flex-col items-center justify-center 
                        border-2 border-gray-300
                        ">
            {/* Image Section */}
            <div className="w-full h-3/4 relative">
                <Image
                    src={imageSrc}
                    alt={alt || "Card Image"}
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            {/* Text Section */}
            <div className="h-1/4 w-full flex items-center justify-evenly bg-black">
                <p className="text-lg font-semibold text-white">
                    {title}
                </p>
                <SquareArrowOutUpRight className="bg-white" />
            </div>
        </div>
    );
}
