import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Expert Architecture & Renovation | Tulsi</title>
        <meta
          name="description"
          content="Transform your space with expert architecture and renovation solutions. From concept to reality, Tulsi brings your vision to life with precision and creativity."
        />
        <meta
          name="keywords"
          content="architecture, home renovation, interior design, false ceilings, painting, construction, home improvement"
        />
        <meta name="author" content="Tulsi Architecture & Renovation" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Expert Architecture & Renovation | Tulsi" />
        <meta
          property="og:description"
          content="From concept to reality, we build your vision. Expert architecture & renovation solutions tailored for you."
        />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Main Content */}
      <div>
        <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="max-w-screen-xl mx-auto text-center space-y-6 sm:space-y-2">
            <h1 className="px-4 text-4xl sm:tracking-tighter lg:tracking-tight sm:text-5xl lg:text-6xl xl:text-8xl">
              From Concept to Reality, We Build Your Vision
            </h1>
            <h2 className="px-4 text-2xl tracking-tighter opacity-50">
              Expert Architecture & Renovation Solutions Tailored for You
            </h2>

            <div className="flex justify-center gap-6 lg:gap-14 pt-10 sm:pt-2">
              <Link href="/services">
                <Button
                  className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]"
                  aria-label="View Our Services"
                >
                  Services
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  className="bg-stone-100 hover:bg-stone-300 text-black border-4 border-gray-500 drop-shadow-xl px-6 min-w-[120px]"
                  aria-label="Learn About Us"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
