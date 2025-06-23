import BackgroundVideo from "@/components/BackgroundVideo";
import { AuroraText } from "@/components/ui/aurora-text";
import { WordRotate } from "@/components/ui/word-rotate";


export default function Page() {
    return (
        <div className="max-w-screen-2xl mx-auto max-h-screen bg-white/10">
            <BackgroundVideo />

            <div className="flex flex-col items-center justify-center h-screen z-10 text-center">
                <h1 className="text-[#dd2d4a] text-5xl tracking-tight font-extrabold sm:text-6xl px-4 leading-tight">
                    From concept to reality,
                </h1>

                <h1 className="text-[#dd2d4a] text-5xl tracking-tight font-extrabold sm:text-6xl px-4 leading-tight">
                    we build your <AuroraText>&nbsp;Vision</AuroraText>
                </h1>

                <div className="mt-3 flex flex-wrap items-center text-xl sm:text-2xl">
                    <span className="mr-2 text-white font-semibold">we provided expert solution for</span>
                    <span className="w-[160px] inline-block">
                        <WordRotate
                            className="text-xl font-bold text-black text-left"
                            words={["Wallpanel", "False-celling", "Wallpaint", "False-celling", "Flooring"]}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}