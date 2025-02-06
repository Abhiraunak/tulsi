"use client"
import Image from "next/image";
import Link from "next/link";

export default function Appbar() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Link href={"/"}>
                <Image
                    src="/tulsi-logo.png"
                    width={100}
                    height={300}
                    alt="tulsi-logo"
                />
            </Link>
        </div>
    );
}