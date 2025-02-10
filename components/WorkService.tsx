import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export const WorkService = () => {
    return (
        <div>
            <h1 className="font-extrabold text-4xl mb-4 mx-auto self-start">Our Work</h1>
            <div className="w-[350px] h-[350px] flex justify-center items-center border-solid border-gray-300 shadow-lg">
                <Card className="w-[350px] h-[350px] flex justify-center items-center">
                    <Carousel className="w-full h-full">
                        <CarouselContent className="flex w-full h-full">
                            <CarouselItem className="flex justify-center items-center w-full h-full">
                                <img src="/tulsi-logo.png" width={300} height={300} className="object-contain" alt="Tulsi Logo" />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full h-full">
                                <img src="/tulsi-logo.png" width={300} height={300} className="object-contain" alt="Tulsi Logo" />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full h-full">
                                <img src="/tulsi-logo.png" width={300} height={300} className="object-contain" alt="Tulsi Logo" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md" />
                    </Carousel>
                </Card>
            </div>
            </div>
    )
}
