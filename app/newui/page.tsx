import Footer from "@/components/Footer";
import Heronew from "@/components/Heronew";
import { HovermeButton } from "@/components/ui/hovermeButton";
// import { VelocityScroll } from "@/components/ui/scrollbasedvelocity"; 
import { TextAnimate } from "@/components/ui/text-animate";
import WhatsappButton from "@/components/WhatsAppIntegration";

export default function Page() {

    return (
        <>
            {/* Hero Section */}
            <Heronew />
            <WhatsappButton/>

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
                             <TextAnimate text="Wallpanel" type="fadeInUp" />
                            {/* Card 1 */}
                            <div className="bg-white p-5 rounded-xl shadow-md shadow-green-500 w-full">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Redefining Walls with Style — Tailored Wallpanel Solutions by Tulsi.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white z-10 p-5 rounded-xl shadow-md shadow-green-500 w-full md:ml-[8rem]">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Providing estimated completion dates and product schedules.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-5 rounded-xl shadow-md shadow-green-500 w-full">
                                <div className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✔️</span>
                                    <p className="text-gray-700 text-sm sm:text-base">
                                        Giving suggestions for the interior design.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center md:justify-start md:ml-20">
                                <HovermeButton title={"Know more"} to={"/wallpanel"} />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full order-1 md:order-2 mb-6 md:mb-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sCtRgxS81LrIHKBynx8Ekiz9QLL2Qrhs_g&s"
                                alt="Showcase"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}
