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
        <div className="grid grid-cols-1 gap-y-5 lg:gap-x-5 lg:grid-cols-5 w-screen py-5 lg:py-8 ">
            <div className="col-span-3 lg: order-1 px-10">
                <Card className="border-gray-600 shadow-lg">
                    <CardContent>
                        <div className="py-4">
                            <h1 className="text-3xl font-extrabold tracking-tighter">
                                Book a service
                            </h1>
                        </div>
                        <form className="space-y-3">
                            <div>
                                <Label htmlFor="Name" className="font-semibold tracking-tight text-lg">Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone number" className="font-semibold tracking-tight text-lg">Phone Number</Label>
                                <Input
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <Label htmlFor="services" className="font-semibold tracking-tight text-lg">Services</Label>
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
                                <Label htmlFor="address" className="font-semibold tracking-tight text-lg">Address</Label>
                                <Input
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="pt-5">
                                <Button className="w-full">
                                    Book your service
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-2 order-1 flex flex-col items-center h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                <h1 className="font-extrabold text-4xl mb-4 self-start">Our Work</h1>
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


        </div>
    );
}