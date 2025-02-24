import Image from "next/image"

interface ProductDescriptionProps {
    imageUrl: string,
    description: string
}

export default function ProductDescription({ imageUrl, description }: ProductDescriptionProps) {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <Image
                    src={imageUrl}
                    alt={description}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                />
            </div>
            <h2 className="text-lg font-medium">
                {description}
            </h2>
        </div>
    )
}