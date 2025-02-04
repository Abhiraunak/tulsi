import Appbar from "@/components/Appbar";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="bg-gradient-to-r from-neutral-300 to-stone-400 w-full h-screen space-y-3">
      <Appbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full">
        <div className="max-w-screen-xl mx-auto space-y-3 selection-none">
          <h1 className="px-2 text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">From  concept to reality we build your vison</h1>
          <h2 className="px-2 text-2xl trecking-tighter text-balance opacity-25">Expert architecture & renovation solutions tailored for you.</h2>
        </div>
        <div className="px-10 flex justify-start gap-4 pt-10">
          <div>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]">
              Services
            </Button>
          </div>
          <div>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white drop-shadow-xl px-6 min-w-[120px]">
              About us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
