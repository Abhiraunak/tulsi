"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Appbar() {
    return (
        <div className='max-w-screen-xl mx-auto h-[80px] flex items-center justify-between border-b-[1px] border-zinc-400 px-4'>
            <div className="nleft flex items-center">
                <Link href={"/"} >
                    <Image
                        src="/tulsi-logo.png"
                        width={100}
                        height={100}
                        alt="tulsi-logo"
                    />
                </Link>
            </div>
            <div>
                {/* Services Button */}
                <Link href="/services">
                    <Button className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]">
                        Services
                    </Button>
                </Link>
            </div>
        </div>
    );
}
