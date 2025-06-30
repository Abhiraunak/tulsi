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
        <div className="overflow-x-hidden">
            <ProductAppbar heading={"Book a Service"} />
            <WhatsappButton />
            <div className="bg-slate-800 min-h-[105vh] md:h-screen w-full py-8 md:py-0 mt-10">
                <div className="flex justify-center items-center w-full h-full px-2 sm:px-4">
                    <div className="w-full max-w-md mx-auto">
                        <BackgroundGradient>
                            <Card className="w-full max-w-[25rem] rounded-2xl">
                                <CardContent>
                                    <div className="py-4">
                                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tighter">
                                            Book a service
                                        </h1>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div>
                                            <Label htmlFor="name" className="font-semibold tracking-tight text-base sm:text-lg">Name</Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="text-sm sm:text-base"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phoneNumber" className="font-semibold tracking-tight text-base sm:text-lg">Phone Number</Label>
                                            <Input
                                                type="text"
                                                name="phoneNumber"
                                                placeholder="Phone Number"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                className="text-sm sm:text-base"
                                            />
                                        </div>
                                        <div className="container relative">
                                            <Label htmlFor="services" className="font-semibold tracking-tight text-base sm:text-lg">Services</Label>
                                            <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                                                <SelectTrigger className="w-full text-sm sm:text-base">
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
                                            <Label htmlFor="address" className="font-semibold tracking-tight text-base sm:text-lg">Address</Label>
                                            <Input
                                                type="text"
                                                name="address"
                                                placeholder="Address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                                className="text-sm sm:text-base"
                                            />
                                        </div>
                                        <div className="pt-5">
                                            <Button
                                                type="submit"
                                                className="w-full rounded-sm bg-green-900 hover:bg-green-950 hover:font-semibold text-sm sm:text-base"
                                                disabled={loading}
                                            >
                                                {loading ? "Booking ...." : "Book your service"}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </div>
    );
}
