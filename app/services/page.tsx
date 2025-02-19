"use client"
import Appbar from "@/components/Appbar";
import { Testonomial } from "@/components/Testonomial";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WorkService } from "@/components/WorkService";

export default function Services() {
    return (
        <>
        <Appbar />
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
                    <WorkService />
                </div>
            </div>
        </>
    );
}