"use client"

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export function DropdownMenuCheckboxes() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-green-800 hover:font-semibold">Services</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2 z-[100] ">
                <DropdownMenuLabel className="text-green-950 pt-5">All Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem className="hover:font-semibold">
                    <Link href={"/wallpanel"}>
                        Wallpanel
                    </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="hover:font-semibold">
                    <Link href={"/wallpaper"}>
                        Wallpaper
                    </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="hover:font-semibold">
                    <Link href={"/wallpaint"}>
                        Wallpaint
                    </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="hover:font-semibold">
                    <Link href={"/falsecelling"}>
                        False Celling
                    </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="hover:font-semibold">
                    <Link href={"/flooring"}>
                        Flooring
                    </Link>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
