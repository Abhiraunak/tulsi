import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            {/* Logo Positioned Above */}
            <Image
                src={"/tulsi-logo1.png"}
                alt={"tulsi logo"}
                height={40}
                width={120}
                className="mb-4"
            />

            {/* Bouncing Dots */}
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-green-600 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
}
