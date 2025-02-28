"use client"
import Image from "next/image"
import { Separator } from "./ui/separator"
import { DropdownMenuCheckboxes } from "./DropdownMenuCheckboxes"

export default function Page() {
    return (
        <div className='max-w-screen-xl mx-auto py-2 flex items-center justify-between'>
            <div className="nleft flex items-center">
                <Image
                    src={"/tulsi-logo1.png"}
                    alt={"tulsi log"}
                    height={20}
                    width={100}
                />
                <Separator orientation="vertical" className="h-12 w-[2.5px] bg-black ml-3" />
                <h3 className="ml-3 text-2xl font-semibold leading-none tracking-tight">Wall panel</h3>
            </div>
            <div className="mr-10">
                <DropdownMenuCheckboxes />
            </div>
        </div>
    )
}