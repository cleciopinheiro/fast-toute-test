import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast Route",
  description: "Your bestYour best route option",
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico", // Add the missing url property
    },
  ],
  applicationName: "Fast Route",
  viewport: "width=device-width, initial-scale=1.0",
  publisher: "Fast Route",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <ModalProvider />
            {children}
      </body>
    </html>
  );
}
