import Image from "next/image";

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
                    objectFit="cover"
                />
            </div>

            {/* Text Section */}
            <div className="h-1/4 w-full flex items-center justify-center bg-gray-100">
                <p className="text-lg font-semibold text-gray-700">
                    {title}
                </p>
            </div>
        </div>
    );
}