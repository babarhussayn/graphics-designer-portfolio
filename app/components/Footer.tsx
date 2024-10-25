import Link from "next/link";
import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#c7c3c3] p-4">
        <div className="flex justify-center items-center flex-col gap-8">
          <div>
            <h4>logo</h4>
          </div>
          <div className="flex justify-center items-center gap-20">
            <div>
              <div>
                <Link href="/">
                  <h4 className="uppercase font-oswald font-bold">Home</h4>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <Link href="#portfolio">
                  <h4 className="uppercase font-oswald font-bold">Portfolio</h4>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <Link href="#contact">
                  <h4 className="uppercase font-oswald font-bold">Contact</h4>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  justify-center items-center gap-8">
              <div>
                <h3>
                  <BiLogoFacebookCircle size={40} />
                </h3>
              </div>
              <div>
                <div>
                  <h3>
                    <BiLogoInstagramAlt size={40} />
                  </h3>
                </div>
              </div>
              <div>
                <div>
                  <h3>
                    <BiLogoLinkedinSquare size={40} />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
