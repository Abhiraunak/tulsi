import { Button } from "./ui/button";

interface ProductBetweenProps {
    imageUrl: string;
    headingText: string;
    bottomText: string;
    buttonText: string;
    to: string;
}

export default function ProductBetween({ imageUrl, headingText, bottomText, buttonText, to }: ProductBetweenProps) {
    return (
        <div
            className="w-full h-[20rem] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label="Product background"
        >
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold text-white mb-2">{headingText}</h1>
                <h3 className="text-base font-normal text-gray-300 mb-4 leading-none tracking-tight">{bottomText}</h3>
                <Button
                    onClick={() => (window.location.href = to)}
                    className="bg-white text-black rounded-lg hover:bg-white hover:font-semibold"
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
