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
      url: "/16.png",
      rel: "icon",
      type: "image/png",
      href: "/16.png",
      sizes: "16x16",
    },
    {
      url: "/32.png",
      rel: "icon",
      type: "image/png",
      href: "/32.png",
      sizes: "32x32",
    },
    {
      url: "/192.png",
      rel: "icon",
      type: "image/png",
      href: "/192.png",
      sizes: "192x192",
    },
    {
      url: "/512.png",
      rel: "icon",
      type: "image/png",
      href: "/512.png",
      sizes: "512x512",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
            <ModalProvider />
            {children}
      </body>
    </html>
  );
}
