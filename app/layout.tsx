import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Young Maccabees",
  description:
    "A Student-lead organization fighting antisemitism on college campuses and beyond, promoting productive dialog through advocacy and education.",
  openGraph: {
    images: [
      "https://o-0-o-image-storage.s3.amazonaws.com/Screenshot+2024-05-02+at+12.34.08%E2%80%AFPM.png",
    ],
  },
  twitter: {
    images: [
      "https://o-0-o-image-storage.s3.amazonaws.com/Screenshot+2024-05-02+at+12.34.08%E2%80%AFPM.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(inter.className, anton.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
