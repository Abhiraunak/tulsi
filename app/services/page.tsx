"use client"
import { useState } from "react";
import { z } from "zod";
import { Bounce, toast } from "react-toastify";
import ProductAppbar from "@/components/ProductAppbar";
import WhatsappButton from "@/components/WhatsAppIntegration";
import { cn } from "@/lib/utils";
import { Group } from "@/components/Utility/Group";
import { Label } from "@/components/Utility/Label";
import { Input } from "@/components/Utility/Input";
import { Button } from "@/components/Utility/Button";


// The Zod schema for validation, updated for multiple services
const bookingSchema = z.object({
    name: z.string().min(5, "Name must be at least 5 characters"),
    phoneNumber: z.string()
        .min(10, "Phone number must be 10 digits")
        .regex(/^\d+$/, "Only numbers allowed"),
    service: z.array(z.string()).min(1, "Please choose at least one service"), // Updated schema
    address: z.string().min(5, "Address must be at least 5 characters")
});

// List of available services
const serviceOptions = [
    { id: "WallPaint", label: "Wall Paint" },
    { id: "WallPanel", label: "Wall Panel" },
    { id: "WallPaper", label: "WallPaper" },
    { id: "FalseCeiling", label: "False Ceiling" },
    { id: "Flooring", label: "Flooring" }
];


export default function Services() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        service: [] as string[], // Initial state is now an empty array
        address: ""
    });

    // This handler correctly updates state for standard input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for service checkboxes to allow multiple selections
    const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prevState => {
            const currentServices = prevState.service;
            if (checked) {
                // Add the service if it's checked and not already in the array
                return { ...prevState, service: [...currentServices, value] };
            } else {
                // Remove the service if it's unchecked
                return { ...prevState, service: currentServices.filter(s => s !== value) };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. First, validate the form data
        const validation = bookingSchema.safeParse(formData);
        if (!validation.success) {
            // If validation fails, show the first error and stop
            toast.error(validation.error.errors[0].message);
            return;
        }

        setLoading(true);

        try {
            // 2. Run API calls in parallel for better performance
            const [bookingRes, emailRes] = await Promise.all([
                fetch('/api/booking', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }),
                fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                })
            ]);

            // 3. Check the booking response status specifically
            if (!bookingRes.ok) {
                // If booking failed, parse the error message and throw an error
                const errorData = await bookingRes.json();
                throw new Error(errorData.message || "Failed to book service");
            }

            // 4. If booking was successful, show success message and reset the form
            toast.success("Booking successful! We will contact you shortly.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });

            // Reset form only after a successful submission
            setFormData({ name: "", phoneNumber: "", service: [], address: "" });

            // Optional: Log if the email notification failed silently
            if (!emailRes.ok) {
                console.error("Booking was successful, but failed to send admin email notification.");
            }

        } catch (error: any) {
            // 5. A single catch block handles all errors (validation, network, API)
            toast.error(error.message || "Something went wrong!", {
                position: "bottom-left",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
        } finally {
            // This always runs, ensuring the loading state is turned off
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-hidden">
            <ProductAppbar heading={"Book a Service"} />
            <WhatsappButton />
            <form onSubmit={handleSubmit} className="min-h-screen mx-auto w-full px-8 py-14 bg-green-50 mt-10">
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
                            name="name"
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
                            name="phoneNumber"
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
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="Enter your Address"
                        />
                    </Group>
                    <Group>
                        <Label className="after:content-['*'] after:ml-0.5 after:text-red-600">Service</Label>
                        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-300">
                            <div className="grid grid-cols-2 gap-4">
                                {serviceOptions.map((service) => (
                                    <div key={service.id} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id={service.id}
                                            value={service.id}
                                            checked={formData.service.includes(service.id)}
                                            onChange={handleServiceChange}
                                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                        />
                                        <label htmlFor={service.id} className="text-sm text-gray-700">
                                            {service.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </Group>
                    <Button disabled={loading}>
                        {loading ? 'Booking...' : 'Book your service'}
                    </Button>
                </div>
            </form>
        </div>
    );
}

