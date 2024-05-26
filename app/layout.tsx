import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

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
        <div className="flex flex-col min-h-screen mx-auto max-w-screen-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
