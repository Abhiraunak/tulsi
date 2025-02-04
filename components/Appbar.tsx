import Image from "next/image";

export default function Appbar() {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <Image
                src="/logo.png"
                width={100}
                height={200}
                alt="Logo"
            />
        </div>
    );
}