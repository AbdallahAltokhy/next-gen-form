import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next gen Form",
  description: "Tomorrow's form, today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{
      backgroundColor: "black",
      marginTop: "-4%",
      padding: 0,
    }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
