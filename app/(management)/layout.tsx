import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function ManagementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="px-8 py-4">{children}</div>
      </div>
    </div>
  );
}
