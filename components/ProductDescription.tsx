import { MoveRight } from "lucide-react";
import { Card } from "./ui/card";

interface ProductDescriptionProps {
    imageUrl: string;
    description: string;
    width?: string;
    height?: string;
}

export default function ProductDescription({
    imageUrl,
    description,
    width = "400px",
    height = "300px",
}: ProductDescriptionProps) {
    return (
        <div className="max-w-screen-2xl mx-auto p-4">
            <Card
                className="rounded-xl w-full overflow-hidden shadow-lg transition-transform "
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width,
                    height,
                }}
            />
            <div className="flex items-center space-x-1 cursor-pointer">
                <h2 className="text-lg font-medium mt-2">
                    {description}
                </h2>
                <MoveRight className="pt-2" />
            </div>
        </div>
    );
}
