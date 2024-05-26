import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const kanit = Kanit({ weight: "300", subsets: ["thai"] });

export const metadata: Metadata = {
  title: "Papuan",
  description: "Nong Papuan Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="flex min-h-screen mx-auto max-w-screen-xl px-8">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
