"use client";
import Link from "next/link";
import React from "react";

interface NavBar {
  name: string;
  link: string;
}

const navbar: NavBar[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center p-4 ">
        <div className="md:w-[60%] gap-8 md:gap-2 flex justify-center items-center ">
          <div className="w-full">
            <div>
              <Link href="/">
                <h4>Logo</h4>
              </Link>
            </div>
          </div>
          <div className=" flex justify-end gap-8 items-center w-full">
            {navbar.map((items, index) => (
              <div key={index}>
                <div className="">
                  <Link href={items.link} className="text-lg font-oswald ">
                    {items.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full  border-black " />
    </>
  );
};

export default Header;
