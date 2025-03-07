import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tulsi",
  description: "architecture, home renovation, interior design, false ceilings, painting, construction, home improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
