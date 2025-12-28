import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TK Imanuel Bogor",
  description: "Membangun generasi cerdas, berkarakter, dan beriman.",
  icons: {
    icon: "/logo-tk-imanuel-bogor.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${fredoka.variable} ${nunito.variable} antialiased selection:bg-kid-yellow selection:text-kid-dark font-sans bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
