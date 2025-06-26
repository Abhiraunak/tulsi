import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db"
import { signJwt } from "@/lib/jwt/jwt";
import { cookies } from "next/headers";
// import bcrypt from "bcryptjs";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

export async function POST(req: Request) {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
        return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return NextResponse.json({ error: "Wrong credentials" }, { status: 401 });
    }

    const passwordMatch = user.password === password;

    if (!passwordMatch) {
        return NextResponse.json({ error: "Wrong credentials" }, { status: 401 });
    }

    const token = signJwt({ email });

    (await cookies()).set("auth-token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60, // 1 hour
    });

    return NextResponse.json({ success: true });
}
