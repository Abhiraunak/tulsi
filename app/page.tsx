import Link from "next/link";
import Head from "next/head";
import { WorkPortfolio } from "@/components/WorkPortfolio";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

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
        <meta property="og:url" content="https://www.yourwebsite.com" /> //Replace with the website domain
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourwebsite.com/preview.jpg" /> // replace with the website preview image aka logo
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Main Content */}
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
      <div className="container relative pt-[100px] mb-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl tracking-tight sm:text-xl sm:tracking-tighter opacity-50">What we do</h3>
          <h2 className="px-4 text-4xl sm:tracking-tighter lg:tracking-tight sm:text-5xl lg:text-6xl xl:text-8xl">Our Expertise</h2>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col mt-[80px]">
          <div className="grid grid-cols-1 gap-10 justify-center items-center">
            <div className="flex flex-wrap justify-center gap-[50px]">
              <WorkPortfolio
                title="WallPaint"
                paragraph="Wall paint enhances aesthetics, protects surfaces, and adds durability. 
                          Our expert architects ensure flawless finishes, transforming spaces with vibrant colors"
                BgImageUrl="/Walllpaint.jpg"
              />
              <WorkPortfolio
                title="Wall Panels"
                paragraph="Wall panels enhance interiors with stylish, durable designs, providing insulation, noise reduction, 
                          and aesthetic appeal for modern architectural spaces."
                BgImageUrl="/Wallpanels.jpg"
              />
              <WorkPortfolio
                title="False Celling"
                paragraph="Enhance aesthetics and functionality with false ceilings, offering improved lighting, insulation, and modern designs for residential and commercial spaces."
                BgImageUrl="/Falsee.jpg"
              />
              <WorkPortfolio
                title="Wallpaper"
                paragraph="Elevate interiors with premium wallpapers, adding texture, color, and personality to walls for a stylish and elegant look"
                BgImageUrl="/wallppaper.jpg"
              />
              <WorkPortfolio
                title="Flooring"
                paragraph="Upgrade spaces with high-quality flooring solutions, ensuring durability, style, and comfort for homes, offices, and commercial environments."
                BgImageUrl="/Flooring.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
          <Footer />
        </div>
    </>
  );
}
