import type React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { Providers } from "./providers";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gift Store Dashboard",
  description: "Gift Store Management Dashboard",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn("min-h-screen bg-[#F6F6F6] font-sans antialiased", inter.className)}>
        <Providers>
          <DashboardHeader />
          <div className="flex min-h-screen flex-row-reverse">
            <main className="flex-1">
              {children}
            </main>
            <DashboardSidebar />
          </div>
        </Providers>
      </body>
    </html>
  );
}

