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


export function DropdownMenuCheckboxes() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-green-800 hover:font-semibold">Services</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[100]">
                <DropdownMenuLabel className="text-green-950">All Services</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    disabled
                >
                    Wallpanel
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    Wallpaper
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    Wallpaint
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    Flooring
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    False-celling
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
