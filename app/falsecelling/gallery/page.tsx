import BookingButton from "@/components/BookingButoon";
import ProductAppbar from "@/components/ProductAppbar";
import ProductDescription from "@/components/ProductDescription";
import { TextAnimate } from "@/components/ui/text-animate";
import WhatsappButton from "@/components/WhatsAppIntegration";

export default function Page() {
    return (
        <div>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="False-Celling" />
            </nav>

            {/* Bedroom display start from here */}
            <section className="mx-auto mt-20">
                <TextAnimate
                    className="text-green-900 text-4xl font-bold mt-2 mb-3 mx-4"
                    text="Bedroom"
                    type="popIn"
                />
                <div className="w-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design1.jpg"} description={"Bedroom"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design2.jpg"} description={"Bedroom"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design3.jpg"} description={"Bedroom"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design4.jpg"} description={"Bedroom"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design5.jpg"} description={"Bedroom"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/bedroom/design6.jpg"} description={"Bedroom"} />
                        </div>

                    </div>
                </div>
            </section>

            {/* Living room display start from here */}
            <section className="mx-auto mt-20">
                <TextAnimate
                    className="text-green-900 text-4xl font-bold mt-2 mb-3 mx-4"
                    text="Living room"
                    type="popIn"
                />
                <div className="w-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design1.jpg"} description={"Living room"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design2.jpg"} description={"Living room"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design3.jpg"} description={"Living room"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design4.jpg"} description={"Living room"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design5.jpg"} description={"Living room"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/livingroom/design6.jpg"} description={"Living room"} />
                        </div>

                    </div>
                </div>
            </section>

            {/* celling section start from here */}
            <section className="mx-auto mt-20 mb-20">
                <TextAnimate
                    className="text-green-900 text-4xl font-bold mt-2 mb-3 mx-4"
                    text="Celling"
                    type="popIn"
                />
                <div className="w-full">
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof1.jpg"} description={"Celling"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof2.jpg"} description={"Celling"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof3.jpg"} description={"Celling"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof8.jpg"} description={"Celling"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof5.jpg"} description={"Celling"} />
                        </div>
                        <div className="w-full max-w-md sm:max-w-none">
                            <ProductDescription imageUrl={"/Falsecelling/roof/roof6.jpg"} description={"Celling"} />
                        </div>

                    </div>
                </div>
            </section>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            <div className="fixed bottom-20 right-5 z-[1100]">
                <WhatsappButton />
            </div>
        </div>
    )
}