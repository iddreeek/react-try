import { Inter, Michroma, Anton, Lato, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma"
})

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton"
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato"
})

const press_start = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start"
})

export const metadata = {
  title: "Edric | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${michroma.variable} ${anton.variable} ${lato.variable} ${press_start.variable}`}>
        <Navbar />
        <div className=" bg-zinc-700/40 h-screen ">
          {children}
        </div>
      </body>
    </html>
  );
}
