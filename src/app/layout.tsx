import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "B-A-A Blog",
  description: "Blog for web developers",
};

const header = (
  <header className="bg-slate-700 py-6 my-3 text-center">
    <Link href={"/"}>
      <Image
        src="/logo.png"
        alt="logo"
        width="48"
        height="48"
        className="mx-auto mb-3"
      />
    </Link>
    <Link href={"/"}>
      <h1 className="text-3xl font-bold text-slate-200 hover:text-slate-400">
        B-A-A Blog
      </h1>
    </Link>
    <p className="text-slate-200">welcome to my web developing blog</p>
  </header>
);

const footer = (
  <footer className="border-t border-slate-700 mt-8 py-2">
    <p className="text-slate-700">Developed By Bahaa Ahmed</p>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-2xl mx-auto px-2">
          {header}
          {children}
          {footer}
        </main>
      </body>
    </html>
  );
}
