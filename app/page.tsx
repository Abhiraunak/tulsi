import Head from "next/head";
import { WorkPortfolio } from "@/components/WorkPortfolio";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatsappButton from "@/components/WhatsAppIntegration";


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

      <div>
        <Hero />
      </div>

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
            <h2 className="px-4 text-4xl text-green-950 sm:tracking-tighter lg:tracking-tight sm:text-5xl lg:text-6xl xl:text-8xl">Our Expertise</h2>
          </div>
          <div className="max-w-screen-xl mx-auto flex flex-col mt-[85px]">
            <div className="grid grid-cols-1 gap-10 justify-center items-center">
              <div className="flex flex-wrap justify-center gap-[50px]">
                <WorkPortfolio
                  title="WallPaint"
                  paragraph="Wall paint enhances aesthetics, protects surfaces, and adds durability. 
                          Our expert architects ensure flawless finishes, transforming spaces with vibrant colors"
                  BgImageUrl="/Walllpaint.jpg"
                  to="/wallpaint"
                />
                <WorkPortfolio
                  title="Wall Panels"
                  paragraph="Wall panels enhance interiors with stylish, durable designs, providing insulation, noise reduction, 
                          and aesthetic appeal for modern architectural spaces."
                  BgImageUrl="/Wallpanels.jpg"
                  to="/wallpanel"
                />
                <WorkPortfolio
                  title="False Celling"
                  paragraph="Enhance aesthetics and functionality with false ceilings, offering improved lighting, insulation, and modern designs for residential and commercial spaces."
                  BgImageUrl="/Falsee.jpg"
                  to="/falsecelling"
                />
                <WorkPortfolio
                  title="Wallpaper"
                  paragraph="Elevate interiors with premium wallpapers, adding texture, color, and personality to walls for a stylish and elegant look"
                  BgImageUrl="/wallppaper.jpg"
                  to="/wallpaper"
                />
                <WorkPortfolio
                  title="Flooring"
                  paragraph="Upgrade spaces with high-quality flooring solutions, ensuring durability, style, and comfort for homes, offices, and commercial environments."
                  BgImageUrl="/Flooring.jpg"
                  to="/flooring"
                />
              </div>
            </div>
          </div>
      </div>
      <div className="relative w-full">
        <Footer />
      </div>
      <div className="fixed bottom-20 right-5 z-[1100]">
        <WhatsappButton />
      </div>
    </>
  );
}
