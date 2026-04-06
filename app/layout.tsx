import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShopEase - Your Online Shopping Destination",
    template: "%s | ShopEase",
  },
  description:
    "Discover the best deals on fashion, electronics, home essentials, and more. Fast delivery, secure payments, and unbeatable prices.",

  keywords: [
    "ecommerce",
    "online shopping",
    "buy products online",
    "best deals",
    "fashion store",
    "electronics store",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ClerkProvider>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </ClerkProvider>
        </Providers>
      </body>
    </html>
  );
}
