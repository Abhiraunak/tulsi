import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";
import { z } from "zod";

// Enhanced validation schema
const bookingDetails = z.object({
    name: z.string().min(5, "Name must be at least 5 characters").max(50),
    phoneNumber: z.string()
        .min(10, "Invalid phone number")
        .max(15)
        .regex(/^\d+$/, "Only numbers allowed"),
    service: z.enum([
        'WallPaint',
        'WallPanel',
        'WallPaper',
        'FalseCeiling',
        'Flooring'
    ]),
    address: z.string().min(5, "Address must be at least 5 characters").max(100)
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

        const booking = await prisma.bookingService.create({
            data: {
                name: name.trim(),
                phoneNumber: phoneNumber.trim(),
                service: service.trim(),
                address: address.trim(),
                timeStamp: new Date()
            }
        });

        return NextResponse.json(
            {
                bookingId: booking.id,
                message: "Booking successful"
            },
            { status: 201 }
        );

    } catch (e: any) {
        console.error("Booking Error:", e);
        
        // Handle Prisma errors
        if (e.code === 'P2002') {
            return NextResponse.json(
                { message: "Duplicate booking detected" },
                { status: 409 }
            );
        }

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