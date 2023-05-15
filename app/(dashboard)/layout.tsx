import GlassPane from "@/components/GlassPane";
import { Inter } from "@next/font/google";
import "@/styles/global.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  //   preload: false,
});

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex justify-center item-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
