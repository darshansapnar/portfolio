import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Darshan | Developer Portfolio",
  description: "Personal developer portfolio of Darshan — Developer, AI Enthusiast, and Builder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased selection:bg-[#E50914] selection:text-white">
        {children}
      </body>
    </html>
  );
}
