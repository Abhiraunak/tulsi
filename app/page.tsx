import Head from "next/head";
import WhatsappButton from "@/components/WhatsAppIntegration";
import Heronew from "@/components/Heronew";
import { TextAnimate } from "@/components/ui/text-animate";
import { ServiceSection } from "@/components/ServiceSection";
import { HovermeButton } from "@/components/ui/hovermeButton";
import Footer from "@/components/Footer";
import { AnimatedNo } from "@/components/AnimatedNumber";
import Review from "@/components/Review";

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
        <meta property="og:url" content="https://hellotulsi.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hellotulsi.in/new-logo.png" /> // replace with the website preview image aka logo
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <Heronew />
        <WhatsappButton />

        {/* Services Header */}
        <section className="relative bg-green-100  py-10 flex items-center justify-center overflow-hidden">
          <div className="px-4 text-center select-none">
            <TextAnimate
              className="text-black text-4xl md:text-6xl font-bold"
              text="Our Services"
              type="fadeInUp"
            />
          </div>
        </section>

        {/* Services Sections */}
        <section className="overflow-hidden">
          <ServiceSection
            title="Wallpanel"
            imageUrl="/Wallpanels/Panel31.png"
            features={[
              "Redefining Walls with Style — Tailored Wallpanel Solutions by Tulsi.",
              "Providing estimated completion dates and product schedules.",
              "Giving suggestions for the interior design."
            ]}
            link="/wallpanel"
            imagePosition="right"
          />

          <ServiceSection
            title="False-ceiling"
            imageUrl="/Falsecelling/roof/roof2.jpg"
            features={[
              "Elevate your space with custom-designed ceilings",
              "Premium materials and modern lighting integration",
              "Perfect acoustics and thermal insulation"
            ]}
            link="/falsecelling"
            imagePosition="left"
          />

          <ServiceSection
            title="Wallpaint"
            imageUrl="/Wallpaint/wallpaint1.jpg"
            features={[
              "Professional surface preparation",
              "Premium quality paints with eco-friendly options",
              "Custom color matching and texture finishes"
            ]}
            link="/wallpaint"
            imagePosition="right"
          />

          <ServiceSection
            title="Flooring"
            imageUrl="/Flooring/flooring26.jpg"
            features={[
              "Wide range of materials: hardwood, laminate, tile",
              "Professional installation with precision",
              "Durable finishes with warranty"
            ]}
            link="/flooring"
            imagePosition="left"
          />

          <ServiceSection
            title="Wallpaper"
            imageUrl="/Wallpaper/wallpaper5.jpg"
            features={[
              "Extensive collection of designs and patterns",
              "Professional application without bubbles",
              "Easy removal and replacement options"
            ]}
            link="/wallpaper"
            imagePosition="right"
          />
        </section>

        {/* Why Choose Us Section */}
        <section className="relative bg-gradient-to-r from-[#4b5563] via-[#22c55e] to-[#4ade80] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
              <TextAnimate
                className="text-white text-3xl md:text-5xl font-bold"
                text="Why Choose Us"
                type="fadeInUp"
              />
              <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                Discover the Tulsi difference - where quality meets craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03]">
                <div className="flex flex-col items-center justify-center mt-7 mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    Expert Craftsmanship
                  </h3>
                  <p className="text-gray-600 text-center">
                    Professionally committed to your vision
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <AnimatedNo value={80} duration={1500} className="text-green-500" /><span className="text-xl font-semibold">+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Happy customer
                </h3>
                <p className="text-gray-600 text-center">
                  Creating experiences that matter
                </p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03]">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <AnimatedNo value={100} duration={1500} className="text-green-500" /><span className="text-xl font-semibold">+</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Project
                </h3>
                <p className="text-gray-600 text-center">
                  Delivering excellence
                </p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03]">
                <div className="flex flex-col items-center justify-center mt-7 mx-auto">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-600 text-center">
                    Projects completed as promised, every time
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <HovermeButton
                title="Book Free Consultation"
                to="/services"
              />
            </div>
          </div>
        </section>

        {/* testnomial section */}
        <section className="relative bg-gradient-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e] py-16 md:py-24">
          <div className="container overflow-hidden mx-auto px-4">
            <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
              <TextAnimate
                className="text-white text-3xl md:text-5xl font-bold"
                text="What our customers say"
                type="fadeInUp"
              />
            </div>

            <Review />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
