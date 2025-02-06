import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="max-w-screen-xl mx-auto text-center space-y-6">
          <h1 className="px-4 text-4xl sm:tracking-tighter lg:tracking-tight sm:text-5xl lg:text-6xl xl:text-8xl">
            From concept to reality, we build your vision
          </h1>
          <h2 className="px-4 text-2xl tracking-tighter opacity-50">
            Expert architecture & renovation solutions tailored for you.
          </h2>

          {/* Buttons Section */}
          <div className="flex justify-center gap-6 lg:gap-14 pt-10">
            {/* Services Button */}
            <Link href="/services">
              <Button className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]">
                Services
              </Button>
            </Link>

            {/* About Us Button */}
            <Link href="/about">
              <Button className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
