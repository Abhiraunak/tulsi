"use client"
import { useState } from "react";
import ProductAppbar from "@/components/ProductAppbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { z } from "zod";
import { Bounce, toast } from "react-toastify";
import { Group } from "@/components/Utility/Group";
import { Label } from "@/components/Utility/Label";
import { Input } from "@/components/Utility/Input";
import { Button } from "@/components/Utility/Button";
import { cn } from "@/lib/utils";

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

            // Send admin notification email
            const emailRes = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
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
            <form onSubmit={handleSubmit} className="min-h-screen mx-auto w-full bg-netural-50 px-8 py-14 bg-green-50 mt-10">
                <h1 className="text-5xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700">
                    Book a {" "}
                    <span className={cn(
                        "inline-block relative z-10 text-white",
                        "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-green-400 after:skew-20"
                    )}>
                        Service
                    </span>
                </h1>
                <div className="flex flex-col my-2 gap-5 max-w-sm mx-auto mt-5">
                    <Group>
                        <Label className="after:content-['*'] after:ml-0.5 after:text-red-600">Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Group>
                    <Group>
                        <Label className="after:content-['*'] after:ml-0.5 after:text-red-600">Phone Number</Label>
                        <Input
                            type="text"
                            placeholder="Enter your Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Group>
                    <Group>
                        <Label className="after:content-['*'] after:ml-0.5 after:text-red-600">Address</Label>
                        <Input
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="Enter your Address"
                        />
                    </Group>
                    <Group>
                        <Label className="after:content-['*'] after:ml-0.5 after:text-red-600">Service</Label>
                        <Select name="service" value={formData.service} onValueChange={handleServiceChange}>
                            <SelectTrigger className="w-full text-sm sm:text-base border-transparent px-4 py-4 bg-white rounded-md shadow-input transition-all duration-200 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 border focus:border-neutral-300 focus:bg-neutral-100">
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
                    </Group>
                    <Button >Book your service</Button>
                </div>
            </form>
        </div>
    );
}
