"use client"
import ProductAppbar from "@/components/ProductAppbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { useState } from "react";

export default function Services() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        service: "",
        adress: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceChange = (value: string) => {
        setFormData({ ...formData, service: value });
    }
   
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/booking', {
            method: "POST",
            body: JSON.stringify({
                formData
            })
        })

        if(res.ok){
            alert("Booking sucessfull !!")
        } else {
            alert("Booking failed !")
        }
    }


    return (
        <>
            <ProductAppbar heading={"Book a Service"} />
            <WhatsappButton />
            <div className="bg-slate-800 h-[105vh] md:h-screen md:w-full w-[105%]">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-2 mx-3 md:mx-0 md:p-6">
                    <BackgroundGradient>
                        <Card className="w-[25rem] rounded-2xl">
                            <CardContent>
                                <div className="py-4">
                                    <h1 className="text-3xl font-extrabold tracking-tighter">
                                        Book a service
                                    </h1>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div>
                                        <Label htmlFor="Name" className="font-semibold tracking-tight text-lg">Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone number" className="font-semibold tracking-tight text-lg">Phone Number</Label>
                                        <Input
                                            type="text"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="container relative">
                                        <Label htmlFor="services" className="font-semibold tracking-tight text-lg">Services</Label>
                                        <Select onValueChange={handleServiceChange}>
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
                                            value={formData.adress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="pt-5">
                                        <Button type="submit" className="w-full">
                                            Book your service
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </BackgroundGradient>
                </div>
            </div>
        </>
    );
}