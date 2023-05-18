"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import githubLogo from "@/assets/images/svgs/github-icon.svg";
import linkedInLogo from "@/assets/images/svgs/linkedin-icon.svg";
import sunnyLogo from "@/assets/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg";
import nightLogo from "../assets/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition-white.svg";
import hamburger from "@/assets/images/svgs/close-to-menu-alt-transition.svg";
import cross from "@/assets/images/svgs/menu-to-close-alt-transition.svg";

const leftSideMenuOptions = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "Blog",
    url: "/blogs",
  },
];

const rightSideMenuOptions = [
  {
    altText: "github",
    url: githubLogo,
  },
  {
    altText: "linkedIn",
    url: linkedInLogo,
  },
];

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname();

  const basePathURL = pathname.split("/")[1];
  return (
    <nav className="w-full sm:flex justify-center px-5 py-2 lg:px-2 fixed bg-white z-20">
      <div className="sm:hidden flex justify-between items-center mb-3">
        <button onClick={() => setMenuVisible(!menuVisible)}>
          {menuVisible ? (
            <Image src={cross} alt="cross" width={40} height={40} />
          ) : (
            <Image src={hamburger} alt="hamburger" width={40} height={40} />
          )}
        </button>
        <button className="p-1 bg-black rounded-full">
          <Image
            src={nightLogo}
            alt="night"
            className="sepia"
            width={30}
            height={30}
          />
        </button>
      </div>

      <div
        className={`${
          menuVisible ? "sm:flex" : "hidden sm:flex"
        } bg-white rounded-lg p-4 sm:rounded-none sm:p-0 sm:bg-transparent w-full lg:max-w-6xl flex-col sm:flex-row justify-between items-center`}
      >
        <ul
          className={`flex flex-col sm:flex-row justify-center items-center font-medium text-base text-slate-600`}
        >
          {leftSideMenuOptions.map((menu) => (
            <li
              key={menu.label}
              className={`my-2 sm:my-0 sm:mx-3 first:ml-0 last:mr-0 px-0.5 h-fit hover:text-slate-700 hover:border-b-2 border-slate-800 ${
                basePathURL === menu.url.split("/")[1] &&
                "border-b-2 border-slate-800 text-blue-600"
              }`}
            >
              <Link href={menu.url}>{menu.label}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden w-full h-0.5 bg-slate-300 mb-2"></div>
        <div className="flex justify-center items-center">
          <ul className="flex">
            {rightSideMenuOptions.map((menu) => (
              <li key={menu.altText} className="mx-3 my-3 first:ml-0 last:mr-0 transition-transform  hover:-translate-y-1">
                <a>
                  <Image
                    src={menu.url}
                    width={25}
                    height={25}
                    alt={menu.altText}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-6 hidden sm:block">
            <button className="p-1 bg-black rounded-full">
              <Image
                src={nightLogo}
                alt="night"
                className="sepia"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
