import ConfirmationEmail from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, phoneNumber, service, address } = await request.json();
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
        throw new Error('ADMIN_EMAIL environment variable is not set');
    }

    try {
        const { data, error } = await resend.emails.send({
            from: `Tulsi <no-reply@hellotulsi.in>`,
            to: [adminEmail],
            subject: `New Booking: ${service}`,
            react: ConfirmationEmail({ name, phoneNumber, service, address }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}