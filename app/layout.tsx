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
        <main>
          <div className="min-h-screen mx-auto max-w-screen-xl px-8 py-2">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
