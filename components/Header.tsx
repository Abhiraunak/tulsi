interface headerProps {
    imageUrl: string;
    headingText: string;
    bottomText: string;
}

export default function Header({ imageUrl, headingText, bottomText }: headerProps) {
    return (
        <div className="w-full overflow-x-hidden"> {/* Added wrapper to contain overflow */}
            <div
                className="w-[120%] md:w-full min-h-[15rem] md:min-h-[25rem] lg:min-h-[25rem] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 md:p-8 -ml-[10%] md:ml-0" // Added negative margin
                style={{ backgroundImage: `url(${imageUrl})` }}
                aria-label="Product background"
            >
                <div className="flex flex-col items-center text-center pt-10">
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold tracking-tighter text-white mb-2">
                        {headingText}
                    </h1>
                    <h3 className="text-sm md:text-base lg:text-lg font-normal text-gray-300 mb-4 leading-none tracking-tight">
                        {bottomText}
                    </h3>
                </div>
            </div>
        </div>
    )
}