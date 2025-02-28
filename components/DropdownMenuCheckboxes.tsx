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
                <Button variant="outline">Services</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>All Services</DropdownMenuLabel>
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
