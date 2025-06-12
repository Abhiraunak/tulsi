import ProductAppbar from "@/components/ProductAppbar";
import TableShow from "@/components/TableShow";

export default function Dashboard() {
    return (
        <>
            <nav className="w-full sticky top-0 z-[1000] bg-white shadow-md">
                <ProductAppbar heading="Dashboard" />
            </nav>
            <div className="pt-[6rem]">
                <h1 className="text-4xl px-5 font-semibold">Recent booking</h1>
                <div className="pl-6 pt-2 pr-6">
                    <TableShow />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}