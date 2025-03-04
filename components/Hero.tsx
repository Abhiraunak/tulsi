import ProductAppbar from "./ProductAppbar";


export default function Hero() {
    return (
        <section
            className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
        >
            <div className="z-[1001]">
                <ProductAppbar heading={"Home"} />
            </div>
            <div
                className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                        From Concept to Reality,
                        <strong className="block font-extrabold text-green-950"> We Build Your Vision </strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                        Expert Architecture & Renovation Solutions Tailored for You
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="/wallpanel"
                            className="block w-full rounded-sm bg-green-600 px-12 py-3 text-sm font-medium hover:font-semibold text-white shadow-sm hover:bg-green-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="/services"
                            className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-green-600 shadow-sm hover:text-green-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}