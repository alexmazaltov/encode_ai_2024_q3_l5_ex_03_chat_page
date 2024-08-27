import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@assets/styles/globals.css";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALEF INVEST™ - Cybersecurity and Blockchain Solutions",
  description: "ALEF INVEST™ provides cutting-edge security solutions for Unix, Windows, Mobile, Web3, and Blockchain technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}