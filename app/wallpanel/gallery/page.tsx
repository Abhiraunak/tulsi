import ProductAppbar from "@/components/ProductAppbar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <ProductAppbar heading={"Wall panel"} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl text-green-700 font-extrabold">Hi from gallery</h1>
        <h3 className="text-xl">Stay tuned we will update soon.</h3>
        <Image
          src={"/tulsi-logo1.png"}
          alt={"tulsi-logo"}
          width={300}
          height={300}
          className="mt-4"
        />
      </div>

    </>
  )
}