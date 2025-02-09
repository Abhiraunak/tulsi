import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


export default function Services() {
    return (
        <div className="grid grid-cols-1 gap-y-5 lg:gap-x-5 lg:grid-cols-5 w-screen py-5 lg:py-8">
            <div className="col-span-3 lg: order-1 px-10">
                <Card className="border-gray-600 shadow-lg">
                    <CardContent>
                        <div className="py-4">
                            <h1 className="text-2xl font-bold tracking-tighter">
                                Book a service
                            </h1>
                        </div>
                        <form className="space-y-3">
                            <div>
                                <Label htmlFor="email" className="font-semibold tracking-tight text-lg">Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="font-semibold tracking-tight text-lg">Phone Number</Label>
                                <Input
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="font-semibold tracking-tight text-lg">Services</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose a Service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="wallPaint">Wall Paint</SelectItem>
                                        <SelectItem value="WallPanel">Wall Panel</SelectItem>
                                        <SelectItem value="WallPaper">WallPaper</SelectItem>
                                        <SelectItem value="FalseCelling">False Celling</SelectItem>
                                        <SelectItem value="Flooring">Flooring</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="email" className="font-semibold tracking-tight text-lg">Address</Label>
                                <Input
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>

                        </form>
                        <div className="pt-8">
                            <Button className="w-full">
                                Book your service
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 order-1">
                <h1 className="font-extrabold text-4xl mb-4">Our Work</h1>
                <div className="w-[350px] h-[350px] overflow-hidden  border-solid border-gray-300 shadow-lg">
                    <Carousel>
                        <CarouselContent className="flex">
                            <CarouselItem className="flex justify-center items-center w-full">
                                <img src="/tulsi-logo.png" width={300} height={300} alt="Tulsi Logo" />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full">
                                <img src="/tulsi-logo.png" width={300} height={300} alt="Tulsi Logo" />
                            </CarouselItem>
                            <CarouselItem className="flex justify-center items-center w-full">
                                <img src="/tulsi-logo.png" width={300} height={300} alt="Tulsi Logo" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md" />
                        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md" />
                    </Carousel>
                </div>
            </div>

        </div>
    );
}