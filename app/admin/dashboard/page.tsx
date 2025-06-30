import ProductAppbar from "@/components/ProductAppbar";
import TableShow from "@/components/TableShow";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret"; // fallback for local dev

export default async function Dashboard() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return <div>Access Denied</div>;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string };

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
        </div>
      </>
    );
  } catch (error) {
    return <div>Invalid or expired token</div>;
  }
}
