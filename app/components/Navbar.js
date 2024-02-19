"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  const inactiveMenu = " hidden";
  const activeMenu = " w-auto h-auto translate-y-3 md:hidden lg:hidden";
  return (
    <main className=" fixed w-screen z-50">
      <header className=" bg-zinc-900">
        <nav className=" flex justify-between p-4 mx-4 ">
          <div className=" flex">
            <Link href={"/"}>
              <h1 className=" text-green-400 text-xl font-bold press-start">
                e
                <span className=" ml-1 relative">
                  <span className=" block absolute -inset-1 -skew-y-3 bg-green-400 rounded-xl"></span>
                  <span className=" text-black text-xl relative font-extrabold">
                    jay
                  </span>
                </span>
              </h1>
            </Link>
          </div>
          <div className="hidden text-green-400 text-xl md:flex lg:flex font-bold lato">
            <ul>
              <Link href={"/projects"} className=" p-4 ">
                Projects
              </Link>
              <Link href={"/"} className=" p-4 ">
                About
              </Link>
              <Link href={"/"} className=" p-4 ">
                Resume
              </Link>
            </ul>
          </div>
          <div className=" flex md:hidden lg:hidden">
            <div>
              <button onClick={handleMenuToggle} className=" text-green-400">
                {showMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className={showMenu ? activeMenu : inactiveMenu}>
        <ul className=" text-green-400 mx-10 bg-zinc-900 rounded-lg w-auto flex items-center justify-center text-xl p-2 font-bold border-[3px] border-green-500 shadow-lg shadow-green-600/50">
          <Link
            href={"/projects"}
            onClick={() => setShowMenu(false)}
            className=" p-2 "
          >
            Projects
          </Link>
          <Link href={"/"} onClick={() => setShowMenu(false)} className=" p-2 ">
            About
          </Link>
          <Link href={"/"} onClick={() => setShowMenu(false)} className=" p-2 ">
            Resume
          </Link>
        </ul>
      </div>
    </main>
  );
}
