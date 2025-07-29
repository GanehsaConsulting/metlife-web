import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import MedicalFooter from "@/components/footer";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import { FloatingButton } from "@/components/floating-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT. Medlife Abadi Jaya",
  description: "Solusi Kesehatan Terpercaya untuk Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <CustomScrollbar />
        <MedicalFooter />
        <FloatingButton />
      </body>
    </html>
  );
}
