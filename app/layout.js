import { Cairo } from "next/font/google";
import "./globals.css";

const inter = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Gift Store Dashboard",
  description: "Gift Store Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`min-h-screen bg-[#F6F6F6] font-sans antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
