"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email and password are required", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        try {
            const res = await fetch("/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push(callbackUrl);
            } else {
                const data = await res.json();
                toast.error(data.error || "Please check your credentials", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                    transition: Bounce,
                });
            }
        } catch (e) {
            console.error("Login failed:", e);
            toast.error("An unexpected error occurred", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
        }
    };

    return (
        <main className="w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Card className="w-80 space-y-4 flex flex-col justify-center border-green-600 shadow-2xl">
                    <CardContent className="space-y-4 text-center flex flex-col items-center">
                        <div className="pt-4">
                            <Image
                                src="/tulsi-logo1.png"
                                alt="Tulsi Logo"
                                height={60}
                                width={60}
                            />
                        </div>
                        <h1 className="text-4xl text-green-800 font-extrabold tracking-tight">
                            Admin Login
                        </h1>

                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            className="w-full h-10 rounded-md bg-green-700 hover:bg-green-900 text-white font-semibold"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
