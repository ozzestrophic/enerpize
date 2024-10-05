import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const typeface = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enerpize",
  description: "The ERP system to run your entire business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={typeface.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
