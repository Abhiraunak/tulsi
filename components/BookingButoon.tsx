"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BookingButton(){
    const router = useRouter();
    const handleRoute = () => {
        router.push("/services")
    }
    return (
        <div>
            <Button onClick={handleRoute}
                    className="w-full h-10 rounded-sm bg-green-900 hover:bg-green-950 text-xl tracking-normal hover:font-semibold"
            >Book a service
            </Button>
        </div>
    )
}