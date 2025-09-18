import ProductAppbar from '@/components/ProductAppbar';
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Dashboard from '@/components/Dashboard';
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

export default async function Page() {

  const token = (await cookies()).get("token")?.value;
  if (!token) { return <div>Access Denied</div>; }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string; role: string };
  return (
    <>
      <ProductAppbar heading="Admin Dashboard" />
      {/* Main container for the dashboard layout */}
      <Dashboard />
    </>
  );
  } catch (error) {
    return <div>Access Denied</div>;
  }
}
