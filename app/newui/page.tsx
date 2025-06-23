"use client";
import Heronew from "@/components/Heronew";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <>
            {/* Hero Section */}
            <div className="h-screen">
                <Heronew />
            </div>

            {/* Wallpanel Content Section */}
            <section className="relative bg-slate-50 overflow-hidden">
                {/* Background Animation Blobs */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
                </div>

                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-4">
                            {/* Card 1 */}
                            <div className="bg-white p-5 rounded-xl shadow-md w-full">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Redefining Walls with Style — Tailored Wallpanel Solutions by Tulsi.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white z-10 p-5 rounded-xl shadow-md w-full md:ml-[8rem]">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Providing estimated completion dates and product schedules.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-5 rounded-xl shadow-md w-full">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Giving suggestions for the interior design.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => router.push("/wallpanel")}
                                className="relative md:ml-[5rem]  mt-4 inline-flex w-full sm:w-1/2 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-50"
                            >
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Know more
                                </span>
                            </button>
                        </div>

                        {/* Image */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Showcase"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
