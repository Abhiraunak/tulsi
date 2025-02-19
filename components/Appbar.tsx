"use client"
import { AlignJustify, Telescope, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Appbar() {
    const [isOpen, setIsOpen] = useState(false);
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
                <div className="hidden md:flex flex-row gap-6 items-center text-lg font-medium">
                    <div className="flex gap-1 text-pretty transition-all hover:font-semibold">
                        <Zap className="text-white" />
                        <Link href="/services">
                            <h1 className="cursor-pointer text-white">Services</h1>
                        </Link>
                    </div>
                    <div className="flex gap-1 transition-all hover:font-semibold">
                        <Telescope className="text-white" />
                        <Link href="/about">
                            <h1 className="cursor-pointer text-white">About Us</h1>
                        </Link>
                    </div>
                </div>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden pt-2">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <AlignJustify className="w-10 h-10 text-white" />
                    </button>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 right-0 w-1/4 bg-slate-500 rounded-lg p-4 flex flex-col gap-4 text-lg font-medium md:hidden">
                        <div className="flex gap-1 text-pretty transition-all hover:font-semibold">
                            <Zap className="text-white" />
                            <Link href="/services">
                                <h1 className="cursor-pointer text-white">Services</h1>
                            </Link>
                        </div>
                        <div className="flex gap-1 transition-all hover:font-semibold">
                            <Telescope className="text-white" />
                            <Link href="/about">
                                <h1 className="cursor-pointer text-white">About Us</h1>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
