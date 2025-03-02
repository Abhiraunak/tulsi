"use client"
import Image from "next/image";
import { Separator } from "./ui/separator";
import { DropdownMenuCheckboxes } from "./DropdownMenuCheckboxes";
import Link from "next/link";

interface ProductAppbarProps{
    heading : string;
}

export default function Page({heading}: ProductAppbarProps) {
    return (
        <div className='w-full mx-auto py-2 px-4 flex items-center justify-between fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-100 shadow-md'>
            <div className="flex items-center">
                <Link href={"/"}>
                    <Image
                        src={"/tulsi-logo1.png"}
                        alt={"tulsi log"}
                        height={20}
                        width={60}
                    />
                </Link>
                <Separator orientation="vertical" className="h-12 w-[1.5px] bg-green-800 ml-3" />
                <h3 className="ml-3 text-xl md:text-2xl text-green-950 font-semibold tracking-tighter">{heading}</h3>
            </div>
            <div>
                <DropdownMenuCheckboxes />
            </div>
        </div>
    )
}