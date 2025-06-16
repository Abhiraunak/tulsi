"use client"
import { useState } from "react";
import ProductAppbar from "@/components/ProductAppbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { z } from "zod";
import { Bounce, toast } from "react-toastify";

const bookingSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"), // Changed from 3 to 5
    phoneNumber: z.string()
        .min(10, "Phone number must be 10 digits")
        .regex(/^\d+$/, "Only numbers allowed"),
    service: z.string().min(1, "Please choose a service"),
    address: z.string().min(5, "Address must be at least 5 characters")
});

export default function Services() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        service: "",
        address: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleServiceChange = (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            service: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const validation = bookingSchema.safeParse(formData);
        if (!validation.success) {
            toast.error(validation.error.errors[0].message);
            setLoading(false);
            return;
        }

        try {

            // create booking
            const bookingRes = await fetch('/api/booking', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await bookingRes.json(); //wait for save the data in database

            if (!bookingRes.ok) {
                toast.error(data.message || "Failed to book service", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }       

            toast.success("Booking successful", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });

            // Reset form 
            setFormData({ name: "", phoneNumber: "", service: "", address: "" });

        } catch (error: any) {
            toast.error(error.message || "Something went wrong!", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ProductAppbar heading={"Book a Service"} />
            <WhatsappButton />
            <div className="bg-slate-800 h-[105vh] md:h-screen md:w-full w-[105%]">
                <div className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-2 mx-3 md:mx-0 md:p-6">
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
                                        <Label htmlFor="name" className="font-semibold tracking-tight text-lg">Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phoneNumber" className="font-semibold tracking-tight text-lg">Phone Number</Label>
                                        <Input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone Number"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="container relative">
                                        <Label htmlFor="services" className="font-semibold tracking-tight text-lg">Services</Label>
                                        <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Choose a Service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="WallPaint">Wall Paint</SelectItem>
                                                <SelectItem value="WallPanel">Wall Panel</SelectItem>
                                                <SelectItem value="WallPaper">WallPaper</SelectItem>
                                                <SelectItem value="FalseCeiling">False Ceiling</SelectItem>
                                                <SelectItem value="Flooring">Flooring</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="address" className="font-semibold tracking-tight text-lg">Address</Label>
                                        <Input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="pt-5">
                                        <Button type="submit" className="w-full rounded-sm bg-green-900 hover:bg-green-950 hover:font-semibold" disabled={loading}>
                                            {loading ? "Booking ...." : "Book your service"}
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
