"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";

interface WorkPortfolioProps {
    BgImageUrl: string;
    title: string;
    paragraph: string;
    to: string;
}

export function WorkPortfolio({ title, BgImageUrl, paragraph, to }: WorkPortfolioProps) {
    return (
        <div className="max-w-xs w-full px-3 pt-10">
            <Link href={to}>
                <div
                    className={cn(
                        "w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent",
                        "bg-cover bg-center"
                    )}
                    style={{ backgroundImage: `url(${BgImageUrl})` }}
                >
                    <div className="relative z-50 text-white">
                        <h1 className="font-bold text-xl md:text-3xl">{title}</h1>
                        <p className="font-normal text-base my-4">{paragraph}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button className="font-extrabold text-white">Know more </button>
                        <ArrowUpRight className="text-white" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
