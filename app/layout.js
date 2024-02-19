import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edric | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" scroll-m-0">
        <Navbar />
        <div className=" bg-zinc-700/40 h-screen ">
          {children}
        </div>
      </body>
    </html>
  );
}
