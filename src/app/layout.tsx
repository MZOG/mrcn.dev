import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Marcin Zogrodnik",
  description: "robię strony internetowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
