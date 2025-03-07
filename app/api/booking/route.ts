import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const db = new PrismaClient();

// Zod schema for validation
const bookingDetails = z.object({
    name: z.string().min(5, "Please enter your full name"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    service: z.string().min(1, "Please select a service"),
    address: z.string().min(5, "Please enter a valid address")
});

export async function POST(req: NextRequest) {
    try {
        // Parse and validate request body
        const data = bookingDetails.parse(await req.json());

        // Save booking to the database
        const booking = await db.service.create({
            data: {
                name: data.name,
                phnumber: data.phoneNumber,
                services: data.service,
                address: data.address
            }
        });

        return NextResponse.json({
            message: "Booking successful",
            booking
        }, { status: 201 });

    } catch (e) {
        if (e instanceof z.ZodError) {
            return NextResponse.json({
                message: e.errors[0].message  // Return the first validation error
            }, { status: 400 });
        }

        return NextResponse.json({
            message: "Error while booking a service"
        }, { status: 500 });
    }
}
