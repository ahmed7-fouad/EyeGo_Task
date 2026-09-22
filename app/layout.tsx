"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {store} from "../mainStore/store";
import { Provider } from "react-redux";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "EyegoDash",
//   description: "Dashboard For handling tasks and data",
// };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider store={store}>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
