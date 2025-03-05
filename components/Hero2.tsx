import Link from "next/link";
import Appbar from "./Appbar";

export default function Page() {
  return (
    <main className="relative w-full h-[35rem]  bg-[linear-gradient(to_right,#f0f0f0_2px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_2px,transparent_1px)] bg-[size:6rem_4rem]">
      <Appbar />
      <div className="container max-w-screen-xl mx-auto pt-12 text-center space-y-6 sm:space-y-2">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold lg:font-semibold md:font-semibold tracking-tight">
          From Concept to Reality, We Build Your Vision
        </h1>
        <h2 className="text-lg md:text-xl tracking-tighter font-semibold opacity-50">
          Expert Architecture & Renovation Solutions Tailored for You
        </h2>

        <div className="flex justify-center gap-6 lg:gap-14 pt-10 sm:pt-2">
          <Link href="/services">
            <button className="px-10 py-2 lg:min-w-[240px] bg-slate-600 hover:bg-slate-800 rounded-lg font-semibold text-white lg:text-xl text-center">
              Services
            </button>
          </Link>

          <Link href="/about">
            <button className="px-10 py-2 lg:min-w-[240px] border-2 border-slate-600 rounded-lg font-semibold text-black lg:text-xl text-center">
              About tulsi
            </button>
          </Link>
        </div>
      </div>
    </main>

  )
}

