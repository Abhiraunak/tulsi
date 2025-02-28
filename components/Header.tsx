import Image from "next/image";
import { Card } from "./ui/card";

interface headerProps {
    imageUrl: string;
    headingText: string;
    bottomText: string;
}

export default function Header({ imageUrl, headingText, bottomText }: headerProps) {
    return (
        <div
            className="w-full h-[20rem] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label="Product background"
        >
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold text-white mb-2">{headingText}</h1>
                <h3 className="text-base font-normal text-gray-300 mb-4 leading-none tracking-tight">{bottomText}</h3>
            </div>
        </div>
    )
}