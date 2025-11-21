import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// ${geistSans.variable} ${geistMono.variable} antialiased
import { Josefin_Sans } from "next/font/google";
import Header from "@/components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // apply to Josefin_Sans font after it finish downloaded
});

export const metadata: Metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Itailan Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased text-(--primary-100) bg-(--primary-950)  min-h-screen  flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl  mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
