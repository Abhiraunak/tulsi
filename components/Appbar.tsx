"use client"
import Image from "next/image";
import Link from "next/link";

export default function Appbar() {
    return (
        <div className='max-w-screen-xl mx-auto h-[80px] flex items-center justify-between px-4'>
            <div className="nleft flex items-center">
                <Link href={"/"} >
                    <Image
                        src="/tulsi-logo1.png"
                        width={100}
                        height={100}
                        alt="tulsi-logo"
                    />
                </Link>
            </div>
        </div>
    );
}
