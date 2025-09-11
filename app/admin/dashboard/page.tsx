import ProductAppbar from "@/components/ProductAppbar";
import TableShow from "@/components/TableShow";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export default async function Dashboard() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return <div>Access Denied</div>;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string };

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Navigation - Full width on all screens */}
          <nav className="col-span-1 md:col-span-4 w-full sticky top-0 z-[1000] bg-white shadow-md">
            <ProductAppbar heading="Dashboard" />
          </nav>
          
          {/* Sidebar - Full width on mobile, 1 column on desktop */}
          <div className="col-span-1 row-start-2 md:row-start-2 bg-green-200 p-4 md:p-0">
            <h1 className="text-3xl font-semibold text-black text-center">Tulsi</h1>
            <p className="text-center md:text-left p-2">A list of our recent booking.</p>
          </div>
          
          {/* Main Content - Full width on mobile, 3 columns on desktop */}
          <div className="col-span-1 md:col-span-3 row-start-3 md:row-start-2">
            <h1 className="text-2xl md:text-4xl px-4 md:px-5 font-semibold">Recent booking</h1>
            <div className="pl-2 md:pl-6 pt-2 pr-2 md:pr-6">
              <TableShow />
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <div>Access Denied</div>;
  }
}