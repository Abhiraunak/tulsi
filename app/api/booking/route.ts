import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";
import { z } from "zod";

// Enhanced validation schema
const bookingDetails = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  service: z.array(z.string().min(1, "Service name cannot be empty")).min(1, "At least one service is required"),
  address: z.string().min(1, "Address is required"),
});

export async function POST(req: NextRequest) {
    try {
        const result = bookingDetails.safeParse(await req.json());

        if (!result.success) {
            return NextResponse.json(
                { message: result.error.errors[0].message },
                { status: 400 }
            );
        }

        const { name, phoneNumber, service, address } = result.data;

        // Validate phone number format
        if (!/^\d+$/.test(phoneNumber)) {
            return NextResponse.json(
                { message: "Invalid phone number format" },
                { status: 400 }
            );
        }

        // NEW: Use Promise.all to create multiple booking records concurrently.
        const bookingCreationPromises = service.map((s) => {
            return prisma.bookingService.create({
                data: {
                    name: name.trim(),
                    phoneNumber: phoneNumber.trim(),
                    service: s.trim(), // Create a separate record for each service
                    address: address.trim(),
                    timeStamp: new Date(),
                },
            });
        });

        const bookings = await Promise.all(bookingCreationPromises);

        // Collect the IDs of all newly created bookings
        const bookingIds = bookings.map((booking) => booking.id);

        return NextResponse.json(
            {
                bookingIds, // Return an array of all booking IDs
                message: "Bookings successful",
            },
            { status: 201 }
        );

    } catch (e) {
        console.error("Booking Error:", e);

        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET(req: NextRequest) {
    try {
        const bookingData = await prisma.bookingService.findMany({
            orderBy: { timeStamp: 'desc' }, // newest first
        });

        return NextResponse.json(bookingData, { status: 200 });
    } catch (e) {
        console.error('Error fetching booking data:', e);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}