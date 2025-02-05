import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import "./globals.css";

const swiza = localFont({
  src: [
    {
      path: "./fonts/swiza-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/swiza-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Musicfy - Elevate Your Music Experience",
  description:
    "Musicify is a music streaming platform that allows you to listen to your favorite music as well as given insights and analytics on your music.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${swiza.className} antialiased`}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
