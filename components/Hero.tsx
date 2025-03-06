// import ProductAppbar from "./ProductAppbar";

import ProductAppbar from "./ProductAppbar";


export default function Hero() {
    return (
        <section
            className="relative bg-[url(/Wallpanels/Panel30.png)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/30 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <ProductAppbar heading="" />
                <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl text-white tracking-tight font-extrabold sm:text-5xl">
                        From Concept to Reality, We Build Your
                        <strong className="font-extrabold text-green-700 inline"> vision. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg tracking-normal text-gray-300 sm:text-xl/relaxed">
                        Expert Architecture & Renovation Solutions Tailored for You
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="/wallpanel"
                            className="block w-full rounded-md bg-green-700 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-900 focus:ring-3 focus:outline-hidden sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded-md bg-white px-12 py-3 text-sm font-medium hover:font-semibold text-green-600 shadow-sm hover:text-green-900 focus:ring-3 focus:outline-hidden sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}