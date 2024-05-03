"use client"
import Link  from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useState } from "react";
import { CgMenu } from "react-icons/cg";

import { IoClose } from "react-icons/io5";

let NavLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/works",
    text: "Works",
  },
  {
    id: 3,
    path: "/about-us",
    text: "About",
  },
  {
    id: 4,
    path: "/contact-us",
    text: `Contact`,
  },
];

const Header = () => {
  const [isAside, setIsAside] = useState(false);
  let pathname = usePathname();
  console.log("pathname",pathname);

  const handleAside = () => {
    setIsAside(!isAside);
  };

  return (
    <Fragment>
      <div className="sticky top-0 bg-black px-10 gap-10 py-5  xl:px-20  z-50 flex items-center justify-between w-[100%]">
        <div className="w-[100%] md:w-1/4">
        <Link href="/" >
            <span className="black text-white text-[30px]">RABTOISE</span>
          {/* <img loading="lazy" src="/headerlogo.png" className="w-[140px] md:w-[160px] lg:w-[200px]" alt="logo..." /> */}
        </Link>
        </div>

        <div className=" w-[100%] md:w-3/4 hidden md:flex text-[16px]   lg:text-[20px] xl:text-[24px] medium items-center justify-center gap-8 text-white">
          {NavLinks.map((nav) => (
            <span
              key={nav.id}
              className={`${pathname === nav.path ? " text-primary" : ""}`}
            >
              <Link href={nav.path}>{nav.text}</Link>
            </span>
          ))}
        </div>
        <div className="flex md:hidden text-[30px] text-white">
          <CgMenu className=" cursor-pointer" onClick={handleAside} />
        </div>
        <div className="w-[100%] md:w-1/4 gap-5 hidden md:flex items-center justify-center">
           <img src="/assets/linkedin.webp" alt=""  className="w-[20px] h-[20px]"/>
           <img src="/assets/facebook.webp" alt=""  className="w-[20px] h-[20px]" />
           <img src="/assets/twitter.webp" alt=""  className="w-[20px] h-[20px]" />
           <img src="/assets/instagram.webp" alt=""  className="w-[20px] h-[20px]" />
           <img src="/assets/youtube.webp" alt=""  className="w-[20px] h-[20px]" />
        </div>
        <div
          className={`${
            isAside ? "ml-[0%]" : "ml-[-100%]"
          } transition-all duration-500 fixed h-[100vh] w-[100%] top-0 left-0 bg-white z-50`}
        >
          {isAside ? (
            <div className="flex px-5 sm:px-10 py-5 gap-5 w-[100%] flex-col items-start justify-start">
              <div className="flex items-center justify-between w-[100%]">
                <Link href="/">
                  <img loading="lazy" src="/assets/headerlogo.png" className="h-[50px]" alt="" onClick={handleAside} />
                </Link>
                <IoClose
                  className="text-[30px] black text-[#000] cursor-pointer"
                  onClick={handleAside}
                />
              </div>
              <div className="flex mt-5 gap-5 px-10 items-start medium text-[18px] justify-start w-[100%] flex-col">
                {NavLinks.map((nav) => (
                  <span
                    onClick={handleAside}
                    key={nav.id}
                    className={`${
                      pathname === nav.path ? " text-primary" : ""
                    }`}
                  >
                    <Link href={nav.path}>{nav.text}</Link>
                  </span>
                ))}
                <div className="mt-5">
                  <div>Follow us</div>
                  <div className="flex items-start mt-3 gap-3 justify-start">
                    {/* <img src="/home/facebook.svg" alt="" className='w-[20px] h-[20px]' /> */}
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <img loading="lazy" src="/assets/instagram.webp" className="w-[20px] h-[20px]" alt="instagram image..." />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
