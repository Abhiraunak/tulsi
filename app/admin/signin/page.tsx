import ProductAppbar from "@/components/ProductAppbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
    return (
        <main className="w-full h-full">
            <div className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <Card className="w-80 space-y-4 flex flex-col justify-center border-green-600  shadow-2xl">
                    <CardContent className="space-y-4 text-center flex flex-col items-center">
                        <div className="pt-4">
                            <Image
                                src={"/tulsi-logo1.png"}
                                alt={"tulsi log"}
                                height={60}
                                width={60}
                            />
                        </div>
                        <h1 className="text-4xl text-green-800 font-extrabold tracking-tight">Admin Login</h1>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        {/* <Link href={"/admin/dashboard"}> */}
                        <Button className="w-full  bg-green-700 hover:bg-green-900 text-white font-semibold hover:font-extrabold">
                            Sign In
                        </Button>
                        {/* </Link> */}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}