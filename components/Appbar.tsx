"use client"
import { Telescope, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Appbar() {
    return (
        <div className='container pt-3 inset-x-0  max-w-2xl  mx-auto z-[60]'>
            <div className="relative rounded-full border-2 border-#f0f0f0 bg-gradient-to-r from-slate-300 to-slate-500 backdrop-blur-sm flex justify-between space-x-4 px-10 py-2">
                <div className="nleft">
                    <Link href={"/"} >
                        <Image
                            src="/tulsi-logo1.png"
                            width={100}
                            height={100}
                            alt="tulsi-logo"
                        />
                    </Link>
                </div>
                <div className="flex flex-row gap-6 items-center text-lg font-medium">
                    <div className="flex gap-1 text-pretty">
                        <Zap className="text-white" />
                        <Link href="/services">
                            <h1 className="cursor-pointer text-white">Services</h1>
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <Telescope className="text-white" />
                        <Link href="/about">
                            <h1 className="cursor-pointer text-white">About Us</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
