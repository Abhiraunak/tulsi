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
            <div className="h-1/4 w-full flex items-center justify-evenly bg-gray-100">
                <p className="text-lg font-semibold text-gray-700">
                    {title}
                </p>
                <SquareArrowOutUpRight />
            </div>
        </div>
    );
}
