import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <div className="flex min-h-screen mx-auto max-w-screen-xl">
          <Sidebar />
          <main className="flex flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
